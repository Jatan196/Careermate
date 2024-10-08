//import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                {/* <label for="Mybox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
