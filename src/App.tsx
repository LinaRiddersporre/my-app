import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NavBar from './NavBar/NavBar';


const App = () => {
const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
  let isOpened = false;
  const menuClick = (event: any) => {
    event.preventDefault();
    console.log(isOpened)
   isOpened=true
   console.log(isOpened)
  }

  return (
    <div className="App">
      <NavBar/>
      {/* <nav className='navMobile'> */}
        {/* <MenuIcon className='menuIcon' onClick={menuClick}/>
        <Dropdown options={options}  value={defaultOption} placeholder="Select an option" /> */}
        {/* <div className='dropdownContent' style={isOpened ? {display: 'block'} : {display: 'none'}}>
          
        </div>
      </nav>
        <nav className='navDesktop'>
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav> */}
      <span className='firstPage'>
        <div className='pitchFrace'>
            <h1>Hi, I'm Lina </h1>
            <h1>Front end developer</h1>
          </div>
      </span>
      <span>
        <div>
        <h1>Project</h1>
      </div>
      </span>
      
    </div>
  );
}

export default App;
