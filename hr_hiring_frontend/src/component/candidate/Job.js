import React, {useState, useEffect} from 'react';
import './css/Job.css';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { IconContext } from 'react-icons';
import axiosInstance from '../../axios';
import requests from '../../request';



function JobScreen() {
    const [jobs, setJobs]=useState([])
    useEffect(() => {
      async function fetchData(){
        //   const getJobs=;
          const request =await axiosInstance.get(requests.Jobs);
          setJobs(request.data.results);
          console.log(request)
          return request
      }
      fetchData();
    
    }, []);
    
  return (
      <div className='container-wrapper'>
    
            <div class="row">
                {jobs.map(job=>(
                    <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>{job.title}</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: {job.skills}</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>

                ))}
 
                
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                {/* start */}
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                 {/* start */}
                 <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li> <FaIcons.FaToolbox/>  0-1 Yr </li>
                                    <li> <FiIcons.FiMapPin/> Romote </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
                 {/* start */}
                 <div class="column">
                    <div class="card">
                        <div class="container">
                            <div className='row-text'>
                                <h4><b>Python Programmer</b></h4>
                                <p className='detail dowell'>Dowell Ux living lab</p>
                                <p className='detail skill'>Skills: Python</p>
                                <button className='apply-button'>Apply</button>
                            
                            </div>
                        

                            <div className='row-bottom'>
                            <IconContext.Provider value={{ color: '#838383', size:'14px' }}>
                                <ul>
                                    <li>
                                    <FaIcons.FaToolbox/>
                                    0-1 Yr
                                    </li>
                                    <li>
                                    <FiIcons.FiMapPin/>
                                    Romote
                                    </li>
                                    <li>
                                    
                                    <span className='free'>Freelence</span>
                                    </li>
                                </ul>
                                </IconContext.Provider>
                            </div>
                            

                            
                        </div>
                        </div>
                </div>
                {/* end */}
            </div>
        </div>
  )
}

export default JobScreen