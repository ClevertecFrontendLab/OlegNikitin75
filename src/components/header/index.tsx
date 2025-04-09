import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { getBreadcrumbsItems } from '~/lib/get-breadcrumbs-items';

import { Breadcrumbs, IBreadcrumbsProps } from '../breadcrumb';
import { UserCard } from '../user-card';

export const Header = () => {
    const location = useLocation();

    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbsProps['breadcrumbs']>([]);

    useEffect(() => {
        setBreadcrumbs(getBreadcrumbsItems(location));
    }, [location]);

    return (
        <Box as='header' bg='primary' position='fixed' w='100%' zIndex={100}>
            <Container maxWidth={1920} pl={4} py={4}>
                <Flex justifyContent='space-between' align='center'>
                    <Box w='256px'>
                        <Image src='/image/logo.svg' alt='logo' width={100} height={30} />
                    </Box>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <UserCard />
                </Flex>
            </Container>
        </Box>
    );
};
