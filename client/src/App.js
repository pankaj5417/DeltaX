import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Songs } from './components/songs/Songs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Songs/>
    </div>
  );
}

export default App;
