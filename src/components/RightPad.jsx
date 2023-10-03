// import { MDBBtnGroup, MDBCard, MDBCardBody, MDBContainer, MDBRadio, MDBRange, MDBSwitch } from 'mdb-react-ui-kit'
// import React, { useEffect, useState } from 'react'

// const RightPad = ({ powerOn, togglePower, setVolumeHandler, displayText, setDisplayText }) => {
//     // State variable to manage the volume level (initially set to 50)
//     const [volume, setVolume] = useState(20);

//     // Mapping between keyboard keys and corresponding text
//     const keyToTextMap = {
//         KeyQ: 'Heater-1',
//         KeyW: 'Heater-2',
//         KeyE: 'Heater-3',
//         KeyA: 'Heater-4_1',
//         KeyS: 'Heater-6',
//         KeyD: 'Oh',
//         KeyZ: 'Kick-n-Hat',
//         KeyX: 'Kick-1',
//         KeyC: 'H2',
//     };

//     // Function to handle changes in the volume level
//     const handleVolumeChange = (event) => {
//         const newVolume = event.target.value;
//         setVolume(newVolume);
//         // You can add code here to update the audio volume based on the newVolume value
//     };

//     // Function to handle keyboard events
//     const handleKeyDown = (event) => {
//         if (powerOn) {
//             const audioId = keyToTextMap[event.code];
//             if (audioId) {
//                 setDisplayText(audioId); // Update displayText based on the key press
//             }
//         }
//     };

//     useEffect(() => {
//         // Clear the display text when power is turned off
//         if (!powerOn) {
//             setDisplayText('');
//         }
//     }, [powerOn, setDisplayText]);

//     // Add event listener for keydown
//     useEffect(() => {
//         document.addEventListener('keydown', handleKeyDown);
//         return () => {
//             document.removeEventListener('keydown', handleKeyDown);
//         };
//     }, [powerOn]); // Listen for changes in powerOn


//     return (
//         <MDBCard shadow='0' alignment='center'>
//             <MDBCardBody className='p-1'>
//                 <div className='d-flex justify-content-center'>
//                     <MDBSwitch
//                         id='flexSwitchCheckDefault'
//                         checked={powerOn}
//                         onChange={togglePower} // Call togglePower when the switch is clicked
//                     />
//                     <p className='ms-2'>Power</p>
//                 </div>
//                 <MDBContainer id='display' className='bg-secondary text-light' style={{ width: '12rem', height: '2rem' }}>
//                     {displayText}
//                     </MDBContainer>
//                 <MDBRange
//                     value={volume} // Set the volume value to the state variable
//                     onChange={(event) => {
//                         handleVolumeChange(event);
//                         setVolumeHandler(event.target.value);
//                      }} // Call handleVolumeChange when the range is adjusted
//                     id='customRange'
//                     label='Volume'
//                 />
//                 <div>
//                     <MDBBtnGroup shadow='0'>
//                         <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='Heater Kit' />
//                         <MDBRadio
//                             btn
//                             btnColor='secondary'
//                             id='btn-radio2'
//                             name='options'
//                             wrapperClass='ms-2'
//                             wrapperTag='span'
//                             label='Smooth Piano Kit'
//                             defaultChecked
//                         />
//                     </MDBBtnGroup>
//                 </div>
//             </MDBCardBody>
//         </MDBCard>
//     )
// }

// export default RightPad

import { MDBBtnGroup, MDBCard, MDBCardBody, MDBContainer, MDBRadio, MDBRange, MDBSwitch } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';

const RightPad = ({ powerOn, togglePower, setVolumeHandler, displayText, setDisplayText }) => {
    const [volume, setVolume] = useState(20);

    // Mapping between keyboard keys and corresponding text and audio source
    const keyToDataMap = {
        KeyQ: { text: 'Heater-1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        KeyW: { text: 'Heater-2', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        KeyE: { text: 'Heater-3', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        KeyA: { text: 'Heater-4_1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        KeyS: { text: 'Heater-6', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        KeyD: { text: 'Oh', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        KeyZ: { text: 'Kick-n-Hat', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        KeyX: { text: 'Kick-1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        KeyC: { text: 'H2', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
    };

    // Function to handle changes in the volume level
    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        // You can add code here to update the audio volume based on the newVolume value
    };

    // Function to handle keyboard events
    const handleKeyDown = (event) => {
        if (powerOn) {
            const keyData = keyToDataMap[event.code];
            if (keyData) {
                const { text, audio } = keyData;
                setDisplayText(text); // Update displayText based on the key press
                const audioElement = new Audio(audio );
                audioElement.volume = volume / 100;
                audioElement.play(); // Play the corresponding audio
            }
        }
    };

    useEffect(() => {
        // Clear the display text when power is turned off
        if (!powerOn) {
            setDisplayText();
        }
    }, [powerOn, setDisplayText]);

    // Add event listener for keydown
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [powerOn, volume, setDisplayText]); // Listen for changes in powerOn, volume, and setDisplayText

    return (
        <MDBCard shadow='0' alignment='center'>
            <MDBCardBody className='p-1'>
                <div className='d-flex justify-content-center'>
                    <MDBSwitch
                        id='flexSwitchCheckDefault'
                        checked={powerOn}
                        onChange={togglePower}
                        color='dark'
                    />
                    <p className='ms-2 text-info'>Power</p>
                </div>
                <MDBContainer id='display' className={`text-danger square border border-2 border-info d-flex align-items-center  justify-content-center ${powerOn ? 'active' : ''}`} style={{ width: '12rem', height: '2rem' }}>
                    {displayText}
                </MDBContainer>
                <p className='mt-3 mb-0 text-info'>Volume</p>
                <MDBRange
                    value={volume}
                    onChange={(event) => {
                        handleVolumeChange(event);
                        setVolumeHandler(event.target.value);
                    }}
                    id='customRange'
                    color='secondary'
                    className='my-2 px-4'
                />
                <div>
                    {/* <MDBBtnGroup shadow='0'>
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
                    </MDBBtnGroup> */}
                </div>
            </MDBCardBody>
        </MDBCard>
    );
};

export default RightPad;
