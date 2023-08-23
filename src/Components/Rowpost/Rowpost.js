import React,{useState,useEffect} from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imgUrl} from '../../Constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)

    }).catch(err=>{
      // alert('Authorization Error')
    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleTrailer= (id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
 if(response.data.results.length!==0){
  setUrlId(response.data.results[0])
 }else{
  console.log('Array empty')
 }
})
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleTrailer(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="poster" />

          )}

            
           
        </div>
       { urlId && <Youtube opts={opts} videoId={urlId.key} />}

      
    </div>
  )
}

export default Rowpost
