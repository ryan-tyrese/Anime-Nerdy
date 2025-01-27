import { useEffect, useState } from "react";
import axios from "axios";

export default function Card(){
    const [airing, setAiring] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.get("https://api.jikan.moe/v4/anime?status=airing");
        console.log("response", response);
        setAiring(response.data)
    }
    
    return(
        <>
            <div className="card bg-slate-100/5 card-side bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p>Rating:9.5  Rank:10  Year:2020  Episodes:36</p>
                    <div className="card-actions">
                        <div className="badge badge-outline badge-primary">genre</div>
                    </div>
                </div>
            </div>
        </>
    )
}