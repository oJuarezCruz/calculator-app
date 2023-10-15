import CalcKeyPad from "./components/CalcKeyPad";
import CalcScreen from "./components/CalcScreen";
import Nav from "./components/Nav";
import { useState } from 'react';

export default function App() {
  const themes =
    [
      {
        mainTheme: "w-full min-h-screen font-bold p-4 flex items-center flex-col gap-8 bg-theme1Bg text-white duration-300",
        navTheme: "flex items-center gap-3 p-2 rounded-full bg-theme1ToggleBgAndKeypadBg",
        navBtnTheme1: "p-1.5 rounded-full cursor-pointer bg-theme1KeyEqualNToggleBg",
        navBtnTheme2: "p-1.5 rounded-full cursor-pointer bg-theme1KeyEqualNToggleBg opacity-0",
        navBtnTheme3: "p-1.5 rounded-full cursor-pointer bg-theme1KeyEqualNToggleBg opacity-0",
        screenTheme: "p-6 rounded-lg w-full md:w-2/3 lg:w-2/5 bg-theme1ScreenBg",
        keyPadTheme: "w-full grid grid-cols-4 md:w-2/3 lg:w-2/5 rounded-lg p-4 bg-theme1ToggleBgAndKeypadBg",
        defaultKeyTheme: "p-4 text-3xl rounded m-1 bg-theme1NormalKeyBg border-b-4 border-theme1NormalKeyShadow text-theme1KeyTxt",
        delKeyStyle: "py-4 px-2 text-1xl uppercase rounded m-1 bg-theme1CalcKeyBg border-b-4 border-theme1KeyShadow",
        resetKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme1CalcKeyBg border-b-4 border-theme1KeyShadow",
        equalKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme1KeyEqualNToggleBg border-b-4 border-theme1KeyEqualNToggleShadow"
      },
      {
        mainTheme: "w-full min-h-screen font-bold p-4 flex items-center flex-col gap-8 bg-theme2Bg text-theme2KeyTxt duration-300",
        navTheme: "flex items-center gap-3 p-2 rounded-full bg-theme2ToggleBgAndKeypadBg",
        navBtnTheme1: "p-1.5 rounded-full cursor-pointer bg-theme2KeyEqualNToggleBg opacity-0",
        navBtnTheme2: "p-1.5 rounded-full cursor-pointer bg-theme2KeyEqualNToggleBg",
        navBtnTheme3: "p-1.5 rounded-full cursor-pointer bg-theme2KeyEqualNToggleBg opacity-0",
        screenTheme: "p-6 rounded-lg w-full md:w-2/3 lg:w-2/5 bg-theme2ScreenBg",
        keyPadTheme: "w-full grid grid-cols-4 md:w-2/3 lg:w-2/5 rounded-lg p-4 bg-theme2ToggleBgAndKeypadBg",
        defaultKeyTheme: "p-4 text-3xl rounded m-1 bg-theme2NormalKeyBg border-b-4 border-theme2NormalKeyShadow text-theme2KeyTxt",
        delKeyStyle: "py-4 px-2 text-1xl uppercase rounded m-1 bg-theme2CalcKeyBg border-b-4 border-theme2KeyShadow text-white",
        resetKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme2CalcKeyBg border-b-4 border-theme2KeyShadow text-white",
        equalKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme2KeyEqualNToggleBg border-b-4 border-theme2KeyEqualNToggleShadow text-white"
      },
      {
        mainTheme: "w-full min-h-screen font-bold p-4 flex items-center flex-col gap-8 bg-theme3Bg text-theme3KeyTxt duration-300",
        navTheme: "flex items-center gap-3 p-2 rounded-full bg-theme3ToggleKeypadAndScreenBg",
        navBtnTheme1: "p-1.5 rounded-full cursor-pointer bg-theme3KeyEqualNToggleBg opacity-0",
        navBtnTheme2: "p-1.5 rounded-full cursor-pointer bg-theme3KeyEqualNToggleBg opacity-0",
        navBtnTheme3: "p-1.5 rounded-full cursor-pointer bg-theme3KeyEqualNToggleBg",
        screenTheme: "p-6 rounded-lg w-full md:w-2/3 lg:w-2/5 bg-theme3ToggleKeypadAndScreenBg",
        keyPadTheme: "w-full grid grid-cols-4 md:w-2/3 lg:w-2/5 rounded-lg p-4 bg-theme3ToggleKeypadAndScreenBg",
        defaultKeyTheme: "p-4 text-3xl rounded m-1 bg-theme3NormalKeyBg border-b-4 border-theme3NormalKeyBgShadow text-theme3KeyTxt",
        delKeyStyle: "py-4 px-2 text-1xl uppercase rounded m-1 bg-theme3CalcKeyBg border-b-4 border-theme3CalcKeyBgShadow text-white",
        resetKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme3CalcKeyBg border-b-4 border-theme3CalcKeyBgShadow text-white",
        equalKeyTheme: "col-span-2 py-4 my-2 mx-1 text-2xl rounded bg-theme3KeyEqualNToggleBg border-b-4 border-theme3KeyEqualNToggleBgShadow text-theme3EqualTxt"
      }
    ]

  const [currentTheme, setCurrentTheme] = useState(0);

  const [screenDisplay, setScrenDisplay] = useState("0");

  return (
    <div className={`${themes[currentTheme].mainTheme}`}>
      <Nav
        navStyle={`${themes[currentTheme].navTheme}`}
        navBtnStyle1={`${themes[currentTheme].navBtnTheme1}`}
        navBtnStyle2={`${themes[currentTheme].navBtnTheme2}`}
        navBtnStyle3={`${themes[currentTheme].navBtnTheme3}`}
        toggleTheme1={() => setCurrentTheme(0)}
        toggleTheme2={() => setCurrentTheme(1)}
        toggleTheme3={() => setCurrentTheme(2)}
      />
      <main className="w-full flex items-center flex-col gap-4">
        <CalcScreen
          ScreenStyle={`${themes[currentTheme].screenTheme}`}
          ScreenTxt={screenDisplay.length <= 20 ? screenDisplay : screenDisplay.substring(0, 20)}
        />
        <CalcKeyPad
          keyPadStyle={`${themes[currentTheme].keyPadTheme}`}
          defaultKeyStyle={`${themes[currentTheme].defaultKeyTheme}`}
          delKeyStyle={`${themes[currentTheme].delKeyStyle}`}
          resetKeyStyle={`${themes[currentTheme].resetKeyTheme}`}
          equalKeyStyle={`${themes[currentTheme].equalKeyTheme}`}
          sevenKeyEvent={() => setScrenDisplay("7")}
          eightKeyEvent={() => setScrenDisplay("8")}
          nineKeyEvent={() => setScrenDisplay("9")}
          delKeyEvent={() => setScrenDisplay("DEL")}
          fourKeyEvent={() => setScrenDisplay("4")}
          fiveKeyEvent={() => setScrenDisplay("5")}
          sixKeyEvent={() => setScrenDisplay("6")}
          sumKeyEvent={() => setScrenDisplay("+")}
          oneKeyEvent={() => setScrenDisplay("1")}
          twoKeyEvent={() => setScrenDisplay("2")}
          threeKeyEvent={() => setScrenDisplay("3")}
          subKeyEvent={() => setScrenDisplay("-")}
          dotKeyEvent={() => setScrenDisplay(".")}
          zeroKeyEvent={() => setScrenDisplay("0")}
          divideKeyEvent={() => setScrenDisplay("/")}
          multiplyKeyEvent={() => setScrenDisplay("x")}
          resetKeyEvent={() => setScrenDisplay("0")}
          equalKeyEvent={() => setScrenDisplay("=")}
        />
      </main>
    </div>
  )
}
