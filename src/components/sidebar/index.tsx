import { Box, Button, Image, Stack } from '@chakra-ui/react';

import { SIDEBAR_ITEMS as sidebarItems } from '~/constants/side-bar-items';

import { AppBadge } from '../app-badge';

export const Sidebar = () => (
    <Box
        position='fixed'
        top={24}
        right='65px'
        zIndex={10}
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        h='100vh'
    >
        <Stack display='flex' flexDir='column' gap={6} w='208px' alignItems='flex-end'>
            {sidebarItems.map((item, index) => (
                <AppBadge item={item} key={index} />
            ))}
        </Stack>
        <Button
            _hover='none'
            position='absolute'
            bottom={24}
            right='-50px'
            w='208px'
            h='208px'
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='center'
            gap={2}
            bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%);'
        >
            <Image src='/icons/icon_button.svg' alt='icon_button' />
            Записать рецепт
        </Button>
    </Box>
);
