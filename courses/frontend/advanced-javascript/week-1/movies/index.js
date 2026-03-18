
import { movies } from "./movies.js";

// Ex:1 -  Shortlist movie array with short title of 10

function groupMoviesByTitleLength(movies,callBackFn){
    console.log("Total movies ::::: "+movies.length);
    const shortTitleMovies = movies.filter(callBackFn);
    console.log("Total short title movies ::::: "+shortTitleMovies.length);
    return shortTitleMovies;
}

function filterShortTitleMov(movie){
    return movie.title.length <= 10;
}



// Ex:2 - Shortlist movie array with long movie titles (>10)


function filterLongTileMov(movie){
    return movie.title.length > 10;
}


// Ex:3 - Count the number of movies made between 1980-1989 (including both the years)

function movieCountBetweenYears(movies, fromYear, toYear){
    const moviesBetweenYears = movies.filter(movie => {return movie.year >= fromYear && movie.year <=toYear});
    return moviesBetweenYears;
}


// Ex:4 - Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

function categoriseRating(movies){
    for(let movie of movies){
        if(movie.rating >= 7){
            movie.tag = "Good";
        }
        else if(movie.rating >= 4 && movie.rating < 7){
            movie.tag = "Average";
        }
        else{
            movie.tag = "Bad";
        }
    }
}

/* Ex:5 - Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
        - Now map the movies array to only the rating of the movies.
*/

function getHighlyRatedMovies(movies){
    return movies.filter(movie => {return movie.rating > 6});
}


/*
    Ex:6 - Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
         - So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
         - Can you make sure the search is case insensitive?
*/

function getMovieCountForKeywords(movies){
    const keywords = ["Surfer", "Alien", "Benjamin"];
    let totalCount = 0;
    for(let keyword of keywords){
        let count = movies.filter(movie => {return movie.title.toLowerCase().includes(keyword.toLowerCase())}).length;
        totalCount += count;
    }
    return totalCount;
   
}

/*
    Ex:7 - Create an array of movies where a word in the title is duplicated. e.g. "Star Wars: The Clone Wars" the word Wars is duplicated. 
         - Here are some made-up examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
*/

function getMoviesWithDuplicatedWords(movies){
    let duplicatedMovies = movies.filter((movie) => {
        let wordsArr = movie.title.split(' ');
        let duplicatedWords = wordsArr.filter((word) => {
            return wordsArr.indexOf(word) !== wordsArr.lastIndexOf(word);
        }).length;
        return duplicatedWords > 0;
    });
    return duplicatedMovies;
}
getMoviesWithDuplicatedWords(movies);


/*
    Ex:8 - Calculate the average rating of all the movies using .reduce()
*/

function calculateAverageRating(movies){
    const initialValue = 0;
    const sumOfRating = movies.reduce((sum,movie) => 
        sum + movie.rating, initialValue,
    );
    const movieCount = movies.length;
    const avgRating = (sumOfRating / movieCount).toFixed(2);
    return avgRating;
}

calculateAverageRating(movies);


/*
    Ex:9 - Count the total number of Good, Average and Bad movies using .reduce()
         - A return could be e.g. {goodMovies: 33, averageMovies: 45, badMovies: 123} 
*/

function countMoviesByRating(movies){
    const categorisedMovies = calculateAverageRating(movies);
    const initialValue = {goodMovies: 0, averageMovies: 0, badMovies: 0};
    const moviesByRating = movies.reduce((acc,movie) => {
        switch(movie.tag){
            case "Good":
                acc.goodMovies += 1;
                break;
            case "Average":
                acc.averageMovies += 1;
                break;
            case "Bad":
                acc.badMovies += 1;
                break;
        }
        return acc;
    }, initialValue);
    return moviesByRating;
}


// DOM Functions 

