export default function Card(){
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
                    <p>Rating:9.5  Rank:10  Year:2020 Episodes:36</p>
                    <div className="card-actions">
                        <div className="badge badge-outline badge-primary">genre</div>
                    </div>
                </div>
            </div>
        </>
    )
}