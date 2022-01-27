import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick =  ()=>{
        setText(text.toUpperCase())
    }
    const handleDownClick =  ()=>{
        setText(text.toLowerCase())
    }
    const handleOnChange =  (event)=>{
        setText(event.target.value)
    }
    const handleClearText =  ()=>{
        let newText = ''
        setText(newText)
   }

   const handleCopy =()=>{
       var text = document.getElementById("myBox")
       text.select()
       navigator.clipboard.writeText(text.value)
   }

   const handleExtraSpaces= ()=>{
       let newText = text.split(/[ ]+/)
       setText(newText.join(" "))
   }

    let wordcount = text.split(' ').length-1
    return (
        // Everything has to be wrapped in a JSX fragment because you can only return one thing
        /**
         * my-2 is in bootstrap and it helps with vertical spacing. You can use my- and a  number
         * to indicate more spacing
         */
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.textarea}</label>
                <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-2'>
            <h1>Your text summary</h1>
            <p>{wordcount} words and {text.length} characters</p>
            <p>You will need {wordcount*.008} minutes to read {wordcount} words </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text in the textbox above to preview"}</p>
        </div>
        </>
    )
}
