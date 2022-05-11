import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './css/Navbar.css';
import { IconContext } from 'react-icons';
// import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';



const theme = createTheme({
    palette: {
   
      secondary: {
        // This is green.A700 as hex.
        main: '#C4C4C4',
      },
    },

  });
  const useStyles = makeStyles((theme)=>({
      button:{
          
      }
  }))
  


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [show, handleShow]=useState(false);
  const [cover, setCoverScreen]=useState(false);
  

  const showSidebar = () => setSidebar(!sidebar);
  const transistionNavBar=()=>{
    if (window.scrollY > 100){
      handleShow(true);
    }else{
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar)
  
    return () => {
      window.removeEventListener("scroll", transistionNavBar)
    }
  }, [])
  const transitionModal=()=>setCoverScreen(!cover);
  
  const classes=useStyles();
  

  return (
   
      <IconContext.Provider value={{ color: '#000000', size:'22px' }}>
        <div className={`navbar ${show && "nav__grey"}`}>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className='icons' onClick={showSidebar}  />
          </Link>
        </div>
        <div className={cover ? 'modal-ovelay' : 'open-modal'}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
              
                </li>
                
              );
            })}
           
           <button className='logout-button'>Logout</button>
          </ul>
          
        </nav>
        </div>
      </IconContext.Provider>
  
  );
}

export default Navbar;