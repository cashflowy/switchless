import * as React from 'react';
import { Button,ToggleButtonGroup } from '@mui/joy';
export default function TableOrCards({viewAs,setViewAs}) {
  return (
    <ToggleButtonGroup
      value={viewAs}
      onChange={(event, newValue) => {
        // alert(newValue);
        if(newValue)
          setViewAs(newValue);
      }}
    >
      <Button value="table">Table</Button>
      <Button value="cards">Cards</Button>
    </ToggleButtonGroup>
  );
}