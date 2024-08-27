import React from "react";
import '../Game.css'


const GameCircle =  ({id, children, className, onCircleCliked}) => {
  return(
      <div className = {`gameCircle ${className}`} onClick={() => onCircleCliked(id)}>
            {children}
      </div>
  )
}
export default GameCircle;
