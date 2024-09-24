import React from "react";
import { StarIcon } from "lucide-react";




export default function Item(props){
    return(
      <div className="p-4">
        <div className="font-bold text-xl">{props.title}</div>
        <div>{props.subtitle}</div>
        <div className="flex flex-row">
            {
                [...Array(props.star)].map((_,index) => (
                    <StarIcon key={index} className="h-5 w-5 fill-current text-zinc-400"/>
                ))
            }
            <div>{props.rate}</div>
            <button className="hover:to-blue-300">Add to list</button>
        </div>
      </div>  
    )
}