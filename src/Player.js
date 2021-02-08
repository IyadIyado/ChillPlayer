import React from 'react'
import ReactPlayer from 'react-player/youtube'

// https://www.youtube.com/watch?v=

//This component will use the ReactPlayer npm package to play youtube videos.

export default function Player(props){
    return (
        <>
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={'https://www.youtube.com/watch?v='+ props.url}
                loop={true}
                height="100vh"
                width="88.5%"
                controls={true}
                playing={true}
            />
        </div>
        </>
    )
}

//height="950px"
// width="88.5%"

