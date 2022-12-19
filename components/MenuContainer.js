import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'



const MenuContainer = () => {
let router = useRouter();
  return (
    <section id="menu" className={`${router.pathname==="/menu" ? "paddingBottom" : ""}`}>
        <h2>Osteria&apos;s Specials</h2>
        <div className="menu-container">
            <div className="menu-item">
                <div className="dish-image" id='dish1'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish1.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Poached Egg</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="dish-image" id='dish2'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish2.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 15</h4>
                    <h3>Nasi Uduk</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="dish-image" id='dish3'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish3.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Salmon Curry</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="dish-image" id='dish4'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish4.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Hasselback Potato</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="dish-image" id='dish5'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish5.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Salmon Sushi</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="dish-image" id='dish6'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish6.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 15</h4>
                    <h3>Shrimp with lime</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            {router.pathname==="/menu" && <>
                  <div className="menu-item">
                <div className="dish-image" id='dish7'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish7.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 15</h4>
                    <h3>Massel Soup</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
                  <div className="menu-item">
                <div className="dish-image" id='dish8'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish8.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Massaman Curry</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
                  <div className="menu-item">
                <div className="dish-image" id='dish9'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish9.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 15</h4>
                    <h3>Pieso Fillet</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
                  <div className="menu-item">
                <div className="dish-image" id='dish10'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish10.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Pumpkin Soup</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
                  <div className="menu-item">
                <div className="dish-image" id='dish11'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish11.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 15</h4>
                    <h3>Eggplant Rolls</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
                  <div className="menu-item">
                <div className="dish-image" id='dish12'>
                    <Image
          layout="fill"
          objectFit="cover"
           src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/dish12.jpg`}
          alt="menu"
        />
                </div>
                <div className="dish-info">
                    <h4>$ 20</h4>
                    <h3>Truffle jus</h3>
                    <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
                </div>
            </div>
            </>}
        </div>
        {router.pathname==="/" && <Link href="/menu" className="link">
        <button className='menu-button' id='menu-btn'>View More</button>
          </Link>}
    </section>
  )
}

export default MenuContainer