import './button.style.css'

interface ButtonProps {
    
}

export function Button({ children, ...props }){
    return (
        <button {...props}>{children}</button>
    )
}