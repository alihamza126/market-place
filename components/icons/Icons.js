import React from 'react'

export const English = ({size=5}) => {
    return (
        <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
        >
            <rect width="48" height="48" fill="#F5F5F5" />
            <path fill="#D80027" d="M0 16H48V32H0V16Z" />
            <path fill="#2E52B2" d="M0 16H48L0 32V16Z" />
        </svg>
    )
}


export const Hindi = () => {
    return (
        <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
        >
            <rect width="48" height="48" fill="#FF9933" />
            <path fill="#FFFFFF" d="M0 16H48V32H0V16Z" />
            <path fill="#138808" d="M0 32H48V48H0V32Z" />
            <circle cx="24" cy="24" r="6" fill="#000080" />
        </svg>
    )
}



export const Korean = () => {
    return (
        <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            fill="none"
        >
            <rect width="48" height="48" fill="#FF3333" />
            <path fill="#FFFFFF" d="M0 16H48V32H0V16Z" />
            <path fill="#00247D" d="M0 32H48V48H0V32Z" />
        </svg>
    )
}

