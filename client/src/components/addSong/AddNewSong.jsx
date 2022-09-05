import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./addNewSong.css";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
export const AddNewSong = () => {
  const initialState = {
   songname: '',
   releaseDate: '',
    picture: '',
    artists:"",
   
    createdDate: new Date()
  };

  const navigate = useNavigate();
  // const location = useLocation();

  const [song, setSong] = useState(initialState);
  const [file, setFile] = useState("");
  const [artist,setArtist]=useState({})
  const artistRef=useRef()

  const handleArtist=(e)=>{
   const {value}=e.target
   console.log(value)
    //  const val=artistRef.current.hasValue()
    // setSong({...song,"selectartist":val})
    // song.selectartist=val
      // setArtist(e.target.value)
  }
console.log("song",song)
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("picture", file.name);
        data.append("file", file);

        const response = await axios.post("/upload", { data });
        console.log(response)
        song.picture = response.data;
      }
    };
    getImage();
    // post.categories = location.search?.split('=')[1] || 'All';
    // post.username = account.username;
  }, [file]);

  const saveSong = async () => {
   const res= await axios.post("/songs", { song });
   console.log("song",res)
    navigate("/");
  };

  const addArtist = async () => {
   const res= await axios.post("/artists", { artist });
   console.log("artist",res)
    navigate("/");
  };
  const handelModal = (e) => {
   setArtist({ ...artist, [e.target.name]: e.target.value });

  };

  console.log("artist",artist)
  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const options = [
    {
      label: "Pritam",
      value: "Pritam",
    },
    {
      label: "Arijit Singh",
      value: "Arijit Singh",
    },
    {
      label: "3",
      value: 3,
    },
  ];

  const styles = {
    container: (base) => ({
      ...base,
      flex: 1,
    }),
  };
  return (
    <>
      <div className="addNewSongContainer">
        <form action="" onSubmit={(e)=>e.preventDefault()}>
          <div className="mb-3 row">
            <label for="inputSong" className="col-sm-2 col-form-label">
              Song Name
            </label>
            <div className="col-sm-10">
              <input
                name="songname"
                onChange={handleChange}
                type="text"
                className="form-control"
                id="inputSong"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputDate" className="col-sm-2 col-form-label">
              Date Released
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                name="releaseDate"
                onChange={handleChange}
                className="form-control"
                id="inputDate"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Artwork</label>
            <div className="col-sm-2 d-flex align-item-center">
              <label
                for="inputFile"
                className="col-sm-10 d-flex col-form-label"
              >
                <i className="fa fa-picture-o fa-2x " aria-hidden="true"></i>
                <span>Upload Image</span>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChange}
                  accept=".png,.jpeg,.jpg"
                  className="form-control"
                  id="inputFile"
                  name="picture"
                />
              </label>
            </div>
          </div>
          

        </form>

        <div className="selectBox d-flex">
          <label for="select" className="col-sm-2 col-form-label">
            Artist
          </label>
          <Select
            styles={styles}
             value={song.selectartist}
            options={options}
            name="artists"
           ref={artistRef}
            onChange={d => handleChange({ target: { value: d.value, name: 'artists' } })}
          />

          <div className="addSongButton">
            <i className="fa fa-plus" aria-hidden="true"></i>

            <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add Artist
            </span>
          </div>
           

            <div
              className="modal fade"
              id="staticBackdrop"
              style={{ width: "800px !important" }}
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div
                style={{ width: "900px !important" }}
                className="modal-dialog modal-dialog-centered modal-dialog-scrollable "
              >
                {/* <div className="modal-dialog"> */}
                <div
                  className="modal-content"
                  style={{ width: "900px !important" }}
                >
                  <div className="modal-header">
                    <h5 className="modal-title" style={{ color: "black" }}>
                      Add Artist
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                    <form action="" onSubmit={(e)=>e.preventDefault()}>
                  <div className="modal-body " style={{ color: "black" }}>
                    <div className="mb-3 row">
                      <label
                        for="inputArtist"
                        className="col-sm-2 col-form-label text-dark"
                      >
                        Artist Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="artistname"
                          onChange={handelModal}
                          type="text"
                          className="form-control"
                          id="inputArtist"
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label
                        for="inputDate"
                        className="col-sm-2 col-form-label text-dark"
                      >
                        Date of birth
                      </label>
                      <div className="col-sm-10">
                        <input
                          name="dob"
                          type="date"
                          onChange={handelModal}
                          className="form-control"
                          id="inputDate"
                        />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label
                        for="inputDate"
                        className="col-sm-2 col-form-label text-dark"
                      >
                        Bio
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          name="bio"
                          className="form-control"
                          id="inputDate"
                          onChange={handelModal}
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button onClick={addArtist} type="submit" className="btn btn-primary">
                      Done
                    </button>
                  {/* </div> */}
                </div>
                </form>
              </div>
            </div>

            {/* <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div> */}
          </div>
        </div>
        <div className="buttons d-flex modal-footer">
          <button type="button" className="btn btn-outline-primary">
            Cancel
          </button>
          <button
            onClick={saveSong}
            className="btn btn-secondary"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};
