import { MDBBtnGroup, MDBCard, MDBCardBody, MDBRadio, MDBRange, MDBSwitch } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

const RightPad = ({ powerOn, togglePower }) => {
    // State variable to manage the volume level (initially set to 50)
    const [volume, setVolume] = useState(50);

    // Function to handle changes in the volume level
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        // You can add code here to update the audio volume based on the newVolume value
    };

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
                    value={volume} // Set the volume value to the state variable
                    onChange={handleVolumeChange} // Call handleVolumeChange when the range is adjusted
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
