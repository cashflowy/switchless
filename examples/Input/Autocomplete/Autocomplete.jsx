// Autocomplete is a feature rich component. 
// Refer - https://mui.com/joy-ui/react-autocomplete/ to see all the features

import React from "react";
import { FormControl, FormLabel, Autocomplete } from "@mui/joy";

export default function AutocompleteMenu({ options, label, defaultValue, disabled = false, multiple = false }) {
    return (
        <FormControl>
            <FormLabel sx={{
                margin: 0
            }}>
                {label ? label : "Type to search"}</FormLabel>
            <Autocomplete
                multiple={multiple}
                name="value_name"
                options={options ? options : []}
                // getOptionLabel={(option) => option.name}      ---> By default, label is used as the OptionLabel

                defaultValue={defaultValue} // Can be an array or string
                onChange={(event, newValue) => {
                    // Give your logic for onChange
                    //For example"  setValue(newValue)
                }}
                disabled={disabled}
            />
        </FormControl>
    )
}