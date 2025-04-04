import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { getBreadcrumbsItems } from '~/lib/get-breadcrumbs-items';
import { getHomePageRoute } from '~/lib/routes';

import { Breadcrumbs, IBreadcrumbsProps } from '../breadcrumb';
import { UserCard } from '../user-card';

export const Header = () => {
    const location = useLocation();

    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumbsProps['breadcrumbs']>([]);

    useEffect(() => {
        setBreadcrumbs(getBreadcrumbsItems(location));
    }, [location]);

    return (
        <Box as='header' bg='primary'>
            <Container maxWidth={1920} pl={4} pr={14} py={4}>
                <Flex justifyContent='space-between' align='center'>
                    <Link to={getHomePageRoute()}>
                        <Image src='/image/logo.svg' alt='logo' width={100} height={30} />
                    </Link>
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                    <UserCard />
                </Flex>
            </Container>
        </Box>
    );
};
