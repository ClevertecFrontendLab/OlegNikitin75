import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Hide,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface IPageLayoutProps {
    children: ReactNode;
    heading: string;
    description?: string;
}

export const PageLayout: FC<IPageLayoutProps> = ({ children, heading, description }) => (
    <Box flex='1' px={{ mobile: 4, tablet: 5, desktop: 0, wide: 0 }}>
        <Box
            textAlign='center'
            w='100%'
            pt={{ mobile: 20, tablet: 20, desktop: 24, wide: 24 }}
            pb={{ mobile: 0, tablet: 0, desktop: 8, wide: 8 }}
        >
            <Heading
                as='h2'
                fontSize={{ mobile: '24px', tablet: '24px', desktop: '48px', wide: '48px' }}
                mb={{
                    mobile: 0,
                    tablet: 0,
                    desktop: 3,
                    wide: 3,
                }}
            >
                {heading}
            </Heading>
            {description && (
                <Text maxW='700px' mx='auto' opacity='48%' mt={4}>
                    {description}
                </Text>
            )}
            <Box maxWidth='518px' mx='auto'>
                <Box
                    display='flex'
                    gap={3}
                    mt={{ mobile: 4, tablet: 4, desktop: 8, wide: 8 }}
                    mb={{ mobile: 8, tablet: 8, desktop: 4, wide: 4 }}
                    justifyContent='center'
                >
                    <Button
                        w={{ mobile: 8, tablet: 8, desktop: 12, wide: 12 }}
                        h={{ mobile: 8, tablet: 8, desktop: 12, wide: 12 }}
                        bg='transparent'
                        p={0}
                        overflow='hidden'
                        _hover='none'
                    >
                        <Image objectFit='cover' h='100%' src='/icons/icon-button.svg' alt='icon' />
                    </Button>

                    <InputGroup
                        rounded={4}
                        maxW={{ mobile: '100%', tablet: '404px', desktop: '458px', wide: '458px' }}
                    >
                        <Input
                            placeholder='Название или ингредиент...'
                            px={4}
                            py={3}
                            h={{ mobile: 8, tablet: 8, desktop: 12, wide: 12 }}
                            borderColor='blackAlpha.600'
                            _hover='none'
                            _focusVisible={{ borderColor: 'secondary' }}
                            _placeholder={{ color: 'darkGreen' }}
                        />
                        <InputRightElement
                            h={{ mobile: 8, tablet: 8, desktop: 12, wide: 12 }}
                            p={0}
                        >
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Hide below='tablet'>
                    <Box display='flex' gap={4}>
                        <FormControl display='flex' alignItems='center' flex='1'>
                            <FormLabel htmlFor='email-alerts' mb='0' fontWeight={500}>
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch
                                id='email-alerts'
                                sx={{
                                    'span.chakra-switch__track[data-checked]': {
                                        backgroundColor: 'secondary',
                                    },
                                }}
                            />
                        </FormControl>
                        <Select
                            w='234px'
                            placeholder='Выберите из списка...'
                            _focusVisible={{ borderColor: 'secondary' }}
                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                </Hide>
            </Box>
        </Box>
        {children}
    </Box>
);
