import express from "express";
import knex from "knex";

const app = express();
const port = 3000;

// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true,  // Omit warning in console
});



// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});


// Route ::: /unconfirmed-users should respond with unconfirmed users
app.get('/unconfirmed-users', async (req,res) => {
  const unconfirmed_users = await knexInstance.raw("select * from users u where confirmed_at is NULL");
  res.json(unconfirmed_users);
})

// Route :::: /gmail-users should respond with users with an @gmail.com email
app.get('/gmail-users',async (req,res) => {
  const gmail_users = await knexInstance.raw(`select * from users u where email LIKE "%gmail%"`);
  res.json(gmail_users);

})

// Route ::::: /2022-users should respond with users created in 2022
app.get('/2022-users', async (req,res) => {
  const users = await knexInstance.raw(`select * from users u where confirmed_at LIKE "%2022%"`);
  res.json(users);
})

// Route ::::: /user-count should respond with the number of users
app.get('/user-count' , async (req,res) => {
  const user_count = await knexInstance.raw("select COUNT (*) as count from users u");
  res.json(user_count);
})


// Route :::: /last-name-count should respond with how many users there are with a given last name, sorted alphabetically

app.get('/last-name-count', async (req,res) => {
  const last_name_count = await knexInstance.raw("select last_name, COUNT (*) as count from users u GROUP BY last_name ORDER BY last_name ASC");
  res.json(last_name_count);
})

// Route ::::: /first-user should respond with the first user. If there are no users in the table, respond with a 404
app.get('/first-user', async (req,resp) => {
  const first_user = await knexInstance.raw("select * from users u LIMIT 1");
  if(first_user.length === 0){
    resp.status(404).send("No users found");
    return;
  }
  resp.json(first_user);
})

// Assignment  - Add 3 new routes

// Route :::: /2023-created-confirmed-users
app.get('/2023-created-confirmed-users', async (req,resp) =>{
  const result = await knexInstance.raw(`select * from users u where created_at LIKE "%2023%" AND confirmed_at is NOT NULL`);
  resp.json(result);
})

// Route ::::: /confirmed-users-emails
app.get('/confirmed-users-email', async (req,resp) => {
  const confirmed_users_email = await knexInstance.raw(`select first_name, email from users u where u.confirmed_at is NOT NULL;`);
  resp.send(confirmed_users_email);
})

// Route :::: /confirmed-users-count
app.get('/confirmed-users-count', async (req,resp) => {
  const confirmed_users_count = await knexInstance.raw(`select count(*) from users u where u.confirmed_at is not NULL;`);
  resp.json(confirmed_users_count);
})

// Extend the home route
app.get("/", async (req, res) => {
  const countResp = await fetch(`http://localhost:${port}/user-count`);
  console.log("TOTAL USERS :::  "+countResp);
  const data = await countResp.json();
  let users_count = 0;
  if(data.length>0){
    users_count = data[0].count;
      console.log("In loop :::: "+data[0].count);
  }
  res.send(
    `<div style="display:flex;flex-direction:column;text-align:center;background-color: black;height:100%;width:100%"><div><h1 style="color: green;">Users</h1></div><div style="margin:auto;color:green;width:300px;height:70px;border:solid green 2px;border-radius:10px;"><h2>Total Users : ${users_count}</h2></div></div>`
  )
});
  

// TODO implement more routes here

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});