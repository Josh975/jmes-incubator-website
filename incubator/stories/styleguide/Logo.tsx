import React from 'react';

import logo from '../../public/images/logo.png';
import logoWhite from '../../public/images/logo-white.png';

interface ButtonProps {
    color?: 'white' | 'black';
    size?: 'sm' | 'md' | 'lg';
}

interface Image {
    src: any;
    alt: string;
}

export const Logo = ({
    color = 'black',
    size = 'sm',
    ...props
}: ButtonProps) => {
    const logoImage = {
        src: color == 'black' ? logo : logoWhite,
        alt: 'JMES world logo',
    } as Image;

    let sizeClass = 'w-24 p-4';
    switch (true) {  
        case (size == 'sm'):
            sizeClass = 'w-24 p-4';
            break;
        case (size == 'md'):
            sizeClass = 'w-36 p-6';
            break;
        case (size == 'lg'):
            sizeClass = 'w-48 p-8';
            break;
    }

    return (
        <img className={sizeClass} src={logoImage.src} alt={logoImage.alt} {...props} />
    );
};
