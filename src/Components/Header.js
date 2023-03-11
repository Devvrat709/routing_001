import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="Logo" className='logo'/></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/project'>Project</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><button className="enquireNow" aria-label="Get Started">Enquire Now</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
