import React from "react";
import FirstText from "./components/FirstText";
import SecondText from "./components/SecondText";
import ThirdText from "./components/ThirdText";
import FourthText from "./components/FourthText";
import FifthText from "./components/FifthText";
import SixthText from "./components/SixthText";
import SeventhText from "./components/SeventhText";
import EighthText from "./components/EighthText";
import NinthText from "./components/NinthText";
import TenthText from "./components/TenthText";

function App() {
    return (
        <>
            <div className="container">
                <ul className="list-group">
                    <li className="list-group__item">
                        <FirstText />
                    </li>
                    <li className="list-group__item">
                        <SecondText />
                    </li>
                    <li className="list-group__item">
                        <ThirdText />
                    </li>
                    <li className="list-group__item">
                        <FourthText />
                    </li>
                    <li className="list-group__item">
                        <FifthText />
                    </li>
                    <li className="list-group__item">
                        <SixthText />
                    </li>
                    <li className="list-group__item">
                        <SeventhText />
                    </li>
                    <li className="list-group__item">
                        <EighthText />
                    </li>
                    <li className="list-group__item">
                        <NinthText />
                    </li>
                    <li className="list-group__item">
                        <TenthText />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default App;
