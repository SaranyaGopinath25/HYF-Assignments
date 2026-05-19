import React, { useState, useEffect } from 'react';
import RoverPhoto from './RoverPhoto';


// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = 'Pw3RA1Rt6OHal41JrW9ryiUm6Wnf8c7C2yIU0iJi';

const NASA_URLs = {
  // astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
 astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=2024-05-01`,
  // marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
  marsRoverPhoto: `https://images-api.nasa.gov/search?q=Mars rover&media_type=image`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();

    // 🧑🏽‍🚀 Task - Week 3 
    // Fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable.

    const fetchAstronomyPicOfTheDay = async () => {
      const astronomyPicOfTheDay = await fetch(NASA_URLs.astronomyPicOfTheDay)
      .then(response => response.json());
      setDailyImg(astronomyPicOfTheDay);
    }

    fetchAstronomyPicOfTheDay();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here. */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          <h3>{dailyImg.title}</h3>
          <p>{dailyImg.explanation}</p>
          <img src={dailyImg.url} alt={dailyImg.title} />
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* 🧑🏽‍🚀 Task - Week 3 */}
          {/* Iterate over the roverPhoto?.photos array and display all the pictures. */}
          {
            roverPhoto?.collection?.items?.length ? (
              <>
                {/* 🧑🏽‍🚀 Task - Week 3 */}
                {/* Create a react component for the <RoverPhoto />, which should accept the following props: */}
                {/* 1. src: source of the img; */}
                {/* 2. date: earth_date data coming from the API; */}
                {/* 3. roverName: will be in the rover object. */}
                
                {/* If you don't know how the data looks like you can log it out to the console and investigate in the browser's devtools. */}
                {
                  roverPhoto?.collection?.items.map(item => (
                    <RoverPhoto key={item.data.nasa_id} imgUrl={item.links[1].href} date={item.data[0].date_created} alt={item.data[0].title}/>             
                  ))
                }
              </>
              ) : (
                <p>Loading rover photos...</p>
              )
            }
        </section>
      </main>
    </div>
  );
}

export default NasaCollaboration;
