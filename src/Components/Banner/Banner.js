import React, {useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY} from '../../Constants/constants'

function Banner() {
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
    })


  },[])
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='Movie-title'>Movie Name</h1>
            <div className='movie-buttons'>
                <button className='buttons'>Play</button>
                <button className='buttons'>My list</button>
            </div>
            <h1 className='description'>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
            </h1>
        </div>
        <div className="fade-bottom"></div>


      
    </div>
  )
}

export default Banner
