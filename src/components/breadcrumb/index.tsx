import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC } from 'react';
export interface IBreadcrumbsProps {
    breadcrumbs: { name: string; href: string }[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ breadcrumbs }) => (
    <Box pl={6} flex={1}>
        <Breadcrumb pl={6} flex={1} separator={<ChevronRightIcon />} spacing='8px'>
            {breadcrumbs.map((item, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                    <BreadcrumbLink
                        href={item.href}
                        opacity={index === breadcrumbs.length - 1 ? 1 : 0.64}
                    >
                        {item.name}{' '}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    </Box>
);
