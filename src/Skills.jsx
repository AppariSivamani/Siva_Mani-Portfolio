import React from 'react'

function Skills() {
    return (
        <div className='skills-container'>
            <h2>Skills</h2>
            <div className="frontend">
                <h3>Frontend *</h3>

                <div className="skill">
                    <img src="/Images/html.png" alt="HTML" />
                    <p>HTML</p>
                </div>

                <div className="skill">
                    <img src="/Images/css.png" alt="CSS" />
                    <p>CSS</p>
                </div>

                <div className="skill">
                    <img src="/Images/js.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div>

                <div className="skill">
                    <img src="/Images/react.png" alt="React" />
                    <p>React</p>
                </div>

            </div>

            <div className="backend">
                <h3>Backend *</h3>
                <div className="skill">
                    <img src="/Images/python.png" alt="Python" />
                    <p>Python</p>
                </div>
            </div>

            <div className="backend" style={{marginTop: '25px'}}>
                <h3>Database *</h3>
                <div className="skill">
                    <img src="/Images/sql.png" alt="mysql" />
                    <p>MySQL</p>
                </div>
            </div>
        </div>
    )
}

export default Skills