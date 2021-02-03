import React from "react";
import ListItem from "@material-ui/core/ListItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function KeyTerm(props) {
    const wcc = require("world-countries-capitals");

    let countryList = wcc.getAllCountries();
    let genre = ["Lo-Fi", "Classical music", "Jazz", "Ambient"]

    if (props.term === "Drive 4k") {
        return (
            <>
                <ListItem>
                    <FormControl>
                        <InputLabel id="Countries">Countries</InputLabel>
                        <Select
                        labelId="Countries"
                        id="Countries"
                        onChange={props.termFunction}
                        defaultValue={"canada"}
                        >
                        {countryList.map((country) => (
                            <MenuItem key={country} value={country}>{country[0].toUpperCase() + country.substring(1)}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </ListItem>
            </>
        );
    } else if (props.term === "Music") {
        return (
            <>
            <ListItem>
                        <FormControl>
                            <InputLabel id="Genre">Music Genre</InputLabel>
                            <Select
                            labelId="Genre"
                            id="Genre"
                            onChange={props.termFunction}
                            defaultValue={"Lo-Fi"}
                            >
                            {genre.map((name) => (
                                <MenuItem key={name} value={name}>{name}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </ListItem>
            </>
        )
    } else {
        return(
            <>
            
            </>
        )
    }
}
