import React from 'react'
import { ShuffleIcon, GitHubLogoIcon } from '@radix-ui/react-icons'

const Navbar = () => {
    return (
        <div className='flex bg-yellow-100 justify-between'>
            <div className='bg-red-200'>
                <p className='font-bold text-4xl'>Quotes from Anime</p>
            </div>
            <div className='bg-blue-200 flex justify-around gap-8'>
                <ShuffleIcon className="h-[2.8rem] w-[1.8rem]" />
                <GitHubLogoIcon href='https://github.com/YeswanthRajakumarr/quotes-from-anime' className="h-[2.8rem] w-[1.8rem]" />
            </div>
        </div>
    )
}

export default Navbar