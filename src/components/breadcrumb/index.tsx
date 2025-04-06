import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC } from 'react';
export interface IBreadcrumbsProps {
    breadcrumbs: { name: string; href: string }[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbs }) => (
    <Breadcrumb separator={<ChevronRightIcon color='gray.500' />}>
        {breadcrumbs.map((item, index) => (
            <Box key={index}>
                <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Box>
        ))}
    </Breadcrumb>
);
