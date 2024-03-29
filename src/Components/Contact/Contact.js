import React from 'react'
import './Contact.scss'

export default function Contact(){
    return(
        <div className='contactContainer' id='contact'>
            <div className='contactContent'>
                <h3>Get In Touch</h3>
                <div className='contactTiles'>
                    <a href='mailto:lgc9312@gmail.com'>
                        <div className='email tile'>
                            <i class="fas fa-envelope" size='4x'></i>
                            <p>lgc9312@gmail.com</p>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/leegcollins/' target='_blank'>
                        <div className='linkedIn tile'>
                            <i class="fab fa-linkedin"></i>
                            <p>Connect on LinkedIn</p>
                        </div>
                    </a>
                    <a href='https://github.com/Gray754' target='_blank'>
                        <div className='github tile'>
                            <i class="fab fa-github"></i>
                            <p>Check out my Github</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}