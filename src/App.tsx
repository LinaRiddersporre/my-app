import './App.css';
import 'react-dropdown/style.css';
import NavBar from './NavBar/NavBar';
import FirstPage from './FirstPage/FirstPage';
import ProjectPage from './ProjectPage/ProjectPage';


const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <FirstPage/>
      <ProjectPage/>
    </div>
  );
}

export default App;
