import React, { useState } from "react";
import KeyTerm from "./KeyTerm"
import VideoPicker from "./VideoPicker"
import Player from "./Player"

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ListItem from "@material-ui/core/ListItem";



const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: "12%",
		alignItems: "center",
		background: "linear-gradient(75deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: "3px",
		
	},
	}));

	export default function App() {
		const [length, setLength] = useState("Long");
		const [type, setType] = useState("Drive 4k");
		const [term, setTerm] = useState("canada");
		const [url, setUrl] = useState("");
		const classes = useStyles();

	
	//This function will extract the value from the user selected option. In this case, it will set the type of the video accordingly.
	//If visual loops was selected, the function will reset the keyterm value, since it is not necessary and would avoid conflict of search results.
	const handleTypeChange = (event) => {
		setType(event.target.value);
		if(event.target.value === "Visual Loops") {
			setTerm("");
		}
	};

	//This function will extract the value from the user selected option and will set the duration/length of the video.
	const handleLengthChange = (event) => {
		setLength(event.target.value);
	};

	//This function will extract the value from the user selected option and will set the keyterm value. However, depending on the keyterm selected,
	//this function will adjust it accordingly to better match the theme of the site. 
	function handleTermChange(event){
		let newTerm = event.target.value;
		if (newTerm === "Oldies Music") {
			setTerm("Oldies Music playing in another room")
		} else if (newTerm === "Video Games") {
			setTerm("Video Games and Chill") 
		} else {
			setTerm(newTerm);
		}
	}

	//This is the list element, and it contains the menue where users will interact with the site. In here, users are able to select what
	//type of videos they want to watch and the duration of the videos.
	const list = (
		<List style={{display:"flex", flexDirection:"column"}}>
		<ListItem>
			<FormControl>
			<InputLabel id="Type">Type </InputLabel>
			<Select
				labelId="Type"
				id="Type"
				value={type}
				onChange={handleTypeChange}
			>
				<MenuItem value={"Drive 4k"}>Drive</MenuItem>
				<MenuItem value={"Music"}>Music</MenuItem>
				<MenuItem value={"Visual Loops"}>Visual Loops</MenuItem>
			</Select>
			</FormControl>
		</ListItem>
		<Divider />

		<ListItem>
			<FormControl>
			<InputLabel id="Length">Length</InputLabel>
			<br />
			<Select
				labelId="Length"
				id="Length"
				value={length}
				onChange={handleLengthChange}
			>
				<MenuItem value={"any"}>Any</MenuItem>
				<MenuItem value={"Long"}>Long</MenuItem>
				<MenuItem value={"Medium"}>Medium</MenuItem>
				<MenuItem value={"Short"}>Short</MenuItem>
			</Select>
			</FormControl>
		</ListItem>

		<Divider />
			<KeyTerm term={type} termFunction={handleTermChange}/>
		{/* <Button onClick={addValues(Type.value, Length.value)}></Button> */}
		<VideoPicker type={type} length={length} term={term} setUrl={setUrl}/>
		</List>
	);

	return (
		<div>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="right"
				classes={{
				paper: classes.drawerPaper,
				}}
			>
				{list}
			</Drawer>
			<KeyTerm/>
			<Player url={url}/>
		</div>
	);
	}