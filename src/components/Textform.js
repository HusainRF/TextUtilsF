import React,{useState} from 'react'

export default function Textform(props) {
    
    const handlerOnChange = (event)=>{
        console.log("handlerOnChange");
        setText(event.target.value);
    }
    
    const handlerUpClick = ()=>{
        // console.log("handlerUpClick" + text);
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!!" , "success");
    }
    const handlerLoClick = ()=>{
        // console.log("handlerUpClick" + text);
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!!" , "success");
    }
    const handlerClClick = ()=>{
        // console.log("handlerUpClick" + text);
        const newText = '';
        setText(newText);
        props.showAlert("Clear the complete text!!" , "success");
    }
    
    const handlerCapClick = ()=>{
        // console.log("handlerUpClick" + text);
        const arr = text.split(" ");

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const newText = arr.join(" ");
        setText(newText);
        
        props.showAlert("Converted to capitalized text!!" , "success");
    }

    const handlerSentClick = ()=>{
        // console.log("handlerUpClick" + text);
        const arr = text.split(" ");

        arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLowerCase();
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].toLocaleLowerCase();
        }

        const newText = arr.join(" ");
        setText(newText);
        
        props.showAlert("Converted to sentence Case!!" , "success");
    }
    
    const handlerCopy = ()=>{
        var text  = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
        props.showAlert("Copied to Clipboard!!" , "success");
    }
    const  handlerRemoveExtSpac = ()=>{
        let newText  =text.split(/[ ]+/);
        setText(newText.join(" "));
    
        props.showAlert("Removed the extra space!!" , "success");
    }
   


    const [text , setText] = useState("");
    //here we are setting default value(Enter your text here! using useState()) to text variable which can be modified by setext() 
    // and reflected on the screen(runtime) without loading the webpage
    // the text var is rracked by react and when ever it get updated then it will be reflected in whole webpage
     
    return (
    <>
        <div style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 className='mt-3'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handlerOnChange} style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="textBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handlerSentClick}>Sentence Case</button>
            <button className="btn btn-primary mx-1" onClick={handlerUpClick}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={handlerLoClick}>Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handlerCapClick}>Capitalize text</button>
            <button className="btn btn-primary mx-1" onClick={handlerCopy}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={handlerRemoveExtSpac}>Remove extra spaces</button>
            <button className="btn btn-primary mx-1" onClick={handlerClClick}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} charectors</p>
            <p>{0.08 * text.split(" ").length} Mintues to read  </p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter your text to preview here!!"}</p>
        </div>
    </>

  )
}
