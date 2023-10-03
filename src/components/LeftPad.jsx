import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react';
import './../App.css'

const LeftPad = ({ powerOn, volume, onAudioClick }) => {
     
    


    const [audioElements, setAudioElements] = useState({});

    // Function to handle the click event on a drum pad
    const handleClick = (audioId, btnId) => {
        if (powerOn) {
            const audioElement = audioElements[audioId];
            if (audioElement) {
                audioElement.currentTime = 0;

                // Check if the volume is a finite number and within the valid range
                const adjustedVolume = parseFloat(volume / 100);
                if (!isNaN(adjustedVolume) && adjustedVolume >= 0 && adjustedVolume <= 1) {
                    audioElement.volume = adjustedVolume;
                    audioElement.play();
                } else {
                    console.error("Invalid volume:", volume);
                }
            }
            onAudioClick(btnId);//4
        }
    };


    // Function to handle keyboard events
    const handleKeyDown = (event) => {
        // Define the mapping between keyboard keys and audio IDs
        const keyToAudioIdMap = {
            KeyQ: 'Q',
            KeyW: 'W',
            KeyE: 'E',
            KeyA: 'A',
            KeyS: 'S',
            KeyD: 'D',
            KeyZ: 'Z',
            KeyX: 'X',
            KeyC: 'C',
        };

        // Check if the pressed key has a corresponding audio ID
        const audioId = keyToAudioIdMap[event.code];

        if (audioId) {
            handleClick(audioId);
        }
    };

    // Add event listeners for keydown
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, ); // []

    useEffect(() => {
        // Create and store audio elements in the state
        const audioElements = {
            Q: document.getElementById('Q'),
            W: document.getElementById('W'),
            E: document.getElementById('E'),
            A: document.getElementById('A'),
            S: document.getElementById('S'),
            D: document.getElementById('D'),
            Z: document.getElementById('Z'),
            X: document.getElementById('X'),
            C: document.getElementById('C'),
        };
        setAudioElements(audioElements);
    }, []);

    // const activeLink = 'bg-dark text-light';
    // const normalLink = '';

    return (
        <MDBCard shadow='0'>
            <MDBCardBody className='p-1'>

                <MDBRow className='row-cols-1 row-cols-md-1 g-2'>
                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn id='Heater-1' size='lg'  color='info' className='drum-pad' onClick={() => handleClick('Q', 'Heater-1')}>
                            <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
                            Q
                        </MDBBtn>
                        <MDBBtn id='Heater-2' size='lg' color='info' className='mx-2 drum-pad' onClick={() => handleClick('W', 'Heater-2')}>
                            <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
                            W
                        </MDBBtn>
                        <MDBBtn id='Heater-3' size='lg' color='info' className='drum-pad' onClick={() => handleClick('E', 'Heater-3')}>
                            <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
                            E
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn id='Heater-4_1' size='lg' color='info' className='drum-pad' onClick={() => handleClick('A', 'Heater-4_1')}>
                            <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
                            A
                        </MDBBtn>
                        <MDBBtn id='Heater-6' size='lg' color='info' className='mx-2 drum-pad' onClick={() => handleClick('S', 'Heater-6')}>
                            <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
                            S
                        </MDBBtn>
                        <MDBBtn id='Oh' size='lg' color='info' className='drum-pad' onClick={() => handleClick('D', 'Oh')}>
                            <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
                            D
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn id='Kick-n-Hat' size='lg' color='info' className='drum-pad' onClick={() => handleClick('Z', 'Kick-n-Hat')}>
                            <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
                            Z
                        </MDBBtn>
                        <MDBBtn id='Kick-1' size='lg' color='info' className='mx-2 drum-pad' onClick={() => handleClick('X', 'Kick-1')}>
                            <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
                            X
                        </MDBBtn>
                        <MDBBtn id='H2' size='lg' color='info' className='drum-pad' onClick={() => handleClick('C', 'H2')}>
                            <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
                            C
                        </MDBBtn>
                    </MDBCol>
                    {/* <MDBCol className='d-flex  justify-content-center'>
                        <button className={({ isActive }) => isActive ? activeLink : normalLink}>t</button>
                        <MDBBtn id='Kick-1' size='lg' className={({ isActive }) => isActive ? activeLink : normalLink} onClick={() => handleClick('X', 'Kick-1')}>
                            </MDBBtn>
                        <MDBBtn id='Kick-1' size='lg'  className='mx-2 drum-pad' color='secondary' onClick={() => handleClick('X', 'Kick-1')}>
                        </MDBBtn>


                    </MDBCol> */}
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default LeftPad;
