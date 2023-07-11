import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import Tab from '@mui/material/Tab';

export default function Tabsc() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} selectionFollowsFocus centered>
        <Tab icon={<BookmarksIcon />} label="Bookmark's" />
        <Tab icon={<QuestionAnswerIcon />} label="Suggestions" />
        <Tab icon={<UpcomingIcon />} label="Sooner" />
      </Tabs>
    </Box>
  );
}