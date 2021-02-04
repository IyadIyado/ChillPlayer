import React from "react";
import Button from "@material-ui/core/Button";

//AIzaSyCQHQ8-OJh9tNIRxLd21QTiEcdy295gXK0
//AIzaSyA6wruY8sNsnhYoOz25AVDHnL_uiagFXXU

export default function VideoPicker(props) {

    function randomPicker() {
    var x = Math.floor((Math.random() * 7) + 1);
    return x;
    }

    function getLink(object) {
        let url = object.items[randomPicker()].id.videoId
        console.log(url)
        props.setUrl(url)
    }

    function play () {
        fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q="+ props.type + props.term + "&key=AIzaSyA6wruY8sNsnhYoOz25AVDHnL_uiagFXXU&videoDuration="+ props.length + "&type=video")
        .then(function(res) {
            return res.json();
        }).then( function (obj) {
            console.log(obj);
            getLink(obj);
        })
    }


    return (
        <Button onClick={()=> play()}>Play</Button>
    )
}