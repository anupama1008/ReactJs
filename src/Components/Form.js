import React,{useState} from 'react'
import App from '../App';

export default function Form(props) {
  const [text, setText]=useState('Write here----');
  const convertToUpper=()=>{
    let finaltext=text.toUpperCase();
    //console.log({text});
    setText(finaltext)
    props.showAlert("Capitalized text","success");
  }
  const clearText =()=>{
    setText('');
    props.showAlert("Cleared Text area","success");
  }
  const convertToLower=()=>{
    let finaltext=text.toLowerCase();
    //console.log({text});
    setText(finaltext)
    props.showAlert("Converted to Lower case.","success");
  }
  const handleOnChange=(event)=>{
    //console.log("changed");
    setText(event.target.value)
  }
  const speak=()=>{
    let msg=new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toggle=document.getElementById('speaker');
    if(toggle.innerHTML==='speak')
    toggle.innerHTML='stop';
    else{
      toggle.innerHTML='speak';
      window.speechSynthesis.cancel();
      props.showAlert("Text speaking","success"); 
    }
  }
  const reverse=()=>{
    let ram=text;
    let revers=ram.split('').reverse().join('');
    setText(revers);
    props.showAlert("Text reversed.","success");
  }
  return (
<>
<div className="container mb-3">
<label htmlFor="textbox" className="form-label">{props.heading}</label>
<textarea className="form-control" id="textbox" rows="7" value={text} onChange={handleOnChange}></textarea>
<button className="btn btn-primary mx-3 my-3" onClick={convertToUpper}>Convert to Uppercase</button>
<button className="btn btn-primary mx-3" onClick={convertToLower}>Convert to Lowercase</button>
<button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
<button className="btn btn-primary mx-3" id='speaker' onClick={speak}>Speak</button>
<button className="btn btn-primary mx-3" id='speaker' onClick={reverse}>Reverse </button>
</div>
<div className="container">
<h4>Your text summary.</h4>
<p>{text.split(' ').length} word and {text.length} characters.</p>
<p>{0.008*text.split('').length} Minutes to read</p>
<h4>Preview</h4>
<p>{text}</p>
</div>
</>
  )
}
