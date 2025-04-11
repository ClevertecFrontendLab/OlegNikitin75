import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Image,
    Text,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { NavLink as BrowserLink, useLocation, useNavigate } from 'react-router';

import { IMenuItem } from '~/types/types';
interface INavbarProps {
    items: IMenuItem[];
}

export const Navbar: FC<INavbarProps> = ({ items }) => {
    const location = useLocation();

    const [itemSubMenyActive, setItemSubMenyActive] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accordionExpandedIndexesSubMenu');
            return saved ? JSON.parse(saved) : 0;
        }
    });

    const [expandedIndexes, setExpandedIndexes] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accordionExpandedIndexes');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    useEffect(() => {
        const savedIndexes = localStorage.getItem('accordionExpandedIndexes');
        const savedIndexSubMenu = localStorage.getItem('accordionExpandedIndexesSubMenu');

        if (savedIndexes) {
            setExpandedIndexes(JSON.parse(savedIndexes));
        }
        if (savedIndexSubMenu) {
            setItemSubMenyActive(JSON.parse(savedIndexSubMenu));
        }
    }, [location]);
    useEffect(() => {
        localStorage.setItem('accordionExpandedIndexes', JSON.stringify(expandedIndexes));
        localStorage.setItem('accordionExpandedIndexesSubMenu', JSON.stringify(itemSubMenyActive));
    }, [expandedIndexes, itemSubMenyActive]);
    useEffect(() => {
        if (location.pathname === '/') {
            localStorage.setItem('accordionExpandedIndexes', JSON.stringify([-1]));
        }
    }, [location]);

    const handleAccordionChange = (newIndexes: number[]) => {
        setExpandedIndexes(newIndexes);
    };
    const handleAccordionLinkClick = (index: number) => {
        setItemSubMenyActive(index);
    };
    const navigate = useNavigate();

    const handleItemClick = (index: number) => {
        setItemSubMenyActive(0);
        navigate(items[index].subMenuItems[0].link);
    };

    return (
        <Box
            position='fixed'
            w='256px'
            h='100vh'
            pt={12}
            pb={8}
            pr={4}
            display='flex'
            flexDir='column'
            justifyContent='space-between'
            boxShadow=' 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
        >
            <Box id='navbar' as='nav' display='flex' flexDir='column' maxH='80%' overflowY='auto'>
                <Accordion allowToggle index={expandedIndexes} onChange={handleAccordionChange}>
                    {items.map((item, index) => (
                        <AccordionItem borderColor='white' key={index}>
                            <AccordionButton
                                data-test-id={index === 6 ? 'vegan-cuisine' : ''}
                                onClick={() => handleItemClick(index)}
                                px={2}
                                py={3}
                                gap={2}
                                _hover={{ bg: 'primary' }}
                                _expanded={{ bg: 'activeItem', fontWeight: 'bold' }}
                            >
                                <Image src={item.iconUrl} alt={item.title} width={6} height={6} />
                                <Box as='span' flex='1' textAlign='left' p={0}>
                                    {item.title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={0} pt={0} px={0}>
                                {item.subMenuItems.map((subItem, index) => (
                                    <Box
                                        className='group'
                                        onClick={() => handleAccordionLinkClick(index)}
                                        as={BrowserLink}
                                        display='block'
                                        key={index}
                                        w='100%'
                                        py='6px'
                                        _hover={{ bg: 'primary' }}
                                        pl={10}
                                        fontWeight={itemSubMenyActive === index ? 'bold' : 'normal'}
                                        pointerEvents={
                                            itemSubMenyActive === index ? 'none' : 'auto'
                                        }
                                        to={subItem.getRoute()}
                                    >
                                        <Box
                                            as='span'
                                            pl={3}
                                            borderLeft={itemSubMenyActive === index ? '4px' : '1px'}
                                            borderColor='secondary'
                                            _groupHover={{ borderColor: 'primary' }}
                                        />
                                        {subItem.name}
                                    </Box>
                                ))}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Box>
            <Box px={6}>
                <Text fontSize='12px' opacity='24%' pb={4} fontWeight='medium'>
                    Версия программы 03.25
                </Text>
                <Text opacity='64%'>
                    Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                </Text>
                <Button bg='transparent' px={0} _hover={{ opacity: '0.6' }}>
                    <Image
                        src='/icons/logout-icon.svg'
                        alt='logout-icon'
                        width={4}
                        height={4}
                        mr={3}
                    />
                    Выйти
                </Button>
            </Box>
        </Box>
    );
};
