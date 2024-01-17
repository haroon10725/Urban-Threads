import React, { useState } from 'react';
import { useCookies } from 'react-cookie';



export default function SetCookie() {
    const [cookies, setCookie] = useCookies(['user']);

    return (
        <div className="">
            <button className='w-20 h-20 bg-yellow-500' onClick={function () {
                setCookie('Name', 'papaer', { path: '/' });
                setCookie('Password', '78873729', { path: '/' });
                window.location.reload()
            }}>Click me</button>
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
        </div>
    )
}
