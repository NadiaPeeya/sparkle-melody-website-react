import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="container my-5 mx-auto error-msg">
            <h1 className="my-4">404</h1>
            <h2 >Page Not Found</h2>
            <div className="my-5 py-5">
            <p>Sorry! The Page You Are Finding For Not Available!</p>
            </div>
         
        </div>
    );
};

export default NotFound;