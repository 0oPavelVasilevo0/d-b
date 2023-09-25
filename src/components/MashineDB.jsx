import { MDBCardGroup, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import LeftPad from './LeftPad'
import RightPad from './RightPad'

const MashineDB = () => {
  return (
    < MDBContainer className=' d-flex align-items-center justify-content-center' style={{ height: '100vh'}} >
      <MDBContainer className='border d-flex justify-content-center align-items-center'>
        <MDBCardGroup>
          <LeftPad />
          <RightPad />
        </MDBCardGroup>
      </MDBContainer>
    </MDBContainer>
  )
}

export default MashineDB