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
                height='955px'
                width='88.5%'
                loop={true}
                controls={true}
                playing={true}
            />
        </div>
        </>
    )
}


