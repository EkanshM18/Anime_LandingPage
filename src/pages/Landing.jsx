import { Input } from "postcss";
import React from "react";


export default function Landing() {
    function logger() {
        console.log("Button Clicked")
    }
    return(
        <div className=" bg-black p-14 mt-7 "> 
            <div className="text-white font-bold text-center text-3xl p-2">Dive into the World of Anime</div>
            <div className="text-white text-center p-2">Discover, stream, and share your favorite anime series and movies. Join our passionate community of anime lovers today!</div>
            <div className="flex flex-rows items-center justify-center p-2">
                <input className="p-2" placeholder="Enter your email "/>
                <button className="text-white bg-neutral-900 p-3 rounded-md" onClick={logger}>Get Started </button>
            </div>
            
            <div className="text-white text-xs text-center p-1">Start your free 30-day trial. No credit card required.</div>
        </div>
    )
}


