import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useRef} from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
const GalleryContainer = () => {
  let router = useRouter()
  const scrollRef = useRef(null);
  const imageRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    
    if (direction === 'left') {
      current.scrollLeft -= imageRef.current.clientWidth+40;
    } else {
      current.scrollLeft += imageRef.current.clientWidth+40;
    }
  };
  return (
    <section id="gallery" >
      <h2>Photo Gallery</h2>
      <div ref={scrollRef} className="gallery-container">
        <div className={`${router.pathname==="/gallery" ? "images-container-wrap" : "images-container"}`} >
        <div className="gallery-item" id="gallery1" ref={imageRef}>
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery1.jpg`}
            alt="menu"
            className="insta-images"
          />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery2">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery2.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery3">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery3.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery4">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery4.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery5">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery5.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery6">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery6.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>  
        {router.pathname==="/gallery" && <>
        <div className="gallery-item" id="gallery7">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery7.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>  
        <div className="gallery-item" id="gallery8">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery8.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery9">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery9.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery10">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery10.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>
        <div className="gallery-item" id="gallery11">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery11.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>  
        <div className="gallery-item" id="gallery12">
          <Image
            layout="fill"
            objectFit="cover"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/gallery12.jpg`}
            alt="menu"
            className="insta-images"
            />
          <BsInstagram className="insta-icon" color="#fff" fontSize={30} />
        </div>        
        </>}  
      </div>
      </div>
      {router.pathname==="/" && <><div className="arrow-link">
      <BsArrowLeftShort className="left-arrow" color="#fff" fontSize={30} onClick={() => scroll('left')}/>
      <BsArrowRightShort className="right-arrow" color="#fff" fontSize={30} onClick={() => scroll('right')}/>
      </div>
      <Link href="/gallery" className="link">
      <button className="gallery-button" id='gallery-btn'>View More Photos</button>
          </Link>
      </>}
    </section>
  );
};

export default GalleryContainer;
