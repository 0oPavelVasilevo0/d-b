import { MDBBtnGroup, MDBCard, MDBCardBody, MDBCardText, MDBRadio, MDBRange, MDBSwitch } from 'mdb-react-ui-kit'
import React from 'react'

const RightPad = () => {
  return (
      <MDBCard shadow='0' alignment='center'>
          <MDBCardBody>
              <div className='d-flex justify-content-center'>
              <MDBSwitch id='flexSwitchCheckDefault' />
                <p className='ms-2'>Power</p>
              </div>
              <MDBRange
                  defaultValue={50}
                  id='customRange'
                  label='Volume'
              />
              <div>
                  <MDBBtnGroup shadow='0'>
                      <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='Heater Kit' />
                      <MDBRadio
                          btn
                          btnColor='secondary'
                          id='btn-radio2'
                          name='options'
                          wrapperClass='ms-2'
                          wrapperTag='span'
                          label='Smooth Piano Kit'
                          defaultChecked
                      />
                  </MDBBtnGroup>
              </div>
          </MDBCardBody>
      </MDBCard>
  )
}

export default RightPad