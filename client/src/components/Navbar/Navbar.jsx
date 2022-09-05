
import './navbar.css'
export const Navbar=()=>{
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    
    <a className="navbar-brand" href="/">Home</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Link</a> */}
        </li>
        <li className="nav-item">
          {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        </li>
      </ul>
      <div className="d-flex  searchContainer">            
      <i class="fa fa-search searchIcon fa-lg" aria-hidden="true"></i>

        <input className="form-control me-2 searchBox" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </div>
    </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
        
        </>
    )
}