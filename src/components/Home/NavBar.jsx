// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
            <header>
                <nav>
                    <div className="justify-between pt-4 sm:hidden lg:flex">
                        {/* start of first link */}
                        <div className="ml-4">
                            <ul className="flex">
                                <li>image</li>
                                <li>title</li>
                            </ul>
                        </div>
                        {/* end of first nav */}

                        {/* start of second nav */}
                        <div>
                            <ul className="flex space-x-10">
                                <li className="border-b-2 border-btncolor"><Link to={'/'}>Home</Link> </li>
                                <li><Link to={'/category'}>Category</Link> </li>
                                <li><Link to={'/blog'}>Blog</Link> </li>
                                <li><Link to={'/about-us'}>About Us</Link> </li>
                            </ul>
                        </div>
                        {/* end of second nav */}

                        {/* button */}
                        <div className="mr-4 mb-2">
                            <button className="btn bg-btncolor border-none w-32 hover:bg-hcolor"><span className="text-white">Login</span></button>
                        </div>
                    

                        </div>
                         {/*second / mobile nav  */}

                         

                            

                         {/* end of mobile nav */}

                         {/* smallest nav */}
                         <div className="hidden sm:flex md:hidden lg:hidden">
                         <div className="navbar bg-base-100">
                            <div className="navbar-start">
                             <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Category</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        </ul>
                        </div>
                        </div>
                        <div className="navbar-center">
                        <div className="btn btn-ghost normal-case text-xl">Title</div>
                        </div>
                        <div className="navbar-end">

                        <button className="btn bg-btncolor border-none w-16 h-5 hover:bg-hcolor"><span className="text-white">Login</span></button>
                        {/* <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button> */}
                        
                        </div>
                            </div>
                         
                         </div>
                </nav>
            </header>
        </div>
     );
}
 
export default NavBar;