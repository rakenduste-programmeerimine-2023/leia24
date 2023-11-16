import * as React from 'react';
import Box from '@mui/system/Box';
import GetClassifiedsBySearchFromOkidoki from './GetClassifiedsBySearchFromOkidoki';

export default function BoxBasic() {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <GetClassifiedsBySearchFromOkidoki></GetClassifiedsBySearchFromOkidoki>
    </Box>
  );
}
