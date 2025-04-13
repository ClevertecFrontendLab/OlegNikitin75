import { Box, Heading, Hide, Show, Text } from '@chakra-ui/react';

export const SliderRecipeBody = ({
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
        mb={{ mobile: '8px', tablet: '8px', desktop: '24px', wide: '24px' }}
    >
        <Heading
            as='h4'
            fontSize={{ mobile: '16px', tablet: '16px', desktop: '20px', wide: '20px' }}
            sx={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: { mobile: 2, tablet: 2, desktop: 1, wide: 1 },
                overflow: 'hidden',
            }}
            wordBreak={{
                mobile: 'break-word',
                tablet: 'break-word',
                desktop: 'break-all',
                wide: 'break-all',
            }}
            fontWeight='medium'
            lineHeight={{ mobile: '24px', tablet: '24px', desktop: '28px', wide: '28px' }}
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
