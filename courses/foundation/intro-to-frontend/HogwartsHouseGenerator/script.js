
// #1 Get the name from the input field
// #2 Get a random house form the list
// #3 Onclick of the button -- > Display the result 
// #4 Display the image according to the random house

const $ = (selector) => document.querySelector.bind(document)(selector); 
const $id = (id) => document.getElementById.bind(document)(id);
const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

function hogwartsHouseMatcher(){
    
    const myForm = $("form");
    myForm.addEventListener("submit",function(event) {generateHogwartsHouse(event)});
    
    

}

function confirmHouse(){
    const house = $id("houseResult").textContent;
    const arr = house.split(" ");
    const houseName = arr[arr.length-1];
    alert(`House confirmed! Welcome to ${houseName} Hogwarts House!`);
    const btnGrp = document.getElementsByClassName("btnGroup")[0];
    btnGrp.remove();
    const getHouseBtn = document.createElement("button");
    getHouseBtn.textContent = "Get My House";
    getHouseBtn.type = "submit";
    $("form").appendChild(getHouseBtn);
    const inputField = $("input");
    inputField.value = "";
    const heading2 = $id("houseResult");
    heading2.textContent = "You will get your House here";
    const houseImage = $id("houseImage");
    houseImage.src = `./assets/HP-house.webp`;
}

function tryAgain(){
    const userName = $("input").value;
    console.log("Name is ::: "+userName);
    const house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
    console.log("Your House is "+house);
    const heading2 = $id("houseResult");
    heading2.textContent = `${userName} belongs in ${house}`;
    const houseImage = $id("houseImage");
    houseImage.src = `./assets/${house}.jpg`;

}

function generateHogwartsHouse(event){
    console.log("Get username called ");
    event.preventDefault();
    //CHange the buttons to Confirm and Try again 
    const confirmBtn = document.createElement("button");
    confirmBtn.textContent = "Confirm";
    confirmBtn.type = "button";
    confirmBtn.addEventListener("click", confirmHouse);
    const tryBtn = document.createElement("button");
    tryBtn.textContent = "Try Again";
    tryBtn.type = "button";
    tryBtn.addEventListener("click", tryAgain);
    $("button").remove();

    const btnDiv = document.createElement("div");
    btnDiv.append(confirmBtn,tryBtn);
    btnDiv.className = "btnGroup";
    const formEle = $("form");
    formEle.appendChild(btnDiv);

    const userName = $("input").value;
    console.log("Name is ::: "+userName);
    const house = hogwartsHouses[Math.floor(Math.random() * hogwartsHouses.length)];
    console.log("Your House is "+house);
    const heading2 = $id("houseResult");
    heading2.textContent = `${userName} belongs in ${house}`;
    const houseImage = $id("houseImage");
    houseImage.src = `./assets/${house}.jpg`;
    
}

hogwartsHouseMatcher();


