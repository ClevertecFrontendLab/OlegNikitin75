import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';

import { BlogItem } from '../blog-item';

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
    <Box as='section' bg='secondary' w='100%' p={6}>
        <Box display='flex' justifyContent='space-between' alignItems='center' mb={6}>
            <Heading as='h3' size='xl' mb={3} fontWeight='regular'>
                Кулинарные блоги
            </Heading>
            <Button
                w='176px'
                h={24}
                bg='transparent'
                _hover='none'
                fontSize='lg'
                fontWeight='semibold'
                display='flex'
                gap={3}
                alignItems='center'
            >
                Все авторы
                <ArrowForwardIcon />
            </Button>
        </Box>
        <Stack display='flex' justifyContent='space-between' flexDirection='row'>
            {blogs.map((blog, index) => (
                <BlogItem key={index} item={blog} />
            ))}
        </Stack>
    </Box>
);
