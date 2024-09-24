import React from "react";
import Item from "../components/Item";
import AnimeImage1 from"../assets/item_img/aot.jpg";
import AnimeImage2 from"../assets/item_img/ds.jpg";
import AnimeImage3 from"../assets/item_img/mha.jpg";
import AnimeImage4 from"../assets/item_img/op.jpg";

export default function Trending() {
    return (
        <div className="p-4 min-h-screen">
        <div className="font-bold text-4xl text-center p-6">Trending Now</div>
        <div className="text-zinc-400 text-center">Stay up to date with the hottest anime series</div>

        <div className="mt-10 flex flex-col aspect-ratio:3/2 object-fit:contain ">
        <div className="m-3">
        <img className=""width={200} height={200} src={AnimeImage1}/>
        <Item title="Attack on Titan" subtitle="Action" rate="9.8"/>
        </div>

        <div className="m-3">
        <img className=""width={300} height={300} src={AnimeImage2}/>
        <Item title="My Hero Academia" subtitle="Superhero" rate="9.5"/>
        </div>

        <div className="m-3">
        <img className=""width={300} height={300} src={AnimeImage3}/>
        <Item title="Demon Slayer" subtitle="Supernatural" rate="9.7"/>
        </div>

        <div className="m-3">
        <img className=""width={300} height={300} src={AnimeImage4}/>
        <Item title="One Piece" subtitle="Adventure" rate="9.6"/>
        </div>
        
        </div>
        </div>
    )
}