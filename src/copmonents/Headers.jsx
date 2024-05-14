import React from 'react'
import logo from '../logo.svg'

export const Headers = () => {
    let pclassName = 'other';
    const isLoggin = true;

    const greeting = isLoggin ? <p>Welcome</p> : <p>Try again</p>

    const list = ["item1","item2"]
 
    return (
    <>
    <div className="title">
        <h2>React Project</h2>
        <p style={{fontSize:'25px'}} className={pclassName}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, consectetur?</p>
        <img src={logo} alt=""></img>

        {/* Javascript Expression */}

        <p className={pclassName}>25+23 = {25+23}</p>


        {/* conditional Rendering */}
        <h2>{greeting}</h2>

        <ul>
            {list.map((item) => <li>{item}</li>)}
        </ul>
    </div>
    </>
  )
}
