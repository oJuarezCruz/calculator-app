interface BtnProps {
    btnStyle: string,
    children: string
    btnEvent: React.MouseEventHandler
}

export default function Btn({ btnStyle, children, btnEvent }: BtnProps) {
    return (
        <button
            className={btnStyle}
            onClick={btnEvent}
        >
            {children}
        </button>
    )
}