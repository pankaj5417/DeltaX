import "./songs.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Songs = () => {

  const [song,setSong]=useState()
  const [artistData,setArtistData]=useState()

  const navigate=useNavigate()

  const getArtist = async () => {
   const res= await axios.get("/artists");
   setArtistData(res.data.artists)
   console.log("artists",res.data.artists)
    
  };

  const getSongs = async () => {
  const res= await axios.get("/songs",);

  setSong(res.data.songs)
    console.log("songs",res)

   
  };
  useEffect(()=>{
    getArtist()
    getSongs()
  },[])

  
  return (
    <>
      <div className="songs">
        <div className="songsListContainer">
          <div className="songsHeading d-flex align-items-center  justify-content-between ">
            <h2>Top ten Songs</h2>
            <div onClick={()=>navigate('/addSong')} className="addSongButton">
              <i class="fa fa-plus" aria-hidden="true"></i>

              <span>Add Song</span>
            </div>
          </div>
          <div className="songsList">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Artwork</th>
                  <th scope="col">Song</th>
                  <th scope="col">Date of Release</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>
              <tbody>
               
                  {
                    song?.map(d=>(
                      <>
                      <tr>
                  <td  >
                    <img style={{width:"100px"}} src={d.Cover} alt="" />
                  </td>
                  <td >{d.Name}</td>
                  <td>{d.DateofRelease}</td>
                  <td>{(d.artist_id.map(a=>a.name)).join(",")}</td>
                  </tr>
                      </>
                    ))
                  }
              </tbody>
            </table>
          </div>
        </div>

        <div className="artistList">
          <h2>Top ten Artists</h2>

        
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Artists</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Song</th>
                  
                </tr>
              </thead>
              <tbody>
                {
                  artistData?.map(d=>(
                    <>
                <tr>
                  
                  <td>{d.name}</td>
                  <td>{d.DOB}</td>
                  <td>{(d.song_id.map(d=>d.Name)).join(",")}</td>
                </tr>
                    
                    </>
                  ))
                }
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};
