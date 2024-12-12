"use client"

import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Nav = ({ locale }) => {
    const router =useRouter()
    const path=usePathname()

    console.log(path)

    const handleChange=()=>{
        const newPath=path.split('/').slice(2).join('/')

        if(locale==='es') router.push(`en/${newPath}`)
        else router.push(`es/${newPath}`)
    }

    return (
        <div>Nav {locale}
        <button onClick={handleChange}>Change</button>
        </div>
    )
}

export default Nav