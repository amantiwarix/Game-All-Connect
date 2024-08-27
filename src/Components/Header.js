import React from 'react'
import { GAME_STATE_DRAW, GAME_STATE_PLAYING, GAME_STATE_WIN  } from './Constants'


const Header = ({gameState, currentPlayer, winplayer}) => {
  const renderLable = () =>{
    switch (gameState){
      case GAME_STATE_PLAYING:
        return <div>Player {currentPlayer} Turn</div>
      case GAME_STATE_WIN:
        return <div> Player {winplayer} Wins</div>
      case GAME_STATE_DRAW:
        <div> Game is a Draw</div>
        break;
      default:
    }
  }
  return (
    <div className='panel header'>
      <div className="header-text">{renderLable()}</div>
    </div>
  )
}

export default Header
