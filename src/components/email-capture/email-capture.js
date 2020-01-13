import React from 'react'

const EmailCapture = () => {
    return (
        <div>
            <form>
                <input placeholder="Enter your email"></input>
                <button
                    onClick={onDetectSubmit}
                >
          Detect
        </button>
            </form>
        </div>
    )
}