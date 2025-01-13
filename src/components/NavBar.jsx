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
                        <li>
                            <details>
                                <summary>Something</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}