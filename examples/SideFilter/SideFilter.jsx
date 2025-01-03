'use client'
import { usePathname, useRouter } from "next/navigation";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  ButtonGroup,
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
  Option,
  Grid,
  AccordionGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/joy';

const FilterField = ({ field, value }) => {
  const { type, label, name, options, gridProps = { xs: 12 }, ...rest } = field;

  switch (type) {
    case 'select':
      return (
        <Grid {...gridProps}>
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Select 
              size="sm" 
              name={name}
              defaultValue={value || ""}
              multiple={rest.multiple}
              {...rest}
            >
              {options?.map((option) => (
                <Option
                  key={option.value}
                  value={option.value.toString()}
                  onClick={(event) => rest.multiple && event.stopPropagation()}
                >
                  {option.label}
                </Option>
              ))}
            </Select>
          </FormControl>
        </Grid>
      );

    case 'date':
    case 'number':
    case 'text':
    default:
      return (
        <Grid {...gridProps}>
          <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
              size="sm"
              name={name}
              type={type}
              defaultValue={value || ""}
              {...rest}
            />
          </FormControl>
        </Grid>
      );
  }
};

export default function SideFilter({
  title = "Filter",
  fields = [],
  searchParams = {},
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value !== "" && value !== "all") {
        const field = fields.find(f => f.name === key);
        if (field?.parseValue) {
          value = field.parseValue(value);
        }
        searchParams.append(key, value.toString());
      }
    });

    const queryString = searchParams.toString();
    if (queryString) {
      router.push(`${pathname}?${queryString}`, undefined, { shallow: false });
    } else {
      router.push(pathname, undefined, { shallow: false });
    }
  };

  const handleReset = () => {
    router.push(pathname, undefined, { shallow: false });
  };

  return (
    <AccordionGroup transition="0.3s ease" variant="outlined" sx={{ borderRadius: "sm", maxWidth:"600px" }}>
      <Accordion defaultExpanded="true">
        <AccordionSummary>
          <Typography level="title-md" fontWeight="bold">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleSubmit}>
            <Box>
              <Grid container spacing={2}>
                {fields.map((field) => (
                  <FilterField
                    key={field.name}
                    field={field}
                    value={searchParams[field.name]}
                  />
                ))}
                <Grid xs={12} sx={{ pt: 0 }}>
                  <ButtonGroup spacing={1}>
                    <Button 
                      type="submit" 
                      fullWidth 
                      color="primary" 
                      variant="solid" 
                      startDecorator={<FilterAltIcon />}
                    >
                      Apply filter
                    </Button>
                    <Button 
                      fullWidth 
                      variant="outlined" 
                      color="primary" 
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Box>
          </form>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}