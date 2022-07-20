import React , {useState} from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase!","success")
  }  

  const handleLoClick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase!","success")
  } 
  
  const handleClearClick = ()=>{
    let newText = ""
    setText(newText)
    props.showAlert("Text cleared!","success")
  } 

  const handleUpOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text,setText] = useState('Enter text here')  

  return (
    <>
      <div className="container ">
        <h1 className={`text-${props.mode==='light'? 'black' : 'white'}`} >{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8" 
            value={text}
            style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}
            onChange={handleUpOnChange}/>
        </div>
        <button  className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'} `} onClick={handleUpClick}>Convert To Uppercase</button>
        <button className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'} `} onClick={handleLoClick}>Convert To Lowercase</button>
        <button className={`btn btn-primary mx-1 text-${props.mode==='light'?'dark':'light'} `} onClick={handleClearClick}>Clear Text</button>
      </div>

      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
