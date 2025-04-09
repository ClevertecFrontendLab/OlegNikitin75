import { Box, Heading, Text } from '@chakra-ui/react';

export const RecipeBody = ({ title, description }: { title: string; description: string }) => (
    <Box w='274px' h='100px' mb={6}>
        <Heading noOfLines={1} as='h4' fontSize='20px' fontWeight='medium' mb={2}>
            {title}
        </Heading>
        <Text noOfLines={3} fontSize='sm'>
            {description}
        </Text>
    </Box>
);
