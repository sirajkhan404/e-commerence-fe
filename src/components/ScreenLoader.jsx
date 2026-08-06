import React from 'react'

const ScreenLoader = () => {
    return (
        <div className="screen-loader">
            <div className="sl-wrap">
                <div className="sl-logo">🛍️</div>
                <div className="sl-rings">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p className="sl-label">Loading<span className="sl-d1">.</span><span className="sl-d2">.</span><span className="sl-d3">.</span></p>
            </div>
        </div>
    )
}

export default ScreenLoader