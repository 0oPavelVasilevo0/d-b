import { MDBCardGroup, MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import LeftPad from './LeftPad'
import RightPad from './RightPad'

const MashineDB = () => {

  const [powerOn, setPowerOn] = useState(false);

  // Function to toggle the power state
  const togglePower = () => {
    setPowerOn((prevPower) => !prevPower);
  };

  return (
    < MDBContainer id="drum-machine" className=' d-flex align-items-center justify-content-center' style={{ height: '100vh'}} >
      <MDBContainer id="display" className='square border border-4 border-dark d-flex justify-content-center align-items-center p-1' style={{maxWidth: '36rem'}}>
        <MDBCardGroup>
          <LeftPad powerOn={powerOn} />
          <RightPad powerOn={powerOn} togglePower={togglePower} />
        </MDBCardGroup>
      </MDBContainer>
    </MDBContainer>
  )
}

export default MashineDB