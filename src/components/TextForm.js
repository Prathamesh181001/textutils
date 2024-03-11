import React, { useState } from 'react'


export default function TextForm(props) {

    // Called Function 
    const capitalizeFirstLetter = (str) => {
        if (typeof str !== 'string' || str.length === 0) {
            return str;
        }
        let result = '';
        let capitalizeNext = true; // Flag to indicate if the next character should be capitalized
    
        for (let i = 0; i < str.length; i++) {
            if (capitalizeNext && /[a-zA-Z]/.test(str[i])) {
                result += str[i].toUpperCase();
                capitalizeNext = false; // Reset the flag after capitalizing
            } else {
                result += str[i];
            }
    
            // Set the flag to true if the current character is '.', '?' or '!'
            if (str[i] === '.' || str[i] === '?' || str[i] === '!') {
                capitalizeNext = true;
            }
        }
        return result;
    }

    //Calling Function here...
    const handleToCapitalize = () => {
        let newText = capitalizeFirstLetter(text);
        setText(newText);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = () => {
        let newText = ``;
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Text Copied...!");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");

  return (
<>
    <div className='container' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white' : 'grey', color: props.mode==='dark' ? 'white' : '#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleToCapitalize}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>



    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.25 * text.split(" ").length} seconds will require to read above text.</p>
    </div>
</>
  )
}
