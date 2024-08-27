import React from 'react'
import { GAME_STATE_PLAYING } from './Constants'

const Footer = ({onNewGameClick, onSuggestClick, gameState}) => {
  const renderButtons = () => {
    if (gameState === GAME_STATE_PLAYING){
      <btuutton onClick={onSuggestClick} >Suggest</btuutton>
    }
    return <button onClick={onNewGameClick}>New Game</button>
  }
  return (
    <div className='panel footer'>
      {
        renderButtons()
      }
    </div>
  )
}

export default Footer
