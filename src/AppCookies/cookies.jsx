import React, { useState } from 'react';
import { useCookies } from 'react-cookie';



export default function SetCookie() {
    const [cookies, setCookie] = useCookies(['user']);

    setCookie('Name', 'Safee', { path: '/' });
    setCookie('Password', 'Airlift', { path: '/' });
    return (
        <div className="cookie">
            {
                cookies.Name && (
                    <div>
                        Name: <p>{cookies.Name}</p>
                    </div>
                )
            }
            {
                cookies.Password && (
                    <div>
                        Password: <p>{cookies.Password}</p>
                    </div>
                )
            }
        </div>
    )
}