function displayMovies(movieList, title = "") {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    if (title) {
        const titleElement = document.createElement('h2');
        titleElement.textContent = title;
        titleElement.style.width = '100%';
        resultsDiv.appendChild(titleElement);
    }
    
    if (movieList.length === 0) {
        resultsDiv.innerHTML += '<p>No movies found</p>';
        return;
    }
    
    movieList.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Votes:</strong> ${movie.votes}</p>
            <p><strong>Duration:</strong> ${Math.floor(movie.running_times / 60)} min</p>
            ${movie.tag ? `<p><strong>Tag:</strong> ${movie.tag}</p>` : ''}
        `;
        resultsDiv.appendChild(card);
    });
}

function displayCount(count, label) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.width = '100%';
    card.style.textAlign = 'center';
    card.innerHTML = `<h3>${label}</h3><p style="font-size: 24px; font-weight: bold;">${count}</p>`;
    resultsDiv.appendChild(card);
}

function displayAverage(avg) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.width = '100%';
    card.style.textAlign = 'center';
    card.innerHTML = `<h3>Average Rating</h3><p style="font-size: 24px; font-weight: bold;">${avg}</p>`;
    resultsDiv.appendChild(card);
}

function displayRatingCounts(counts) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    const title = document.createElement('h2');
    title.textContent = 'Movies by Rating';
    title.style.width = '100%';
    resultsDiv.appendChild(title);
    
    const goodCard = document.createElement('div');
    goodCard.className = 'movie-card';
    goodCard.innerHTML = `<h3>Good Movies (≥ 7)</h3><p style="font-size: 24px; font-weight: bold;">${counts.goodMovies}</p>`;
    
    const avgCard = document.createElement('div');
    avgCard.className = 'movie-card';
    avgCard.innerHTML = `<h3>Average Movies (4-6.9)</h3><p style="font-size: 24px; font-weight: bold;">${counts.averageMovies}</p>`;
    
    const badCard = document.createElement('div');
    badCard.className = 'movie-card';
    badCard.innerHTML = `<h3>Bad Movies (< 4)</h3><p style="font-size: 24px; font-weight: bold;">${counts.badMovies}</p>`;
    
    resultsDiv.appendChild(goodCard);
    resultsDiv.appendChild(avgCard);
    resultsDiv.appendChild(badCard);
}

// Event Listeners

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('button');
        
        // Button 1: Show All Movies
        buttons[0].addEventListener('click', () => {
            displayMovies(movies, 'All Movies');
        });
        
        // Button 2: Movies with Short title (≤ 10 characters)
        buttons[1].addEventListener('click', () => {
            const shortMovies = groupMoviesByTitleLength(movies, filterShortTitleMov);
            displayMovies(shortMovies, `Movies with Short Titles (≤ 10 characters) - ${shortMovies.length} found`);
        });
        
        // Button 3: Movies with Long title (> 10 characters)
        buttons[2].addEventListener('click', () => {
            const longMovies = groupMoviesByTitleLength(movies, filterLongTileMov);
            displayMovies(longMovies, `Movies with Long Titles (> 10 characters) - ${longMovies.length} found`);
        });
        
        // Button 4: Movies Between 1980 - 1989
        buttons[3].addEventListener('click', () => {
            const moviesInRange = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
            displayMovies(moviesInRange, `Movies Between 1980-1989 - ${moviesInRange.length} found`);
        });
        
        // Button 5: Movies with Good/Bad/Average tag
        buttons[4].addEventListener('click', () => {
            categoriseRating(movies);
            displayMovies(movies, `All Movies with Rating Tags - ${movies.length} total`);
        });
        
        // Button 6: Highly rated movies (> 6)
        buttons[5].addEventListener('click', () => {
            const highlyRated = getHighlyRatedMovies(movies);
            displayMovies(highlyRated, `Highly Rated Movies (> 6) - ${highlyRated.length} found`);
        });
        
        // Button 7: Movies count with Special keywords
        buttons[6].addEventListener('click', () => {
            const count = getMovieCountForKeywords(movies);
            displayCount(count, 'Total Movies with Keywords (Surfer, Alien, Benjamin)');
        });
        
        // Button 8: Movies with duplicated words
        buttons[7].addEventListener('click', () => {
            const duplicatedMovies = getMoviesWithDuplicatedWords(movies);
            displayMovies(duplicatedMovies, `Movies with Duplicated Words in Title - ${duplicatedMovies.length} found`);
        });
        
        // Button 9: Average rating of the movies
        buttons[8].addEventListener('click', () => {
            const avgRating = calculateAverageRating(movies);
            displayAverage(avgRating);
        });
        
        // Button 10: Movies count with ratings
        buttons[9].addEventListener('click', () => {
            const ratingCounts = countMoviesByRating(movies);
            displayRatingCounts(ratingCounts);
        });
    });
}