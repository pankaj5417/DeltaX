import './App.css';
import { AddNewSong } from './components/addSong/AddNewSong';
import { Navbar } from './components/Navbar/Navbar';
import { Songs } from './components/songs/Songs';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Songs/>}></Route>
        <Route path='/addSong' element={<AddNewSong/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
