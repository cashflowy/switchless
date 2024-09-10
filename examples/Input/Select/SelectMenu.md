```jsx
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
            >

                {options && options.map((option) => (
                    <Option value={option.value}>{option.label}</Option>
                )) }
             
            </Select>
        </FormControl>
    );
}
``` 