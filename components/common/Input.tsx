import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium">{label}</label>}
            <input
                className={`border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${className || ''}`}
                {...props}
            />
        </div>
    );
};
