import React from 'react'
import {loremIpsum } from 'react-lorem-ipsum'
import './Waec.css'
import right from './arrow-right.png'
import left from './arrow-left.png'
import logo from './logo.png'
import android from './android.png'
import computer from './computer.png'
import utme from './utme.png'
import jamb from './jamb.png'
import frame from './frame.png'
import facebook from './facebook.png'
import twitter from './twitter.png'
import linkedin from './linkedin.png'
import luminate from './luminate.png'
import bookmark from './bookmark.png'
import info from './info.png'
import professional from './professional.png'
import organisation from './private.png'
import school from './school.png'
import exam from './exam.png'


const Main = () => {
    return (
        <body>
        <div class='Main container-fluid'>
             <nav className="navbar navbar-expand-md navbar-light fixed-top sticky-top">
            <div className="container-fluid">
                <img className='waec-logo' src={logo}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto Nav-inner">    
					<li className="nav-item active">
                    <button>Register</button>
					</li>
					<li className="nav-item">
                    <p>Login</p>
                    </li>
					</ul>
			</div>
	</div>
</nav>
    <div className='laptop'>
                <img src={android} width='70%'/>
            </div>
            
            <div className='tutor container-fluid'>
                <p className='para'>A CBT Centre you can trust for quality training and testing</p>
                <button className='parabutton'>Book Now</button>
                <div className='cohort row'>
                    <div className='col programmes'>
                        <img src={computer}/>
                        <p>Examinations</p>
                        <div className='button-cover'>
                            <button className='tutorbutton'>Book Now</button>
                            <img src={info}/>
                            <img src={bookmark}/>
                        </div>
                    </div>
                    <div className='col programmes'>
                        <img src={utme}/>
                        <p>Certification Programs</p>
                        <div className='button-cover'>
                            <button className='tutorbutton'>Book Now</button>
                            <img src={info}/>
                            <img src={bookmark}/>
                        </div>
                    </div>
                    <div className='col programmes'>
                        <img src={jamb}/>
                        <p>Trainings</p>
                        <div className='button-cover'>
                            <button className='tutorbutton'>Book Now</button>
                            <img src={info}/>
                            <img src={bookmark}/>
                        </div>
                    </div>
                </div>
                <div className='row test'>
                    <div className='col'>
                        <img src={luminate} width='70%'/>
                    </div>
                    <div className='col'>
                        <p>WAEC Training & Testing Centre is a fully equipped, state-of-the-art facility in a serene environment.
                            Perfect for  your computer-based activities
                        </p>
                        <button className='tutorbutton'>Take a virtual tour</button>
                    </div>
                </div>
                
</div>


<div className='services container-fluid'>
    <div className='navigate'>
        <img src={left}/>
        <img src={frame} className='frame'/>
        <img src={right}/>
    </div>
    <h2>Our Services</h2>
    <div className='row card-block'>
            <div className='col card-flex'>
                <img src = {professional}/>
                <div className='inner'>
                    <h3>Professional bodies</h3>
                    <p>Professional bodiesProfessional bodiesProfessional bodies
                    Professional bodiesProfessional bodies.
                    </p>
                </div>
            </div>

            <div className='col card card-flex'>
                <img src = {organisation}/>
                <div className='inner'>
                    <h3>Private organisations</h3>
                    <p>Professional bodiesProfessional bodiesProfessional bodies
                    Professional bodiesProfessional bodies.
                    </p>
                </div>
            </div>
            
    </div>
    
    <div className='row'>
            <div className='col card-flex-lower'>
                <img src={school}/>
                <div className='inner'>
                    <h3>Schools</h3>
                    <p>Professional bodiesProfessional bodiesProfessional bodies
                    Professional bodiesProfessional bodies.
                    </p>
                </div>
            </div>

            <div className='col card-flex-lower'>
                <img src={exam}/>
                <div className='inner'>
                    <h3>Examinations bodies</h3>
                    <p>Professional bodiesProfessional bodiesProfessional bodies
                    Professional bodiesProfessional bodies.
                    </p>
                </div>
            </div>
            
    </div>





</div>

        <footer className='container-fluid downside'>
            <div className='container footer-div'>
                <div className='footer-icon'>
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={linkedin}/>
                </div>
                <div className='contact'>
                    <p>08148280029, 08115909150</p>
                    <p>60, Ijaiye Road, Ogba, Lagos.(Beside Excellence Hotel)</p>
                    <p>COPYRIGHT 1993-2021. All RIGHTS </p>
                </div>
            </div>
            
        </footer>
    </div>
        
    </body>
    )
}

export default Main


