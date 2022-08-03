import React from 'react'

function Score({status, finalTime,moves}) {
  return (
    <div className={status.every((item) => item === true) ? "shoow" : "hide"}>Congratulations! You won in {moves}! You took {finalTime} seconds!</div>
  )
}

export default Score