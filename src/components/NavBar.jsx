export default function NavBar(){
    return(
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">AnimeNerd</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-20 md:w-auto" />
                    </div>
                        <li><a>Home</a></li>
                        <li><a>Anime</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}