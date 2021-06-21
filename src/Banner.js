import React,{ useEffect, useState } from 'react';
import axios from './axios';
import requests from './requests';



function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setmovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();

    }, []);
    return (
  <header className="banner"
  style={{
      backgroundSize:"cover",
      backgroundImage:`url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
      backgroundPosition:"center",
  }}> {/*backgroundimage*/}
       {/*title*/}
       <div className="banner__contents">
       <h1>
           {movie?.title || movie?.name || movie?.original_name}
       </h1>
       <div className="banner__buttons">
           <button className="banner__button">Play</button>
           <button className="banner__button">My List</button>
       </div>
       <h1 banner__description>{movie?.overview}</h1>

       </div>
       
        {/*div2buttons*/}
         {/*description*/}
  </header>
    )
}

export default Banner
