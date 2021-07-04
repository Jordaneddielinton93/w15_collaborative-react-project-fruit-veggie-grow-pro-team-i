
import BrowsePage from './components/BrowsePage/BrowsePage';
import "./components/BrowsePage/popup/PopUp.css"
import "./components/BrowsePage/BrowsePage.css"
import './App.css';
import Navbar from "./components/NavigationBar/Navbar"

function App() {

// we dont need to work here untill we add Landingpage & Questionaire


  return (
    <div className="App">
      <Navbar/>
      <BrowsePage/>
      {/* add a questionairePage here */}
      {/* add a LandingPage here*/}
    </div>
  );
}

export default App;
