import React from "react";


export default function Nav() {
    return (
        <div className="m-2 ">
            <input className="p-2 rounded-md" placeholder="Search Anime"/>
            <button className="p-2 text-white bg-black rounded-md m-2">Sign In</button>
            <button className="p-2 bg-zinc-100 rounded-md m-2">Sign Up</button>
        </div>
    )
}