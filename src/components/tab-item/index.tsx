import { Link } from '@chakra-ui/react';
import { FC } from 'react';
import { NavLink as BrowserLink } from 'react-router';

import { ITabItemProps } from './types/types';

export const TabItem: FC<ITabItemProps> = ({ name, link, onClick, tabItemIndex, index }) => (
    <Link
        as={BrowserLink}
        onClick={() => onClick(index)}
        to={link}
        px={3}
        py={2}
        _hover={{ textDecoration: 'none', color: 'textGreen' }}
        pointerEvents={tabItemIndex === index ? 'none' : 'auto'}
        color={tabItemIndex === index ? 'textGreen' : 'green'}
        borderBottom={tabItemIndex === index ? '2px' : ''}
        borderBottomColor={tabItemIndex === index ? 'textGreen' : ''}
        fontWeight='medium'
        flexShrink={0}
        whiteSpace='nowrap'
    >
        {name}
    </Link>
);
