import { useState } from "react"

export default function Navbar(){
    //leave true for development
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false)
    return <nav>
        <div id="navbar-menu" className="flex justify-between items-center bg-slate-200 text-slate-900 px-8 py-1 font-semibold text-lg">
            <a href="/">Logo</a>
            <ul className="hidden lg:flex gap-4 items-center">
                <li className="hover:underline">
                    <a href="#">About</a>
                </li>
                <li className="hover:underline">
                    <a href="#">Contact</a>
                </li>
                <li className="hover:underline">
                    <a href="#">Pricing</a>
                </li>
                <li className="bg-slate-800 text-slate-100 rounded px-2 py-1">
                    <button >Sign Up</button>
                </li>
            </ul>
            <button 
            className="lg:hidden flex flex-col justify-evenly border border-slate-800 w-8 h-8 rounded items-center"
            onClick={() => setIsMobileMenuOpen(previous => !previous)}
            >
                    <div className="w-3/4 rounded h-[1px] bg-slate-900"></div>
                    <div className="w-3/4 rounded h-[1px] bg-slate-900"></div>
                    <div className="w-3/4 rounded h-[1px] bg-slate-900"></div>
            </button>
        </div>
        { isMobileMenuOpen && (<div id="mobile-menu" className="flex flex-col lg:hidden absolute top-100 bg-white text-slate-900
        min-h-screen min-w-full items-center text-lg font-semibold gap-4
        ">
            <a href="/">Logo</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Pricing</a>
            <button className="bg-slate-800 text-slate-100 px-2 py-1 rounded">Sign Up</button>
        </div>)}
    </nav>
}