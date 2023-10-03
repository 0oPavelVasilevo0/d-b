import { MDBCardGroup, MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import LeftPad from './LeftPad'
import RightPad from './RightPad'

const MashineDB = () => {

  const [powerOn, setPowerOn] = useState(false);
  const [volume, setVolume] = useState(10);
  const [displayText, setDisplayText] = useState('');// 1

  const handleAudioClick = (audioId) => {
    setDisplayText(audioId); // Set the display text to the clicked audio ID 2
  };


  // Function to toggle the power state
  const togglePower = () => {
    setPowerOn((prevPower) => !prevPower);
    // Reset the display text when turning off the power
    if (!powerOn) {
      setDisplayText('');
    }
  };

  return (
    < MDBContainer id="drum-machine" className=' d-flex align-items-center justify-content-center' style={{ height: '100vh'}} >
      <MDBContainer className='square border border-4 border-info d-flex justify-content-center align-items-center p-1' style={{maxWidth: '36rem'}}>
        <MDBCardGroup>
          <LeftPad powerOn={powerOn} volume={volume} onAudioClick={handleAudioClick} /> {/**4 */}
          <RightPad powerOn={powerOn} togglePower={togglePower} setVolumeHandler={setVolume} displayText={displayText} setDisplayText={setDisplayText}/> {/**3 */}
        </MDBCardGroup>
      </MDBContainer>
    </MDBContainer>
  )
}

export default MashineDB