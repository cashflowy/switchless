import React from "react";
import { FormControl, FormLabel, Input } from "@mui/joy";

export default function InputText({name, defaultValue, label, placeholder}) {
    return (
        <FormControl>
            <FormLabel sx={{
                margin: 0
            }}>{label ? label : "Input"}</FormLabel>
            <Input
                name={name ? name : "text_input"}
                // type="date"
                defaultValue={defaultValue || ""}
                placeholder={placeholder ? placeholder : "Input"}
            />
        </FormControl>
    );
}