import React from 'react'
import Image from 'next/image'

const QuotesCard = () => {
    return (
        <div className='mt-8 flex justify-between gap-7 p-6 bg-slate-100 rounded-lg'>
            <div className='bg-teal-300'>
                <Image
                    className='rounded-full'
                    src="https://i.pinimg.com/736x/14/0c/d3/140cd3e81cbb47dd9f70beddaf543ba0.jpg"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />

            </div>
            <div>
                <div className='bg-yellow-200'>
                    <p className='text-4xl'>“What are you so hesitant about? It’s your dream, isn’t it? It’s right in front of you, and you’re wavering? You gotta be reckless and take whatever you can!”</p>
                </div>
                <div className='flex mt-3 bg-green-300 text-xl'>
                    <div> <p>Tomoya Okazaki,</p></div>
                    <div className='font-semibold'>  <p>Clannad </p></div>
                </div>

            </div>
        </div>
    )
}

export default QuotesCard;