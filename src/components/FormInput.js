import React, {useState} from 'react';

//const [count, setCount] = useState(0);

export default function FormInput(props) {
    const handleUpClik = () =>{
        //console.log("Uppercase clicked ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "success");
    }
    const handleDownClik = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case", "success");
    }
    const handleClearClik = () =>{
        let newText ="";
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCopy = (event) =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }
    const [text, setText] = useState('Enter text here');
    //text = "newtext"; //wrong way to change the state
    //setText("new text");  //correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>            
            <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#040527':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClik}>Convert to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClik}>Convert to lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClik}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to preview"}</p>
            </div>
        </>
            )
}