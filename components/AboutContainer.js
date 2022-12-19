import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'


const AboutContainer = () => {
  let router = useRouter()
  return (
    <div id="about" className={`${router.pathname==="/about" ? "flex-direction-column" : ""}`}>
      <div className="about-container">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae in saepe delectus sit nulla dolore ex, labore harum dignissimos rerum vel exercitationem sunt amet asperiores!</p>
        { router.pathname==="/about" && <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae obcaecati omnis maxime quas debitis quisquam dicta soluta, quae voluptas sapiente neque, magni autem dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti nihil sequi quisquam molestias odit minus consequuntur beatae error voluptas ratione distinctio odio quos debitis ab quas, ipsum aliquam optio rerum, accusamus esse dignissimos similique. Recusandae nihil dolores natus adipisci voluptatum, ipsum ab at voluptatem. Voluptatum ad dicta obcaecati veritatis, consequatur sunt minus neque. Nisi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae obcaecati omnis maxime quas debitis quisquam dicta soluta, quae voluptas sapiente neque, magni autem dolore!</p></>
    }
        {router.pathname==="/" && <Link href="/about" className="link">
        <button id='about-btn'>Know More</button>
          </Link>}
      </div>
      <div className="image-container">
        <div className="image" id='burger-image'>
        <Image
          layout="fill"
          objectFit="cover"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/about.png`}
          alt="menu"
        />
        </div>
      </div>
      <div className="history-container">
      <h2>Our History</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae in saepe delectus sit nulla dolore ex, labore harum dignissimos rerum vel exercitationem sunt amet asperiores!</p>
        { router.pathname==="/about" && <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae obcaecati omnis maxime quas debitis quisquam dicta soluta, quae voluptas sapiente neque, magni autem dolore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti nihil sequi quisquam molestias odit minus consequuntur beatae error voluptas ratione distinctio odio quos debitis ab quas, ipsum aliquam optio rerum, accusamus esse dignissimos similique. Recusandae nihil dolores natus adipisci voluptatum, ipsum ab at voluptatem. Voluptatum ad dicta obcaecati veritatis, consequatur sunt minus neque. Nisi!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae obcaecati omnis maxime quas debitis quisquam dicta soluta, quae voluptas sapiente neque, magni autem dolore!</p></>
    }
      {router.pathname==="/" && <Link href="/about" className="link">
        <button id='history-btn'>Know More</button>
          </Link>}
      </div>
    </div>
  )
}

export default AboutContainer