import { useState } from "react";
import "./App.css";
import MathJax from "react-mathjax";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [moles, setMoles] = useState(0);
    const [temp, setTemp] = useState(0);
    const [volume, setVol] = useState(0);
    const [constA, setA] = useState(0);
    const [constB, setB] = useState(0);
    //     pressure = ((moles * 0.08314 * tempKelvin) / (volume - (moles * const_b))) - (((moles ** 2) * const_a) / (volume ** 2))
    const formula1 =
        (moles * 0.08314 * temp) / (volume - moles * constB) -
        (moles * moles * constA) / (volume * volume);
    const formula2 = (moles * 0.08314 * temp) / volume;

    const [pressure1, setPressure1] = useState(formula1);
    const [pressure2, setPressure2] = useState(formula2);

    function gases() {
        setPressure1(formula1);
        setPressure2(formula2);
    }

    return (
        <div>
            <header>
                <h1>van der Waals Calculator</h1>
            </header>

            <div class="center">
                <MathJax.Provider>
                    <p>
                        <input
                            type="number"
                            value={moles}
                            onChange={(num) => setMoles(+num.target.value)}
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"mol"} />
                        </label>
                    </p>

                    <p>
                        <input
                            type="number"
                            value={temp}
                            onChange={(num) => setTemp(+num.target.value)}
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"°K"} />
                        </label>
                    </p>

                    <p>
                        <input
                            type="number"
                            value={volume}
                            onChange={(num) => setVol(+num.target.value)}
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"L"} />
                        </label>
                    </p>
                    <p>
                        <input
                            type="number"
                            value={constA}
                            onChange={(num) => setA(+num.target.value)}
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"L^2bar / mol^2"} />
                        </label>
                    </p>
                    <p>
                        <input
                            type="number"
                            value={constB}
                            onChange={(num) => setB(+num.target.value)}
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"L / mol"} />
                        </label>
                    </p>
                    <button className="button button1" onClick={gases}>
                        Calculate van der Waals Equation
                    </button>

                    <p className="result">
                        <input
                            type="number"
                            value={pressure2.toFixed(5)}
                            readOnly
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"bar_{ideal}"} />
                        </label>
                        <br />
                        <input
                            type="number"
                            value={pressure1.toFixed(5)}
                            readOnly
                        />{" "}
                        <label>
                            {" "}
                            <MathJax.Node inline formula={"bar_{real}"} />
                        </label>
                    </p>
                </MathJax.Provider>
            </div>
            <a className="github" href="https://github.com/MahinKukreja">
                Github
            </a>
        </div>
    );
}

export default App;
