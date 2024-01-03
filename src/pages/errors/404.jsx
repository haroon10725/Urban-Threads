import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="font-roboto">
                <p className="font-bold text-8xl text-center text-gray-800">
                    404
                </p>
                <br />
                <p className="text-gray-600 text-center">
                    This page seems to have gone on vacation. Let's get you back on track.
                    <br />
                    <br />
                    <button className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">Go to <Link to="/">Homepage</Link></button>
                </p>
            </div>
        </div>
    );
};

export default Error404;
