import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Hide, Image, Show } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { getBreadcrumbsItems } from '~/lib/get-breadcrumbs-items';

import { UserCard } from '../../components/user-card';
import { Breadcrumbs, IBreadcrumbsProps } from '../breadcrumb';
import { Sidebar } from '../sidebar';

export const Header = () => {
    const location = useLocation();

    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbsProps['breadcrumbs']>([]);

    useEffect(() => {
        setBreadcrumbs(getBreadcrumbsItems(location));
    }, [location]);

    return (
        <Box
            data-test-id='header'
            as='header'
            bg='primary'
            position='fixed'
            w='100%'
            zIndex={100}
            display='flex'
            alignItems='center'
            pl={4}
            pr={{ mobile: 4, tablet: 4, desktop: '56px', wide: '56px' }}
            h={{ mobile: '64px', tablet: '64px', desktop: '80px', wide: '80px' }}
        >
            <Flex justifyContent='space-between' align='center' w='100%'>
                <Box w='256px'>
                    <Hide below='mobile'>
                        <Image src='/image/logo.svg' alt='logo' width={100} height={30} />
                    </Hide>
                    <Show below='mobile'>
                        <Image src='/image/logo-small.svg' alt='logo' width={30} height={30} />
                    </Show>
                </Box>
                <Hide below='tablet'>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <UserCard />
                </Hide>
                <Show below='tablet'>
                    <Box
                        display='flex'
                        gap={{ mobile: 0, tablet: 3, desktop: 4, wide: 4 }}
                        alignItems='center'
                    >
                        <Sidebar />
                        <Button _hover='none' bg='transparent' p={0} w={12} h={12}>
                            <HamburgerIcon />
                        </Button>
                    </Box>
                </Show>
            </Flex>
        </Box>
    );
};
