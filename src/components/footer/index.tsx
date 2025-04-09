import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Link as BrowserLink, useLocation } from 'react-router';

interface IFooter {}

export const Footer: FC<IFooter> = () => {
    const [active, setActive] = useState<number>(0);
    const location = useLocation();

    const handleClick = (index: number) => {
        setActive(index);
    };

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') handleClick(1);
    }, [location.pathname]);

    return (
        <Box as='footer' w='100%' bg='primary' h='84px'>
            <Flex justifyContent='space-between' alignItems='center' w='100%' h='100%'>
                <Link
                    onClick={() => handleClick(1)}
                    as={BrowserLink}
                    href='/'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    gap={2}
                    h='100%'
                    flex='1'
                    _hover={{ underline: 'none' }}
                    fontSize='12px'
                    fontWeight={active === 1 ? 'bold' : 'regular'}
                >
                    <Box
                        as='span'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w={10}
                        h={10}
                        rounded='100%'
                        bg={active === 1 ? 'black' : 'transparent'}
                        boxShadow={active === 1 ? ' 0 0 16px 8px rgba(196, 255, 97, 0.6)' : ''}
                    >
                        {active === 1 ? (
                            <Image src='/icons/home-active-icon.svg' alt='icon' />
                        ) : (
                            <Image src='/icons/home-icon.svg' alt='icon' />
                        )}
                    </Box>
                    Главная
                </Link>
                <Button
                    onClick={() => handleClick(2)}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap={2}
                    bg='transparent'
                    justifyContent='center'
                    h='100%'
                    flex='1'
                    _active={{ bg: 'none' }}
                    _hover='none'
                    fontSize='12px'
                    fontWeight={active === 2 ? 'bold' : 'regular'}
                >
                    <Box
                        as='span'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w={10}
                        h={10}
                        rounded='100%'
                        bg={active === 2 ? 'black' : 'transparent'}
                        boxShadow={active === 2 ? ' 0 0 16px 8px rgba(196, 255, 97, 0.6)' : ''}
                    >
                        {active === 2 ? (
                            <Image src='/icons/magnifier-active-icon.svg' alt='icon' />
                        ) : (
                            <Image src='/icons/magnifier-icon.svg' alt='icon' />
                        )}
                    </Box>
                    Поиск
                </Button>
                <Button
                    onClick={() => handleClick(3)}
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    gap={2}
                    bg='transparent'
                    justifyContent='center'
                    h='100%'
                    flex='1'
                    _hover='none'
                    fontSize='12px'
                    _active={{ bg: 'none' }}
                    fontWeight={active === 3 ? 'bold' : 'regular'}
                >
                    <Box
                        as='span'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w={10}
                        h={10}
                        rounded='100%'
                        bg={active === 3 ? 'black' : 'transparent'}
                        boxShadow={active === 3 ? ' 0 0 16px 8px rgba(196, 255, 97, 0.6)' : ''}
                    >
                        {active === 3 ? (
                            <Image src='/icons/edit-active-icon.svg' alt='icon' />
                        ) : (
                            <Image src='/icons/edit-icon.svg' alt='icon' />
                        )}
                    </Box>
                    Записать
                </Button>
                <Link
                    onClick={() => handleClick(4)}
                    as={BrowserLink}
                    href='/'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    gap={2}
                    h='100%'
                    flex='1'
                    _hover={{ underline: 'none' }}
                    fontSize='12px'
                    fontWeight={active === 4 ? 'bold' : 'regular'}
                >
                    <Box
                        as='span'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        w={10}
                        h={10}
                        rounded='100%'
                        boxShadow={active === 4 ? ' 0 0 16px 8px rgba(196, 255, 97, 0.6)' : ''}
                    >
                        <Image src='/image/user-avatar.png' alt='icon' />
                    </Box>
                    Мой профиль
                </Link>
            </Flex>
        </Box>
    );
};
