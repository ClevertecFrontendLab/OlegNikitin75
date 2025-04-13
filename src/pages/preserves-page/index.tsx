import { FC } from 'react';

interface Props {
    className?: string;
}

export const PreservesPage: FC<Props> = ({ className }) => <div className={className}></div>;
