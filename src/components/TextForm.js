import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newTxt = text.toUpperCase()
        console.log(newTxt);
        setText(newTxt)
        props.showAlert('converted to upper case!', 'success')
    }
    const handleLoClick = () => {
        let newTxt = text.toLowerCase()
        setText(newTxt)
        props.showAlert('converted to Lower case!', 'success')
    }
    const handleCopyClick = () => {
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert('Text copied!', 'success')
    }
    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert('Text Cleard!', 'success')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
        <div style={{color: props.mode === 'dark' ? '#F8F9FA' : '#042743'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange}  style={{backgroundColor: props.mode === 'dark' ? '#264B69' : '#F8F9FA', color: props.mode === 'dark' ? '#F8F9FA' : 'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary m-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary m-1" onClick={handleCopyClick}>Copy Text</button> 
        </div>
        <div className="container" style={{color: props.mode === 'dark' ? '#F8F9FA' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}  words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0 ? text:'Enter a somthing in to textabove to preview it here'}</p>
        </div>
        </>
    )
}
