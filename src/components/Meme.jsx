import React from "react";
import '../assets/style.css'

const Meme = () => {
    return (
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="Top Text" />
                <input className="form--input" type="text" placeholder="Bottom Text" />
                <button className="form--button">
                    Get a new image 🖼
                </button>
            </form>
        </main>    
    )
}

export default Meme;