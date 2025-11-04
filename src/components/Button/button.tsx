import './button.style.css'
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
    children?: ReactNode;
    icon?: ReactNode;
}

export function Button({ children, icon, ...props }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button className="custom-btn" {...props}>
            {icon ? icon : children}
        </button>
    )
}