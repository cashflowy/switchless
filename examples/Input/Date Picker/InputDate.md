```jsx
import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";

export default function InputDate({name, defaultValue, label}) {
    return (
        <FormControl>
            <FormLabel>{label ? label : "Date from:"}</FormLabel>
            <Input
                name={name ? name : "text_input"}
                type="date"
                defaultValue={defaultValue || "2024-01-01"}
            />
        </FormControl>
    );
}

````