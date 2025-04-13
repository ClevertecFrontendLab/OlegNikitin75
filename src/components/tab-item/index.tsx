import { Link } from '@chakra-ui/react';
import { FC, useEffect, useRef } from 'react';
import { NavLink as BrowserLink } from 'react-router';

import { ITabItemProps } from './types/types';

export const TabItem: FC<ITabItemProps> = ({
    isActive,
    name,
    link,
    onClick,
    tabItemIndex,
    index,
}) => {
    const tabRef = useRef(null);

    useEffect(() => {
        if (isActive && tabRef.current) {
            tabRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    }, [isActive]);

    return (
        <Link
            ref={tabRef}
            as={BrowserLink}
            onClick={() => onClick(index)}
            to={link}
            px={{ mobile: 2, tablet: 3, desktop: 3, wide: 5 }}
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
};
