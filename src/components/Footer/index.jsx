import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-primary text-light text-center p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='mb-0'>All rights reserved &copy; My Store {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer