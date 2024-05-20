"use client";

import React, { useState } from 'react'
import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons'
const ReactionCard = () => {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(10)

  function handleLike(_event: any): void {
    setLiked(true)
    setLikeCount(prev => prev + 1)
  }

  return (
    <div className='flex bg-orange-400 align-middle gap-1'>
      <div>
        {
          liked ? <HeartFilledIcon height={30} width={30} /> : <HeartIcon height={30} width={30} onClick={handleLike} />
        }
      </div>
      <div>
        <p>{likeCount}</p>
      </div>
    </div>
  )

}

export default ReactionCard;