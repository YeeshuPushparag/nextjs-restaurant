import Head from "next/head";
import Header from "../components/Header";
import AboutContainer from "../components/AboutContainer";
import MenuContainer from "../components/MenuContainer";
import Chef from "../components/Chef";
import Intro from "../components/Intro";
import React,{useEffect} from "react";
import GalleryContainer from "../components/GalleryContainer";
import ContactContainer from "../components/ContactContainer";
import LoadingBar from "../components/LoadingBar";
import BookTable from "../components/BookTable";

function showHome(){
  let keyFine = document.getElementById("key-fine");
  let burgerImg = document.getElementById("burger-image");
let headerBtn = document.getElementById("header-btn");
let aboutBtn = document.getElementById("about-btn");
let historyBtn = document.getElementById("history-btn");
let menuBtn = document.getElementById("menu-btn");
let galleryBtn = document.getElementById("gallery-btn");
let contactBtn = document.getElementById("contact-btn");
let dish1 = document.getElementById("dish1");
let dish2 = document.getElementById("dish2");
let dish3 = document.getElementById("dish3");
let dish4 = document.getElementById("dish4");
let dish5 = document.getElementById("dish5");
let dish6 = document.getElementById("dish6");
let gallery = document.querySelector(".gallery-container");
let end1 = false;
let end2 = false;
if(document.documentElement.scrollTop + window.innerHeight  >= keyFine.offsetTop){
  keyFine.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight  >= headerBtn.offsetTop){
  headerBtn.classList.add("fade-animation")
}
if(document.documentElement.scrollTop + window.innerHeight +100>= aboutBtn.offsetTop){
  aboutBtn.classList.add("fade-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -200 >= burgerImg.offsetTop){
  burgerImg.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight +100>= historyBtn.offsetTop){
  historyBtn.classList.add("fade-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish1.offsetTop){
  dish1.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish2.offsetTop){
  dish2.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish3.offsetTop){
  dish3.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish4.offsetTop){
  dish4.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish5.offsetTop){
  dish5.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight -100 >= dish6.offsetTop){
  dish6.classList.add("zoom-animation")
}
if(document.documentElement.scrollTop + window.innerHeight  >= menuBtn.offsetTop){
  menuBtn.classList.add("fade-animation")
}
if(document.documentElement.scrollTop + window.innerHeight  >= galleryBtn.offsetTop){
  galleryBtn.classList.add("fade-animation")
}
if(document.documentElement.scrollTop + window.innerHeight  >= contactBtn.offsetTop){
  contactBtn.classList.add("fade-animation")
}
window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop + window.innerHeight  >= keyFine.offsetTop){
    keyFine.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  >= headerBtn.offsetTop){
    headerBtn.classList.add("fade-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  +100>= aboutBtn.offsetTop){
    aboutBtn.classList.add("fade-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -200 >= burgerImg.offsetTop){
    burgerImg.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  +100>= historyBtn.offsetTop){
    historyBtn.classList.add("fade-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish1.offsetTop){
    dish1.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish2.offsetTop){
    dish2.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish3.offsetTop){
    dish3.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish4.offsetTop){
    dish4.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish5.offsetTop){
    dish5.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight -100 >= dish6.offsetTop){
    dish6.classList.add("zoom-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  >= menuBtn.offsetTop){
    menuBtn.classList.add("fade-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  >= galleryBtn.offsetTop){
    galleryBtn.classList.add("fade-animation")
  }
  if(document.documentElement.scrollTop + window.innerHeight  >= contactBtn.offsetTop){
    contactBtn.classList.add("fade-animation")
  }
  if(!end1 ){
      if(document.documentElement.scrollTop + window.innerHeight >= gallery.offsetTop){
        gallery.scrollLeft += (window.innerWidth<=325?1680:2040)
        end1 = true;
      }
  }
  if (!end2) {
      if(document.documentElement.scrollTop + window.innerHeight -(window.innerWidth<=325?400:500)>= gallery.offsetTop){
          gallery.scrollLeft -= (window.innerWidth<=325?1680:2040)
          end2 = true;
        }
    }
})
}
export default function Home() {  
  useEffect(() => {
  showHome()
  }, [])
  
  return (
    <>
      <Head>
        <title>Osteria</title>
        <meta name="description" content="Generated by create next app" />
<link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`}/>
      </Head>
      <BookTable/>
     <LoadingBar/>
      <Header />
      <AboutContainer/> 
       <MenuContainer/> 
       <Chef/> 
       <Intro/> 
      <GalleryContainer/> 
      <ContactContainer />
    </>
  );
}
