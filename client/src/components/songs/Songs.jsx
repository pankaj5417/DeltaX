import "./songs.css";
export const Songs = () => {
  return (
    <>
      <div className="songs">
        <div className="songsListContainer">
          <div className="songsHeading d-flex align-items-center  justify-content-between ">
            <h2>Top ten Songs</h2>
            <div className="addSongButton">
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
                <tr>
                  <th scope="row">
                    <img src="" alt="" />
                  </th>
                  <td>SomeOne You loved</td>
                  <td>July 21,2019</td>
                  <td>Lewis Capacalii</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="artistList">
          <h2>Top ten Artists</h2>

        
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
                <tr>
                  <th scope="row">
                    <img src="" alt="" />
                  </th>
                  <td>SomeOne You loved</td>
                  <td>July 21,2019</td>
                  <td>Lewis Capacalii</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </>
  );
};
