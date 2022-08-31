import './App.css';
import { AddNewSong } from './components/addSong/AddNewSong';
import { Navbar } from './components/Navbar/Navbar';
import { Songs } from './components/songs/Songs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Songs/>
      <AddNewSong/>
    </div>
  );
}

export default App;
