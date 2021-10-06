import fetch from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import firebase from 'firebase';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie';


(async () => {
  // Get movies collection
  let collectionRef = db.collection('movies');

  // Create a Project
  const createMovie = (movie) => {
    // Add a document via movie object
    const data = {
      title: movie.title,
      overview: movie.overview,
      id: movie.id,
      vote_average: movie.vote_average,
      release_date: movie.release_date,
      original_language: movie.original_language,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,

      ...generateTimestamps()
    };

    collectionRef.doc(uuidv4()).set(data).then(documentReference => {
      console.log(`Added movie.`);
    });
  };

  // Create movies via promises
  const createMovies = async () => {
    let data = [];
    for (let i = 1; i < 8; i++) {
      const response = await fetch(`${MOVIES_API}?api_key=eaac9d6ba629f37e70d4e6177e43fb2a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}`);
      const jsonData = await response.json();
      data = [...data, ...jsonData.results ] 
    }

    db.collection('counters').doc('movies').set({numAmount: data.length}, {merge: true});

    const promises = [];
    data.forEach(movie => {
      promises.push(createMovie(movie));
    });
    return await Promise.all(promises);
  };

  await createMovies(); 
})();