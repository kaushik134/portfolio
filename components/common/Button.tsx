import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, ...props }) => {
    const baseStyle = "px-4 py-2 rounded-md transition-colors";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        outline: "border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className || ''}`}
            {...props}
        />
    );
};
