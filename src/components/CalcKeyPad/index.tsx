import Btn from "../Btn"

interface CalcKeysProps {
    keyPadStyle: string,
    defaultKeyStyle: string,
    delKeyStyle: string,
    equalKeyStyle: string,
    resetKeyStyle: string,
    sevenKeyEvent: React.MouseEventHandler,
    eightKeyEvent: React.MouseEventHandler,
    nineKeyEvent: React.MouseEventHandler,
    delKeyEvent: React.MouseEventHandler,
    fourKeyEvent: React.MouseEventHandler,
    fiveKeyEvent: React.MouseEventHandler,
    sixKeyEvent: React.MouseEventHandler,
    sumKeyEvent: React.MouseEventHandler,
    oneKeyEvent: React.MouseEventHandler,
    twoKeyEvent: React.MouseEventHandler,
    threeKeyEvent: React.MouseEventHandler,
    subKeyEvent: React.MouseEventHandler,
    dotKeyEvent: React.MouseEventHandler,
    zeroKeyEvent: React.MouseEventHandler,
    divideKeyEvent: React.MouseEventHandler,
    multiplyKeyEvent: React.MouseEventHandler,
    resetKeyEvent: React.MouseEventHandler,
    equalKeyEvent: React.MouseEventHandler,
}

export default function CalcKeyPad({
    keyPadStyle,
    defaultKeyStyle,
    delKeyStyle,
    resetKeyStyle,
    equalKeyStyle,

    sevenKeyEvent,
    eightKeyEvent,
    nineKeyEvent,
    delKeyEvent,
    fourKeyEvent,
    fiveKeyEvent,
    sixKeyEvent,
    sumKeyEvent,
    oneKeyEvent,
    twoKeyEvent,
    threeKeyEvent,
    subKeyEvent,
    dotKeyEvent,
    zeroKeyEvent,
    divideKeyEvent,
    multiplyKeyEvent,
    resetKeyEvent,
    equalKeyEvent
}: CalcKeysProps) {
    return (
        <div className={keyPadStyle}>
            <Btn
                btnEvent={sevenKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                7
            </Btn>
            <Btn
                btnEvent={eightKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                8
            </Btn>
            <Btn
                btnEvent={nineKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                9
            </Btn>
            <Btn
                btnEvent={delKeyEvent}
                btnStyle={delKeyStyle}
            >
                Del
            </Btn>
            <Btn
                btnEvent={fourKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                4
            </Btn>
            <Btn
                btnEvent={fiveKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                5
            </Btn>
            <Btn
                btnEvent={sixKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                6
            </Btn>
            <Btn
                btnEvent={sumKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                +
            </Btn>
            <Btn
                btnEvent={oneKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                1
            </Btn>
            <Btn
                btnEvent={twoKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                2
            </Btn>
            <Btn
                btnEvent={threeKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                3
            </Btn>
            <Btn
                btnEvent={subKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                -
            </Btn>
            <Btn
                btnEvent={dotKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                .
            </Btn>
            <Btn
                btnEvent={zeroKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                0
            </Btn>
            <Btn
                btnEvent={divideKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                /
            </Btn>
            <Btn
                btnEvent={multiplyKeyEvent}
                btnStyle={defaultKeyStyle}
            >
                x
            </Btn>
            <Btn
                btnEvent={resetKeyEvent}
                btnStyle={resetKeyStyle}
            >
                Reset
            </Btn>
            <Btn
                btnEvent={equalKeyEvent}
                btnStyle={equalKeyStyle}
            >
                =
            </Btn>
        </div>
    )
}