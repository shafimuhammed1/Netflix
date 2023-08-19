import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imgUrl} from '../../Constants/constants'

function Rowpost(props) {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)

    }).catch(err=>{
      // alert('Authorization Error')
    })

  },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img className={props.isSmall?'smallPoster':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />

          )}

            
           
        </div>

      
    </div>
  )
}

export default Rowpost
