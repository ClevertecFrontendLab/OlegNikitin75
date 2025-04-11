import { Box, Heading, Hide, Show, Text } from '@chakra-ui/react';

export const RecipeBody = ({
    title,
    description,
    isRelevant,
}: {
    title: string;
    description: string;
    isRelevant?: boolean;
}) => (
    <Box
        maxW={{ mobile: '100%', tablet: '158px', desktop: '100%', wide: '322px' }}
        mb={{ mobile: '8px', tablet: '8px', desktop: '24px', wide: '24px' }}
    >
        <Heading
            as='h4'
            sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: { mobile: 2, tablet: 2, desktop: 1, wide: 1 },
                overflow: 'hidden',
            }}
            fontWeight='medium'
            mb={2}
            fontSize={{ mobile: '16px', tablet: '18px', desktop: '18px', wide: '20px' }}
        >
            {title}
        </Heading>
        {isRelevant && (
            <Show below='tablet'>
                <Text noOfLines={{ mobile: 2, tablet: 2, desktop: 3, wide: 3 }} fontSize='14px'>
                    {description}
                </Text>
            </Show>
        )}
        <Hide below='tablet'>
            <Text noOfLines={{ mobile: 2, tablet: 2, desktop: 3, wide: 3 }} fontSize='14px'>
                {description}
            </Text>
        </Hide>
    </Box>
);
