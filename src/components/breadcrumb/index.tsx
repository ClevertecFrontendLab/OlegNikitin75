import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';
import { FC } from 'react';
export interface IBreadcrumbsProps {
    breadcrumbs: { name: string; href: string }[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbs }) => (
    <Breadcrumb>
        {breadcrumbs.map((item, index) => (
            <Box key={index}>
                <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
            </Box>
        ))}
    </Breadcrumb>
);
