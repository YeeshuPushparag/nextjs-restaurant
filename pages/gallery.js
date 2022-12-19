import React, {useEffect} from 'react'
import Head from 'next/head';
import GalleryContainer from '../components/GalleryContainer'
import LoadingBar from '../components/LoadingBar';
import BookTable from '../components/BookTable';
function showGallery(){
    let gallery1 = document.getElementById("gallery1")
    let gallery2 = document.getElementById("gallery2")
    let gallery3 = document.getElementById("gallery3")
    let gallery4 = document.getElementById("gallery4")
    let gallery5 = document.getElementById("gallery5")
    let gallery6 = document.getElementById("gallery6")
    let gallery7 = document.getElementById("gallery7")
    let gallery8 = document.getElementById("gallery8")
    let gallery9 = document.getElementById("gallery9")
    let gallery10 = document.getElementById("gallery10")
    let gallery11 = document.getElementById("gallery11")
    let gallery12 = document.getElementById("gallery12")
    if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery1.offsetTop){
        gallery1.classList.add("zoom-animation")
      }
      if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery2.offsetTop){
        gallery2.classList.add("zoom-animation")
      }
      if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery3.offsetTop){
        gallery3.classList.add("zoom-animation")
      }
      if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery4.offsetTop){
        gallery4.classList.add("zoom-animation")
      }
      if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery5.offsetTop){
        gallery5.classList.add("zoom-animation")
      }
      if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery6.offsetTop){
        gallery6.classList.add("zoom-animation")
      }       
        if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery7.offsetTop){
            gallery7.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery8.offsetTop){
            gallery8.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery9.offsetTop){
            gallery9.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery10.offsetTop){
            gallery10.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery11.offsetTop){
            gallery11.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery11.offsetTop){
            gallery12.classList.add("zoom-animation")
          }
          window.addEventListener("scroll",()=>{        
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery1.offsetTop){
              gallery1.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery2.offsetTop){
              gallery2.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery3.offsetTop){
              gallery3.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery4.offsetTop){
              gallery4.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery5.offsetTop){
              gallery5.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery6.offsetTop){
              gallery6.classList.add("zoom-animation")
            }
            if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery7.offsetTop){
                gallery7.classList.add("zoom-animation")
              }
              if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery8.offsetTop){
                gallery8.classList.add("zoom-animation")
              }
              if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery9.offsetTop){
                gallery9.classList.add("zoom-animation")
              }
              if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery10.offsetTop){
                gallery10.classList.add("zoom-animation")
              }
              if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery11.offsetTop){
                gallery11.classList.add("zoom-animation")
              }
              if(document.documentElement.scrollTop + window.innerHeight -280 >= gallery12.offsetTop){
                gallery12.classList.add("zoom-animation")
              }
          })
}
function Gallery() {
    useEffect(() => {
    showGallery()
    }, [])
    
  return (
    <>
     <Head>
        <title>Gallery | Osteria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`}/>
      </Head>
      <BookTable/>
      <LoadingBar/>
    <GalleryContainer/>
    </>
  )
}

export default Gallery