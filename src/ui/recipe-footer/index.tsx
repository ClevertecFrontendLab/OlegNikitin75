import { Button, Flex, Hide, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
    className?: string;
}

export const RecipeFooter: FC<Props> = () => (
    <Flex gap={4} justifyContent='flex-end'>
        <Button
            border='1px'
            bg='transparent'
            _hover={{ opacity: 0.6 }}
            h={8}
            px={{ mobile: 0, tablet: 0, desktop: 3, wide: 3 }}
            minW={{ mobile: 8, tablet: 8 }}
        >
            <Image
                src='/icons/bookmarks.svg'
                w={3}
                h={3}
                mr={{ mobile: 0, tablet: 0, desktop: 2, wide: 2 }}
            />
            <Hide below='tablet'>Сохранить</Hide>
        </Button>
        <Button
            color='white'
            bg='black'
            _hover={{ opacity: 0.6 }}
            h={8}
            fontSize={{ mobile: '12px', tablet: '12px', desktop: '16px', wide: '16px' }}
        >
            Готовить
        </Button>
    </Flex>
);
