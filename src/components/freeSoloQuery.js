import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import _ from 'underscore';

export default function FreeSoloQuery({search}) {
let searchOption = _.flatten(search.map((option) => option),'faqQestion');
  return (
    <Stack direction={'column-reverse'}>
      <Autocomplete
        id="free-solo-demo"
        search
        getOptionLabel ={(option) => option.faqQuestion}
        options={searchOption}
        onChange={(event: any, option: any) => {
            return option? alert(option.faqAnswer):'';
        }}
        renderInput={(params) => <TextField {...params} label="Each and Every mind have different questions. We captured some of it !!" />}
      />
    </Stack>
  );
}