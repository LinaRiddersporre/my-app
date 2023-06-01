import './App.css';
import 'react-dropdown/style.css';
import NavBar from './NavBar/NavBar';
import FirstPage from './FirstPage/FirstPage';
import ProjectPage from './ProjectPage/ProjectPage';
import ContactPage from './ContactPage/ContactPage';

const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <FirstPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
