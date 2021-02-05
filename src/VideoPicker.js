import React from "react";
import Button from "@material-ui/core/Button";

//AIzaSyCQHQ8-OJh9tNIRxLd21QTiEcdy295gXK0
//AIzaSyA6wruY8sNsnhYoOz25AVDHnL_uiagFXXU

//This component will use the youtube api to search for videos based on the selected terms
//It will then parse through the JSON object and select 1 of 7 videos randomly to be played
//It will extract the video id from the JSON object and set the URL to it, which will be passed to the 
//VideoPicker component.

export default function VideoPicker(props) {

    //This function will generate a random number
    function randomPicker() {
    var x = Math.floor((Math.random() * 10) + 1);
    return x;
    }

    //This function will extract the URL of a randomly selected video and set the URL state to match it.
    function getLink(object) {
        let url = object.items[randomPicker()].id.videoId
        props.setUrl(url)
    }

    // Fetch the data from the youtube api based on the selected terms
    function play () {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+ props.type + props.term + "&key=AIzaSyA6wruY8sNsnhYoOz25AVDHnL_uiagFXXU&videoDuration="+ props.length + "&type=video")
        .then(function(res) {
            return res.json();
        }).then( function (obj) {
            console.log(obj);
            getLink(obj);
        })
    }


    return (
        <Button variant="outlined" onClick={()=> play()}>Play</Button>
    )
}