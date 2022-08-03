import React from 'react'

function Header({ moves, time, reset, score }) {



  return (
    <div className='header'>

      <h1>Memory  Game</h1>

      <ul className='nav'>

        <li className='time'>{`Time :${time}s`}</li>
        <li className='moves'>{`Moves :${moves}`}</li>
        <li className='score'>{`Score : ${score}`}</li>
        <li ><button className='restart' onClick={(e) => reset()}>RESTART</button></li>

      </ul>










    </div>
  )
}

export default Header