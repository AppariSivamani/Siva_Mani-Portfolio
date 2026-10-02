import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
    return (
        <div className='hero-container' id='home'>
            <div className="left-container">
                <img src="/Images/bg.png" alt="" className="left-img" />
            </div>

            <div className="right-container">
                <p>
                    Hi,   I&apos;m<span className="span1"><Typewriter
                        words={['Siva Mani Appari']}
                        loop={1}
                        cursor
                        cursorStyle=''
                        typeSpeed={400}
                    /> </span> <br />
                    <span>A Frontend Developer.</span>
                </p>
            </div>

            

            <div className="icons">
                <a href="https://github.com/AppariSivamani" className='github' target='blank'><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/appari-siva-mani-aa3509246/" className='linkedin' target='blank'><i class="fa-brands fa-linkedin"></i></a>
                <button className='resume'><a href="https://drive.google.com/file/d/1ahcoOcoCbPUqo5HufXlZwOkLE2PIw5NZ/view?usp=sharing" target='blank'>Resume</a></button>
            </div>

            <div className="rrsume">
                
            </div>

            
        </div>
    )
}

export default Hero