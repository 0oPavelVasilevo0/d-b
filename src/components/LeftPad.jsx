import { MDBBtn, MDBBtnGroup, MDBCard, MDBCardBody, MDBCardFooter, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'

const LeftPad = () => {
    return (
        //   <MDBContainer className='border d-flex flex-column justify-content-center align-items-center ms-0' style={{ width: '20vw', marginRight: 'auto' }}>
        //       <MDBBtnGroup shadow='0' size='lg'>
        //           <MDBBtn color='light' className='me-2'>
        //               Left
        //           </MDBBtn>
        //           <MDBBtn color='light' className='me-2'>
        //               Middle
        //           </MDBBtn>
        //           <MDBBtn color='light' className='me-2'>
        //               Right
        //           </MDBBtn>
        //       </MDBBtnGroup>
        //       <MDBBtnGroup shadow='0' size='lg'>
        //           <MDBBtn color='light' className='me-2'>
        //               Left
        //           </MDBBtn>
        //           <MDBBtn color='light' className='me-2'>
        //               Middle
        //           </MDBBtn>
        //           <MDBBtn color='light' className='me-2'>
        //               Right
        //           </MDBBtn>
        //       </MDBBtnGroup>
        //       <MDBBtnGroup size='lg'>
        //           <MDBBtn color='light'>tap</MDBBtn>
        //       </MDBBtnGroup>
        //   </MDBContainer>


        <MDBCard shadow='0'>
            <MDBCardBody className='p-1'>
                {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

                </MDBRow> */}
                {/* <MDBCardText> */}
                <MDBRow className='row-cols-1 row-cols-md-1 g-4'>
                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg'>Q</MDBBtn>
                        <MDBBtn size='lg' className='mx-4'>W</MDBBtn>
                        <MDBBtn size='lg'>E</MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg'>A</MDBBtn>
                        <MDBBtn size='lg' className='mx-4'>S</MDBBtn>
                        <MDBBtn size='lg'>D</MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg'>Z</MDBBtn>
                        <MDBBtn size='lg' className='mx-4'>X</MDBBtn>
                        <MDBBtn size='lg'>C</MDBBtn>
                    </MDBCol>



                </MDBRow>
                {/* </MDBCardText> */}
            </MDBCardBody>
        </MDBCard>

    )
}

export default LeftPad