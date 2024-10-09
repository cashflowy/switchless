```jsx
import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";

export default function InputDate({name, defaultValue, label, placeholder}) {
    return (
        <FormControl>
            <FormLabel>{label ? label : "Date from:"}</FormLabel>
            <Input
                name={name ? name : "text_input"}
                // type="date"
                defaultValue={defaultValue || ""}
            />
        </FormControl>
    );
}

````