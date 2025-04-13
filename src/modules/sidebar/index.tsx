import { Box, Button, Hide, Image, Stack } from '@chakra-ui/react';

import { AppBadge } from '~/components/app-badge';
import { SIDEBAR_ITEMS as sidebarItems } from '~/constants/side-bar-items';

export const Sidebar = () => (
    <Box
        position={{ mobile: 'static', tablet: 'static', desktop: 'fixed', wide: 'fixed' }}
        top={24}
        right={0}
        zIndex={10}
        display='flex'
        flexDir='column'
        justifyContent='space-between'
        h={{ mobile: 'auto', tablet: 'auto', desktop: '100vh', wide: '100vh' }}
        w={{ mobile: '100%', tablet: '100%', desktop: '208px', wide: '208px' }}
    >
        <Stack
            pr={{ mobile: 0, tablet: 0, desktop: '56px', wide: '56px' }}
            display='flex'
            flexDir={{ mobile: 'row', tablet: 'row', desktop: 'column', wide: 'column' }}
            w={{ mobile: '100%', tablet: '100%', desktop: '208px', wide: '208px' }}
            gap={{ mobile: 3, tablet: 4, desktop: 6, wide: 6 }}
            alignItems='flex-end'
        >
            {sidebarItems.map((item, index) => (
                <AppBadge item={item} key={index} />
            ))}
        </Stack>
        <Hide below='tablet'>
            <Button
                _hover='none'
                position='absolute'
                bottom={24}
                right='0'
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
        </Hide>
    </Box>
);
