import React from "react"
import bon from "../photos/Bon.jpg"
import email from "../photos/mail.png"
import linkedin from "../photos/linkedin.png"

export default function Header() {
    return(
        <div className="header">
            <img className="header--logo"src={bon}/>
            <div className="header--info">
                <h1>Bon Smith</h1>
                <h4>Frontend Developer</h4>
                <a href="bonsmith.website">bonsmith.website</a>
            </div>
            <div className="header--buttons">
                <button className="header--buttons-email">
                    <img src={email} />
                    Email
                </button>
                <button className="header--buttons-linkedin">
                    <img src={linkedin} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}