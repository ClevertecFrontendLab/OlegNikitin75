import { Box, Button, Flex, Heading, Hide, Image, Show, Stack } from '@chakra-ui/react';

import { BlogItem } from '~/components/blog-item';

const blogs = [
    {
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/image/user-avatar-1.png',
        author: {
            firstName: 'Елена',
            lastName: 'Высоцкая',
            nickname: '@elenapovar',
        },
    },
    {
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/image/user-avatar-2.png',
        author: {
            firstName: 'Alex',
            lastName: 'Cook',
            nickname: '@funtasticooking',
        },
    },
    {
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageUrl: '/image/user-avatar.png',
        author: {
            firstName: 'Екатерина',
            lastName: 'Контстантинопольская',
            nickname: '@bake_and_pie',
        },
    },
];

export const Blogs = () => (
    <Box
        as='section'
        bg='secondary'
        w='100%'
        p={{ mobile: 3, tablet: 3, desktop: 6, wide: 6 }}
        rounded='2xl'
    >
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mb={{ mobile: '0', tablet: '0', desktop: '16px', wide: '24px' }}
        >
            <Heading
                as='h3'
                fontSize={{ mobile: '24px', tablet: '24px', desktop: '36px', wide: '36px' }}
                mb={3}
                fontWeight='regular'
            >
                Кулинарные блоги
            </Heading>
            <Hide below='tablet'>
                <Button
                    w='176px'
                    bg='transparent'
                    _hover='none'
                    fontSize='lg'
                    fontWeight='semibold'
                    display='flex'
                    gap={3}
                    alignItems='center'
                >
                    Все авторы
                    <Image src='/icons/arrow-right-icon.svg' alt='' width={4} height={4} />
                </Button>
            </Hide>
        </Box>
        <Stack
            display='flex'
            justifyContent='space-between'
            flexDirection={{ mobile: 'column', tablet: 'row', desktop: 'row', wide: 'row' }}
        >
            {blogs.map((blog, index) => (
                <BlogItem key={index} item={blog} />
            ))}
        </Stack>
        <Show below='tablet'>
            <Flex justifyContent='center' mt={3}>
                <Button
                    w='176px'
                    bg='transparent'
                    _hover='none'
                    fontWeight='semibold'
                    display='flex'
                    gap={3}
                    alignItems='center'
                >
                    Все авторы
                    <Image src='/icons/arrow-right-icon.svg' alt='' width={4} height={4} />
                </Button>
            </Flex>
        </Show>
    </Box>
);
