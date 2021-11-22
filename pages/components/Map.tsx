import React from 'react';
import { Box } from '@chakra-ui/react';

export const Map = () => {
  return (
    <Box>
      <iframe
        width="100%"
        height="400"
        id="comlogik_map"
        src="https://maps.google.com/maps?q=comlogik%20business%20systems%20inc.&t=&z=15&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      />
    </Box>
  );
};
