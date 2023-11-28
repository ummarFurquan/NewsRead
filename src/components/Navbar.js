import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import '../styles/navbar.css'


const Navbar = () => {
  const [toggle, setToggle] = useState('Dark Mode 🌙')

  const ChangeTheme = () => {
    setToggle( toggle === 'Dark Mode 🌙' ? 'Light Mode 🌞' : 'Dark Mode 🌙')
  }
  return (
    <div>
       <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light ">
                 <div className="container-fluid">
                     <div className="navbar-brand">🌍NewsRead</div>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                         <li className="nav-item"><Link className="nav-link" to="/">General</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/weather">Weather</Link></li>
                         <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                     </ul>
                     </div>
                     <div className='light-dark-btn'>
                      <button onClick={ChangeTheme} className='btn btn-outline-dark'>{toggle}</button>
                     </div>
                 </div>
                 </nav>
      
    </div>
  )
}

export default Navbar
