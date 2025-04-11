import { Box, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface ICategoryLabelProps {
    iconUrl: string;
    category: string;
    bgColor: string;
}

export const CategoryLabel: FC<ICategoryLabelProps> = ({ iconUrl, category, bgColor }) => (
    <Box
        as='span'
        display='inline-flex'
        alignItems='center'
        gap={{ mobile: 1, tablet: 1, desktop: 2, wide: 2 }}
        fontSize={{ mobile: '13px', tablet: '13px', desktop: '14px', wide: '14px' }}
        bg={bgColor}
        px={{ mobile: 1, tablet: 1, desktop: 2, wide: 2 }}
        py={{ mobile: 0.5, tablet: 0.5, desktop: 1, wide: 1 }}
        rounded='4px'
    >
        <Image src={iconUrl} w={4} h={4} />
        {category}
    </Box>
);
