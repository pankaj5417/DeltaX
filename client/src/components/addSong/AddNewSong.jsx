import { useRef } from "react";
import "./addNewSong.css";
import Select from "react-select";
export const AddNewSong = () => {
  const options = [
    {
      label: "abc",
      value: "abc",
    },
    {
      label: "2",
      value: 2,
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

            <input
              type="file"
              style={{ display: "none" }}
              placeho
              accept=".png,.jpeg,.jpg"
              class="form-control"
              id="inputFile"
            />
          </div>
        </div>

        <div className="selectBox d-flex">
          <label for="inputFile" class="col-sm-2 col-form-label">
            Artist
          </label>
          <Select styles={styles} options={options} />
          <div className="addSongButton">
            <i class="fa fa-plus" aria-hidden="true"></i>

            <span data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add Artist
            </span>

            {/* <button type="button" class="btn btn-primary" >
  Launch static backdrop modal
</button> */}

            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                {/* <div class="modal-dialog"> */}
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" style={{color:"black"}}>
                      Add Artist
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                  <div class="mb-3 row">
          <label for="inputSong" class="col-sm-2 col-form-label">
            Artist Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSong" />
          </div>
        </div>

        <div class="mb-3 row">
          <label for="inputDate" class="col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-10">
            <input type="date" class="form-control" id="inputDate" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputDate" class="col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-10">
            <textarea  class="form-control" id="inputDate" />
          </div>
        </div>

                    </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Understood
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  ...
</div> */}
          </div>
        </div>
        <div className="buttons d-flex">
          <button type="button" class="btn btn-outline-primary">
            Cancel
          </button>
          <button class="btn btn-secondary" type="button">
            Save
          </button>
        </div>
      </div>
    </>
  );
};
