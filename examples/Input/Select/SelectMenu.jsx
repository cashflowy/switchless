import React from "react";
import { FormControl, FormLabel, Select, Option } from "@mui/joy";
export default function SelectMenu({name, defaultValue, label, disabled, options}) {
    return (
        <FormControl>
            <FormLabel sx={{
                margin: 0
            }}>{label ? label : "Select"}</FormLabel>
            <Select
              name="is_paid_out"
              defaultValue={defaultValue || ""}
              disabled={disabled}
              placeholder="Select an option"
            >

                {options ? options.map((option) => (
                    <Option value={option.value}>{option.label}</Option>
                )): <>
                <Option
                sx={{
                    margin: 0,
                    paddingY: 0
                }}
                 disabled>No options found</Option>
                </> }
             
            </Select>
        </FormControl>
    );
}