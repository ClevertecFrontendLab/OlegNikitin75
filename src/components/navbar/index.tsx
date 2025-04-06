import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { NavLink as BrowserLink, useNavigate } from 'react-router';

import { IMenuItem } from '~/constants/types';
interface INavbarProps {
    items: IMenuItem[];
}

export const Navbar: FC<INavbarProps> = ({ items }) => {
    const [itemSubMenyActive, setItemSubMenyActive] = useState(0);
    const [expandedIndexes, setExpandedIndexes] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('accordionExpandedIndexes');
            return saved ? JSON.parse(saved) : [];
        }
        return [];
    });
    useEffect(() => {
        const savedIndexes = localStorage.getItem('accordionExpandedIndexes');

        if (savedIndexes) {
            setExpandedIndexes(JSON.parse(savedIndexes));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('accordionExpandedIndexes', JSON.stringify(expandedIndexes));
    }, [expandedIndexes]);

    const handleAccordionChange = (newIndexes: number[]) => {
        setExpandedIndexes(newIndexes);
    };
    const handleAccordionLink = (index: number) => {
        // setItemMenyActive(index);
        setItemSubMenyActive(index);
    };
    const navigate = useNavigate();

    const handleItemClick = (index: number) => {
        setItemSubMenyActive(0);
        navigate(items[index].subMenuItems[0].link);
    };

    return (
        <Box w='256px' pt={6} pb={8} display='flex' flexDir='column' justifyContent='space-between'>
            <Box as='nav' display='flex' flexDir='column' maxH='80%' overflowY='auto'>
                <Accordion allowToggle index={expandedIndexes} onChange={handleAccordionChange}>
                    {items.map((item, index) => (
                        <AccordionItem borderColor='white' key={index}>
                            <AccordionButton
                                onClick={() => handleItemClick(index)}
                                px={2}
                                py={3}
                                gap={3}
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
                                        onClick={() => handleAccordionLink(index)}
                                        as={BrowserLink}
                                        display='block'
                                        key={index}
                                        w='100%'
                                        py='6px'
                                        _hover={{ bg: 'primary' }}
                                        pl={12}
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
            </Box>
        </Box>
    );
};
