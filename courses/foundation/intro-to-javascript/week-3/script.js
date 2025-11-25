
/*
Assignment #1: Remove an item from an array

*/

console.log("Assignment #1");

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
const indexOfTheElement = names.indexOf("Ahmad");
console.log(indexOfTheElement);

const slicedArr1 = names.slice(0,indexOfTheElement);
const slicedArr2 = names.slice(indexOfTheElement + 1, names.length);
const joinedArr = slicedArr1.concat(slicedArr2);


// Code done

console.log(joinedArr); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

console.log("***************************************************************************************");

/*
Assignment #2
- Create a function to find the Time taken for the speed and distance given as params

*/

console.log("Assignment #2");

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

function calculateTravelTime(travelInformation){
    let time = travelInformation.speed/60 * travelInformation.destinationDistance;
    return Math.round(time/60) +" hours and "+Math.round(time%60)+ " minutes";
}

console.log("***************************************************************************************");

/*
Assignment #3
- Create a functions that logs out the time a tv series have 
taken as a percentage of an average lifespan of 80 years.

*/

console.log("Assignment #3");

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
  for(let series of seriesDurations){

      let avgLifespanInMins = 80 * 365 * 24 * 60;
      let seriesDurationInMins = (series.days * 24 * 60) + (series.hours * 60) + series.minutes;
      //round of the decimal to 3 places using Math.round
      let percentOfTimeTakenInLife = Math.round(((seriesDurationInMins/avgLifespanInMins) * 100) * 1000) / 1000;
      console.log(`${series.title} took ${percentOfTimeTakenInLife}% of my life`);
  }

}

logOutSeriesText(); // logs out the text found above

console.log("***************************************************************************************");

/*
Note Taking App
- Create a function saveNote with 2 params id & content 
- Create function to get the note
- Create function to delete particular note.
*/

console.log("Assignment #4");

let notes = [];

function saveNote (content, id) {
    let note = {};
    note.id = id;
    note.content = content;
    console.log(note);
    notes.push(note);

}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

// Get A Note

function getNote(id) {
  // your code here
  return notes[id-1];
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//Delete A Note

function deleteNote(id){
    for(let note of notes){
        if(note.id === id){
            let index = notes.indexOf(note);
            notes.splice(index,1);      
        }
    }

}
deleteNote(1);
console.log(notes);


//Log out Notes

function logOutNotesFormatted() {
  // your code here
  for(let note of notes){
    console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`);
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

console.log("***************************************************************************************");

/*
Assignment #5
- Add Activity
- Create an array called activities
- Create a function addActivity with 3 params activity, date  and duration.
Optional : 
- Improved addActivity with passing 2 params without date.
*/

console.log("Assignment #5")

let activities = [];

let date = new Date().toLocaleDateString("en-GB");
console.log("Today's Date is "+date);
function addActivity(activity, duration){
    console.log(activity);
   let activityObj = {
        date: date,
        activity: activity,
        duration: duration
   };
    activities.push(activityObj);
    console.log(activities);
}

addActivity("Youtube", 30);
addActivity("facebook", 20);
addActivity("Duolingo", 20);
addActivity("Slack", 15);
addActivity("LinkedIn", 10);

console.log(activities); // should log out the array with all activities

/* Usage Limit
- Create a function to set the usageLimit
- Modify showStatus functions to log out "You have reached your limit, no more smartphoning for you!", 
if you exceed the limit.
*/

let usageLimit = 0;

function setUsageLimit(limit){
    usageLimit = limit;
}

setUsageLimit(60);
console.log("Usage Limit set is "+usageLimit);

// Show my Status - Extra Feature

function showStatus(activities){

    let numOfActivities = activities.length;
    if(numOfActivities > 0){
        let timeUsage = 0;
        for(let activity of activities){
            timeUsage += activity.duration;
        }
        console.log(`You have added ${numOfActivities} activities. They amount to ${timeUsage} mins of usage`)
        if(timeUsage > usageLimit){
            console.log("You have reached your limit, no more smartphoning for you!");
        }
    }
    else{
        console.log("Add some activities before calling showStatus"); 
    }
}

showStatus(activities);
showStatus([]);

// Show Status function for specific date



function showStatusForDate(date){
    let activitiesForTheDay = [];
    for(let activity of activities){
        if(activity.date === date){
            activitiesForTheDay.push(activity);
        }
    }   
    return activitiesForTheDay.length;
}

let activitiesForTheDate = showStatusForDate(new Date().toLocaleDateString("en-GB"));
console.log(`Number of activities for Today ${activitiesForTheDate}`);


// Create a function to find the activity the user spent most the time on.

function mostTimeSpentActivity(){
    
    let mostTimeSpentActivity = "";
    let previousActivityTime = 0;
    for(let activity of activities){
        console.log(activity);
        if(activity.duration > previousActivityTime){
            console.log("TIME ::: "+activity.duration+" : "+activity.activity);
            mostTimeSpentActivity = activity.activity;
        }
        previousActivityTime = activity.duration;

    }
    return mostTimeSpentActivity;
}
let mostTimeSpentOnActivity = mostTimeSpentActivity();
console.log(`User spent most time on the activity ${mostTimeSpentOnActivity}`);


console.log("***************************************************************************************");









