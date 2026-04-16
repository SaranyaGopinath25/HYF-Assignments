import store from "./../store.js";


class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    // validateLogin(email, password){
    //     for(let user of store.users){
    //         console.log("Checking user:", user.email);
    //         if(user.email === email && user.password === password){
    //             store.currentUser = user.email;
    //             console.log("User logged in:", store.currentUser);
    //             return true;
    //         }
    //     }
    //     console.log("Login failed for email:", email);
    //     return false;
    // }
}


export default User;