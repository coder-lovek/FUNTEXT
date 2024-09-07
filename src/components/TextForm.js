import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles

function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    };

    const handleTextChange = (value) => {
        setText(value);  // Updates text state when the editor content changes
    };

    // Function to count the number of words in the text
    const wordCount = (text) => {
        return text.trim().split(/\s+/).filter((element) => element.length !== 0).length;
    };

    // Function to calculate the estimated reading time
    const readingSpeed = 200; // Average reading speed (words per minute)
    const readingTime = () => {
        let words = wordCount(text);
        return (words / readingSpeed).toFixed(2); // time in minutes
    };

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <ReactQuill 
                        value={text} 
                        onChange={handleTextChange} 
                        theme="snow" 
                        placeholder="Start typing here..." 
                    />
                </div>
                <button className="btn btn-primary mt-3" onClick={handleUpperCase}>
                    UPPERCASE
                </button>
                <button className="btn btn-primary mt-3 mx-3" onClick={handleLowerCase}>
                    lowercase
                </button>
            </div>

            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>Word Count: {wordCount(text)}</p>
                <p>Estimated Reading Time: {readingTime()} minutes</p>
            </div>
        </>
    );
}

export default TextForm;
