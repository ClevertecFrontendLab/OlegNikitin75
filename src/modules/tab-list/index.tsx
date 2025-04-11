import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { TabItem } from '../../components/tab-item';

interface ITabListProps {
    name: string;
    link: string;
    slug: string;
    getRoute: () => string;
}

export const TabList = ({ items }: { items: ITabListProps[] }) => {
    const [tabItemIndex, setTabItemIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accordionExpandedIndexesSubMenu');
            return saved ? JSON.parse(saved) : 0;
        }
    });

    const location = useLocation();

    useEffect(() => {
        const savedIndex = localStorage.getItem('accordionExpandedIndexesSubMenu');

        if (savedIndex) {
            setTabItemIndex(JSON.parse(savedIndex));
        }
    }, [location]);

    useEffect(() => {
        localStorage.setItem('accordionExpandedIndexesSubMenu', JSON.stringify(tabItemIndex));
    }, [tabItemIndex, location]);

    const handleTabItemClick = (index: number) => {
        setTabItemIndex(index);
    };

    return (
        <Box
            w='100vw'
            overflowX='auto'
            marginLeft='calc(-50vw + 50%)'
            css={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
                '-webkit-overflow-scrolling': 'touch',
            }}
        >
            <Box
                maxW={{ mobile: '100%', tablet: '100%', desktop: '880px', wide: '100%' }}
                mx='auto'
                display='flex'
                justifyContent='center'
                borderBottomColor='blackAlpha.200'
                borderBottomWidth={1}
                mb={6}
            >
                {items.map((item, index) => (
                    <TabItem
                        key={index}
                        name={item.name}
                        link={item.link}
                        onClick={handleTabItemClick}
                        tabItemIndex={tabItemIndex}
                        index={index}
                    />
                ))}
            </Box>
        </Box>
    );
};
