interface NavProps {
    navStyle: string,
    navBtnStyle1: string,
    navBtnStyle2: string,
    navBtnStyle3: string,
    toggleTheme1: React.MouseEventHandler,
    toggleTheme2: React.MouseEventHandler,
    toggleTheme3: React.MouseEventHandler
}

export default function Nav({
    navStyle,
    navBtnStyle1,
    navBtnStyle2,
    navBtnStyle3,
    toggleTheme1,
    toggleTheme2,
    toggleTheme3
}: NavProps) {
    return (
        <header className="flex items-end justify-between w-full md:w-2/3 lg:w-2/5">
            <h1 className="text-2xl">calc</h1>
            <div className="flex items-center gap-8">
                <h2 className="text-[.65rem] tracking-widest uppercase">Theme</h2>
                <nav className={navStyle}>
                    <button
                        className={navBtnStyle1}
                        onClick={toggleTheme1}
                    ></button>
                    <button
                        className={navBtnStyle2}
                        onClick={toggleTheme2}
                    ></button>
                    <button
                        className={navBtnStyle3}
                        onClick={toggleTheme3}
                    ></button>
                </nav>
            </div>
        </header>
    )
}