import React from 'react';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './css/SecondNavbar.css';


function SecondNavbar() {
  return (
        <div className='secondNavbar__body'>
            <div className='secondNavbar__icon'>
            <Link to='#' className='arrow__icon'>
            <BsIcons.BsArrowLeft className='icons' onClick  />
          </Link>

            </div>

        </div>
  )
}

export default SecondNavbar