import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import React, { useEffect } from 'react';
import './../App.css'

const LeftPad = ({powerOn}) => {

    // Function to handle the click event on a drum pad
    const handleClick = (audioId) => {
        if (powerOn) {
        const audioElement = document.getElementById(audioId);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }
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

    return (
        <MDBCard shadow='0'>
            <MDBCardBody className='p-1'>

                <MDBRow className='row-cols-1 row-cols-md-1 g-2'>
                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg'  outline color='dark' className='drum-pad' onClick={() => handleClick('Q')}>
                            <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'></audio>
                            Q
                        </MDBBtn>
                        <MDBBtn size='lg' className='mx-2 drum-pad' onClick={() => handleClick('W')}>
                            <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'></audio>
                            W
                        </MDBBtn>
                        <MDBBtn size='lg' className='drum-pad' onClick={() => handleClick('E')}>
                            <audio className='clip' id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'></audio>
                            E
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg' className='drum-pad' onClick={() => handleClick('A')}>
                            <audio className='clip' id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'></audio>
                            A
                        </MDBBtn>
                        <MDBBtn size='lg' className='mx-2 drum-pad' onClick={() => handleClick('S')}>
                            <audio className='clip' id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'></audio>
                            S
                        </MDBBtn>
                        <MDBBtn size='lg' className='drum-pad' onClick={() => handleClick('D')}>
                            <audio className='clip' id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'></audio>
                            D
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol className='d-flex  justify-content-center'>
                        <MDBBtn size='lg' className='drum-pad' onClick={() => handleClick('Z')}>
                            <audio className='clip' id='Z' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'></audio>
                            Z
                        </MDBBtn>
                        <MDBBtn size='lg' className='mx-2 drum-pad' onClick={() => handleClick('X')}>
                            <audio className='clip' id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'></audio>
                            X
                        </MDBBtn>
                        <MDBBtn size='lg' className='drum-pad' onClick={() => handleClick('C')}>
                            <audio className='clip' id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'></audio>
                            C
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>

    )
}

export default LeftPad