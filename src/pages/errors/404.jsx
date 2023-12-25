import React from 'react';

const Error404 = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="font-roboto">
                <p className="font-bold text-8xl text-center text-gray-800">
                    404
                </p>
                <br />
                <p className="text-gray-600">
                    This page seems to have gone on vacation. Let's get you back on track.
                </p>
            </div>
        </div>
    );
};

export default Error404;
