import { Button, Flex, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
    className?: string;
}

export const RecipeFooter: FC<Props> = () => (
    <Flex gap={4} justifyContent='flex-end'>
        <Button border='1px' bg='transparent' _hover={{ opacity: 0.6 }} h={8}>
            <Image src='/icons/bookmarks.svg' w={3} h={3} mr={2} />
            Сохранить
        </Button>
        <Button color='white' bg='black' _hover={{ opacity: 0.6 }} h={8}>
            Готовить
        </Button>
    </Flex>
);
