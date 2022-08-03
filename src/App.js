import "./App.css";
import Board from "./components/Board";
import { useEffect, useState, useRef } from "react";

import Header from "./components/Header.jsx";
import Score from "./components/Score";

function App() {
  let [time, SetTime] = useState(0);

  let [score, setScore] = useState(0);
  let finalTime = useRef(0);
  let myIterVal = useRef(0);
  let [head, setHead] = useState([0]);
  let [status, setStatus] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let [gameEnd, setGameEnd] = useState(false);
  if (status.every((item) => item === true)) {
    clearInterval(myIterVal.current);
  }

  let [randomArray, setRandomArray] = useState([]);

  let reset = () => {
    (() => window.location.reload())();
    console.log("clicked");
    setStatus([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);

    setHead([0]);

    SetTime(() => 0);
    finalTime.current = 0;
    myIterVal.current = 0;
    setScore(() => 0);
    clearInterval(myIterVal.current);
    // myIterVal.current = setInterval(() => {
    //   time = time + 1;
    //   SetTime(time);
    // }, 1000);

    return () => {
      clearInterval(myIterVal.current);
    };
  };

  useEffect(() => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() - 0.5);
    setRandomArray(arr);
    // console.log(randomArray);
    myIterVal.current = setInterval(() => {
      time = time + 1;
      SetTime(time);
    }, 1000);
    // console.log(myIterVal);

    return () => {
      clearInterval(myIterVal.current);
    };
  }, []);

  useEffect(() => {
    // console.log(status.every((item) => item === true));
    if (status.every((item) => item === true)) {
      finalTime.current = time;
      SetTime(finalTime.current);
      console.log(finalTime);
      console.log(typeof myIterVal, myIterVal);

      // clearInterval(myIterVal.current);

      return () => {
        clearInterval(myIterVal.current);
        console.log(typeof myIterVal);
      };
    }
    console.log(status);
  }, [status]);

  let [clicked, setClicked] = useState([]);

  let final = [];
  useEffect(() => {
    comp(clicked);
    // console.log(clicked);
  }, [clicked]);

  let comp = async (clicked) => {
    if (clicked.length == 2) {
      if (clicked[0][1] === clicked[1][1]) {
        let tem = score + 1;
        setScore(tem);
        setClicked([]);
      } else {
        let tem = status;
        tem[clicked[0][0]] = true;
        tem[clicked[1][0]] = true;
        setStatus(tem);
        await new Promise((r) => setTimeout(r, 1000));

        tem[clicked[0][0]] = false;
        tem[clicked[1][0]] = false;
        setStatus(tem);
        setClicked([]);
      }
    }
  };

  // console.log(clicked);

  return (
    <div className="App">
      <div className="Score"></div>
      <Score status={status} moves={head[0]} finalTime={finalTime.current} />
      <Header
        time={time}
        moves={head[0]}
        score={score}
        setStatus={setStatus}
        reset={reset}
      />
      <Board
        randomArray={randomArray}
        setClicked={setClicked}
        clicked={clicked}
        status={status}
        setStatus={setStatus}
        head={head}
        setHead={setHead}

        // className={status.every((item) => item === true) ? "hide" : "show"}
      />
    </div>
  );
}

export default App;
