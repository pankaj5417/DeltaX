import { useRef } from "react";
import "./addNewSong.css";
import Select from "react-select";
export const AddNewSong = () => {
    const ref=useRef()
    const handleRef=()=>{
      const val=ref.current.value
      val.materialSelect();
    }

    const options = [
        {
          label: "abc",
          value: "abc"
        },
        {
          label: "2",
          value: 2
        },
        {
          label: "3",
          value: 3
        }
      ];
      
      const styles = {
        container: base => ({
          ...base,
          flex: 1
        })
      };
  return (
    <>
      <div className="addNewSongContainer">
        <div class="mb-3 row">
          <label for="inputSong" class="col-sm-2 col-form-label">
            Song Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSong" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputDate" class="col-sm-2 col-form-label">
            Date Released
          </label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="inputDate" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputFile" class="col-sm-2 col-form-label">
            Artwork
          </label>
          <div class="col-sm-10 d-flex align-item-center">
          <i class="fa fa-picture-o fa-2x " aria-hidden="true"></i>
          <span>Upload Image</span>

            <input type="file" style={{display:"none"}} placeho accept=".png,.jpeg,.jpg" class="form-control" id="inputFile" />
          </div>
        </div>
        
      <div className="selectBox">
      <Select styles={styles} options={options} />

        <select class="mdb-select md-form"  data-show-subtext="true" data-live-search="true" searchable="Search here.." ref={ref}>
          <option value="" disabled selected>
            Choose your country
          </option>
          <option value="1">USA</option>
          <option value="2">Germany</option>
          <option value="3">France</option>
          <option value="3">Poland</option>
          <option value="3">Japan</option>
        </select>

      </div>
      <div className="buttons d-flex">
      <button type="button" class="btn btn-outline-primary">Cancel</button>
      <button class="btn btn-secondary" type="button">Save</button>

      </div>
      </div>
    </>
  );
};
