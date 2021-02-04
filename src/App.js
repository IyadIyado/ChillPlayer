import React, { useState } from "react";
import KeyTerm from "./KeyTerm"
import VideoPicker from "./VideoPicker"
import Player from "./Player"
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ListItem from "@material-ui/core/ListItem";

import "./Components/Style/App.css";

const useStyles = makeStyles((theme) => ({
	drawerPaper: {
		width: "12%",
		alignItems: "center",
		backdropFilter: "blur(8px)",
	},
	}));

	export default function App() {
		const [length, setLength] = useState("Long");
		const [type, setType] = useState("Drive 4k");
		const [term, setTerm] = useState("canada");
		const [url, setUrl] = useState("");
		const classes = useStyles();


	const handleTypeChange = (event) => {
		setType(event.target.value);
		if(event.target.value === "Neon" || event.target.value === "VisualEffects") {
		setTerm("");
		}
	};

	const handleLengthChange = (event) => {
		setLength(event.target.value);
	};

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
				<MenuItem value={"VisualEffects"}>Visual Effects</MenuItem>
				<MenuItem value={"Neon"}>Neon</MenuItem>
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
		<>
		<Drawer
			className={classes.drawer}
			variant="permanent"
			anchor="right"
			BackdropProps={{ style: { backgroundColor: "transparent" } }}
			classes={{
			paper: classes.drawerPaper,
			}}
		>
			{list}
		</Drawer>
		<KeyTerm/>
		<Player url={url}/>
		</>
	);
	}