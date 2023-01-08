import Head from 'next/head';
import React, {useEffect} from 'react'
import AboutContainer from '../components/AboutContainer'
import Chef from '../components/Chef';
import LoadingBar from '../components/LoadingBar';
import BookTable from '../components/BookTable';


function showAbout(){
    let burgerImg = document.getElementById("burger-image");
      if(document.documentElement.scrollTop + window.innerHeight -200 >= burgerImg.offsetTop){
        burgerImg.classList.add("zoom-animation")
      }
      window.addEventListener("scroll",()=>{
          if(document.documentElement.scrollTop + window.innerHeight -200 >= burgerImg.offsetTop){
            burgerImg.classList.add("zoom-animation")
          }
      })
}
function About() {
    useEffect(() => {
 showAbout()
    }, [])
    
  return (
  <>
   <Head>
        <title>About | Osteria</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`}/>
      </Head>
      <BookTable/>
      <LoadingBar/>
    <AboutContainer/>
    <Chef/>
  </>
  )
}

export default About