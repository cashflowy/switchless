
## Usage
```jsx
import { Select,Option } from "@mui/joy"
function onBlur(){
  // alert('blurred');
  // write your onBlur logic here
  console.log('on blur');
}

... other stuff
return(
  ... other stuff
  <Select
    name={`dropdown_name`}
    // onBlur={onBlur}
    onChange={onBlur}
    placeholder='Choose animal'
    defaultValue={'dog'}
  >
    {animals?.map((a)=>(
      <Option key={a.slug} value={`${a.slug}`} >{a.name}</Option>
    ))}
  </Select>
)
```