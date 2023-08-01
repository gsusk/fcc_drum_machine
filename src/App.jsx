import { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ToggleButton } from 'react-bootstrap';


const songs = [
  { shortcut: 'Q', song: 'Heater 1', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { shortcut: 'W', song: 'Heater 2', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { shortcut: 'E' ,song: 'Heater 3', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { shortcut: 'A', song: 'Heater 4', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { shortcut: 'S', song: 'Clap', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { shortcut: 'D', song: 'Open-HH', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { shortcut: 'Z', song: 'Kick-n\'-Hat', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { shortcut: 'X', song: 'Kick', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { shortcut: 'C', song: 'Closed-HH', linkTo: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
];

const App = () => {
  const [buttonSong, setButtonSong] = useState(songs);
  const [toggleApp, setToggleApp] = useState(false);

  const handleClick = () => {
    setToggleApp((currentValue) => {
      return !currentValue
    })
  }

  return (
    <>
   <section id='drum-machine'>
      <Row>
        <Col xs='6' className='colButton d-flex align-items-center'>
          <DrumButton buttonSong={buttonSong}></DrumButton>
        </Col>

        <Col xs='6' className='colButton '>
          <Row className='right d-flex justify-content-center align-items-center text-center'>
            <Power onClick={handleClick}></Power>
            <Display></Display>
            <Volume></Volume>
          </Row>
        </Col>

      </Row> 
    </section>
    </>
  )
}


const DrumButton = ({buttonSong}) => {
  return (
    <>
      <Row className='left d-flex justify-content-center align-items-center '>
      {buttonSong.map((item, index) => {
        return (
        <Col xs='4' key={item.song} className='d-flex justify-content-center align-items-center '>
          <Button className='drum-pad drumButton mt-2 mb-2'>{item.shortcut}</Button>
        </Col>)
      })}
      </Row>
    </>
  )
}


const Power = ({onClick}) => {
  return (
    <>
      <label className='power-label' htmlFor='power'>POWER</label>
      <label className='switch' htmlFor='power'>
      <input onClick={onClick} id='power'className='toggleButton' type='checkbox'/>
      <span className="slider round"></span>    
      </label>
    </>
  )
}

const Display = () => {
  return (
    <>
      <div className='displayScreen'>
        <p>hey whats up</p>
      </div>
    </>
  )
}

const Volume = () => {
  return (
    <div>
      <input type='range' min="1" max="100" className="volume-slider" onChange={'temp'}></input>    
    </div>
  )
}
export default App


