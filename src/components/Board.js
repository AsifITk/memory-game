import React from "react";
import Icon from "./Icons";

function Board({
  randomArray,
  setClicked,
  clicked,
  status,
  setStatus,
  head,
  setHead,
}) {
  return (
    <div className={status.every((item) => item === true) ? "hide" : "board"}>
      <div className="board-row1">
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[0]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={0}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[1]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={1}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[2]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={2}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[3]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={3}
            head={head}
            setHead={setHead}
          />
        </div>
      </div>
      <div className="board-row2">
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[4]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={4}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[5]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={5}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[6]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={6}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[7]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={7}
            head={head}
            setHead={setHead}
          />
        </div>
      </div>
      <div className="board-row3">
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[8]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={8}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[9]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={9}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[10]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={10}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[11]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={11}
            head={head}
            setHead={setHead}
          />
        </div>
      </div>
      <div className="board-row3">
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[12]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={12}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[13]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={13}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[14]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={14}
            head={head}
            setHead={setHead}
          />
        </div>
        <div className="board-cell">
          <Icon
            className="icon"
            svgNo={randomArray[15]}
            setClicked={setClicked}
            clicked={clicked}
            status={status}
            setStatus={setStatus}
            no={15}
            head={head}
            setHead={setHead}
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
