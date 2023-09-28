import { MDBBtnGroup, MDBCard, MDBCardBody, MDBRadio, MDBRange, MDBSwitch } from 'mdb-react-ui-kit'
import React from 'react'

const RightPad = ({ powerOn, togglePower }) => {
    return (
        <MDBCard shadow='0' alignment='center'>
            <MDBCardBody className='p-1'>
                <div className='d-flex justify-content-center'>
                    <MDBSwitch
                        id='flexSwitchCheckDefault'
                        checked={powerOn}
                        onChange={togglePower} // Call togglePower when the switch is clicked
                    />
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