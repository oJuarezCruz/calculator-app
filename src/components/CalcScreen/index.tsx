interface CalcScreenProps {
    ScreenStyle: string,
    ScreenTxt: string
}

export default function CalcScreen({ ScreenStyle, ScreenTxt }: CalcScreenProps) {
    return (
        <div className={ScreenStyle}>
            <div className="text-right text-2xl">
                {ScreenTxt}
            </div>
        </div>
    )
}