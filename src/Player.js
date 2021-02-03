import React from 'react'
import ReactPlayer from 'react-player/youtube'

// https://www.youtube.com/watch?v=

export default function Player(props){
    return (
        <>
        {console.log("Player component " + props.url)}
        {console.log('https:www.youtube.com/'+ props.url)}
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player'
                url={'https://www.youtube.com/watch?v='+ props.url}
                height='955px'
                width='88.5%'
                loop="true"
                controls="true"
                playing="true"
            />
        </div>
        </>
    )
}


