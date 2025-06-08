import { MenuIcon } from 'lucide-react'
import React from 'react'

const header = () => {
    return (
        <div>
            <header>
                <nav className="flex justify-between items-center bg-white h-16">
                    <div>
                        <h1>Logo</h1>
                    </div>
                    <div className="hidden">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="">
                        <MenuIcon />
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default header