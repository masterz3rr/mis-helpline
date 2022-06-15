import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Box
			sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
		>
			<Typography variant="caption">All Rights Reserved</Typography>
		</Box>
	);
};

export default Footer;
