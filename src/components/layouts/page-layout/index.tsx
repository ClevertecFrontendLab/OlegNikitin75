import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
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
    <Box flex='1'>
        <Box textAlign='center'>
            <Heading as='h2' size='2xl' mb={3}>
                {heading}
            </Heading>
            {description && (
                <Text maxW='700px' mx='auto' opacity='48%'>
                    {description}
                </Text>
            )}
            <Box maxWidth='518px' mx='auto'>
                <Box display='flex' gap={3} mt={8}>
                    <Button
                        w={12}
                        h={12}
                        p={0}
                        minWidth={12}
                        bg='transparent'
                        border='1px'
                        flex='1'
                        _hover='none'
                    >
                        <Image w={6} h={6} src='/icons/left-icon.svg' alt='icon' />
                    </Button>
                    <InputGroup rounded={4}>
                        <Input
                            placeholder='Название или ингредиент...'
                            px={4}
                            py={3}
                            h={12}
                            borderColor='black'
                            _hover='none'
                            _focusVisible={{ borderColor: 'secondary' }}
                        />
                        <InputRightElement h={12} p={0}>
                            <SearchIcon />
                        </InputRightElement>
                    </InputGroup>
                </Box>
                <Box mt={6} display='flex' gap={4}>
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
            </Box>
        </Box>
        {children}
    </Box>
);
