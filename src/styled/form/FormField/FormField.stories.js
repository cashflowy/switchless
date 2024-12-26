import React from 'react';
import FormField from './FormField';
import { Input, Select, Option, Grid} from '@mui/joy';

export default {
  title: 'Exported via npm/Styled/Form/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
};


// Different width variations
export const WidthVariations = {
  render: () => (
    <form>
      <Grid container width='400px' rowSpacing={2} columnSpacing={1} sx={{ pt: 1 }}>      
        <FormField label="Full Width" width="full">
          <Input placeholder="Full width input" />
        </FormField>
        <FormField label="Half Width" width="half">
          <Input placeholder="Half width input" />
        </FormField>
        <FormField label="Half Width" width="half">
          <Input placeholder="Half width input" />
        </FormField>
        <FormField label="Third Width" width="third">
          <Select placeholder="Choose a country">
            <Option value="us">United States</Option>
            <Option value="uk">United Kingdom</Option>
            <Option value="ca">Canada</Option>
          </Select>
        </FormField>
        <FormField label="Third Width" width="third" show={false}>
          <Input placeholder="Third width input" />
        </FormField>
        <FormField label="Third Width" width="third">
          <Input placeholder="Third width input" />
        </FormField>
      </Grid>
    </form>
  ),
};
