import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import _ from 'underscore';

export default function FreeSolo({search}) {
let searchOption = _.flatten(search.map((option) => option.indexList));
console.log(searchOption);
let searchOption1 = _.sortBy(searchOption.map((option) => option),'name');
  return (
    <Stack direction={'column-reverse'}>
      <Autocomplete
        id="free-solo-demo"
        search
        getOptionLabel ={(option) => option.name +" ("+option.desc+")"}
        options={searchOption1}
        onChange={(event: any, option: any) => {
            return option?.url ? window.open(option?.url,'_blank'):'';
        }}
        renderInput={(params) => <TextField {...params} label="Search for BookMark's" />}
      />
    </Stack>
  );
}