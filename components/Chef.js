import Image from 'next/legacy/image'
import React from 'react'

const Chef = () => {
  return (
    <section id="chef">
        <div className="first-half">
            <div className="chef-image">

        <Image
          layout="fill"
          objectFit="cover"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/chef.jpg`}
          alt="menu"
          />
          </div>
        </div>
        <div className="second-half">
        <h2>Chef&apos;s Words</h2>
        <div className="about-chef">
            <div className="quote-image">
        <Image
          layout="fill"
          objectFit="contain"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/quote.png`}
          alt="menu"
          />
          </div>
          <div className="chef-words">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint culpa reiciendis, cupiditate a illum nemo, dolor veritatis beatae sit delectus et ad possimus quae nulla, neque nesciunt eaque assumenda sed.</p>
        </div>
        <div className="quote-image reverse">
        <Image
          layout="fill"
          objectFit="contain"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/quote.png`}
          alt="menu"
          />
          </div>
          </div>
          <div className="chef-name">
            <p className='name'>Louis Hansel</p>
            <p className='founder'>Chef &amp; Founder </p>
          </div>
          </div>
    </section>
  )
}

export default Chef