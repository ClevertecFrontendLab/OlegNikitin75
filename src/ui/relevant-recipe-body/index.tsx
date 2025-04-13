import { Box, Heading, Hide, Show, Text } from '@chakra-ui/react';

export const RelevantRecipeBody = ({
    title,
    description,
    isRelevant,
}: {
    title: string;
    description: string;
    isRelevant?: boolean;
}) => (
    <Box
        maxW={{ mobile: '304px', tablet: '208px', desktop: '250px', wide: '274px' }}
        mb={{ mobile: '24px', tablet: '8px', desktop: '24px', wide: '24px' }}
    >
        <Heading
            as='h4'
            fontSize={{ mobile: '16px', tablet: '16px', desktop: '20px', wide: '20px' }}
            sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: { mobile: 1, tablet: 1, desktop: 1, wide: 1 },
                overflow: 'hidden',
            }}
            lineHeight={{ mobile: '24px', tablet: '24px', desktop: '28px', wide: '28px' }}
            wordBreak='break-all'
            fontWeight='medium'
            mb={2}
        >
            {title}
        </Heading>
        {isRelevant && (
            <Show below='tablet'>
                <Text noOfLines={3} fontSize='14px'>
                    {description}
                </Text>
            </Show>
        )}
        <Hide below='tablet'>
            <Text noOfLines={3} fontSize='14px'>
                {description}
            </Text>
        </Hide>
    </Box>
);
