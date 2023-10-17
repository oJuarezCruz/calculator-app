interface CalcScreenProps {
    ScreenStyle: string,
    ScreenTxt: string
}

export default function CalcScreen({ ScreenStyle, ScreenTxt }: CalcScreenProps) {
    return (
        <div className={ScreenStyle}>
            <div className="text-right text-2xl">
                {ScreenTxt}
                <span className="opacity-0">0</span>
            </div>
        </div>
    )
}