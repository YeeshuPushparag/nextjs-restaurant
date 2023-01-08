import React, {useEffect} from 'react'
import Head from 'next/head';
import MenuContainer from '../components/MenuContainer'
import LoadingBar from '../components/LoadingBar';
import BookTable from '../components/BookTable';

function showMenu(){
    let dish1 = document.getElementById("dish1");
    let dish2 = document.getElementById("dish2");
    let dish3 = document.getElementById("dish3");
    let dish4 = document.getElementById("dish4");
    let dish5 = document.getElementById("dish5");
    let dish6 = document.getElementById("dish6");
    var dish7 = document.getElementById("dish7");
    var dish8 = document.getElementById("dish8");
    var dish9 = document.getElementById("dish9");
    var dish10 = document.getElementById("dish10");
    var dish11= document.getElementById("dish11");
    var dish12= document.getElementById("dish12");
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
        if(document.documentElement.scrollTop + window.innerHeight -100 >= dish7.offsetTop){
            dish7.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish8.offsetTop){
            dish8.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish9.offsetTop){
            dish9.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish10.offsetTop){
            dish10.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish11.offsetTop){
            dish11.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish11.offsetTop){
            dish12.classList.add("zoom-animation")
          }
      window.addEventListener("scroll",()=>{        
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
        if(document.documentElement.scrollTop + window.innerHeight -100 >= dish7.offsetTop){
            dish7.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish8.offsetTop){
            dish8.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish9.offsetTop){
            dish9.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish10.offsetTop){
            dish10.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish11.offsetTop){
            dish11.classList.add("zoom-animation")
          }
          if(document.documentElement.scrollTop + window.innerHeight -100 >= dish12.offsetTop){
            dish12.classList.add("zoom-animation")
          }
      })
}
function Menu() {
    useEffect(() => {
        showMenu()
        },[])
  return (
    <>
     <Head>
        <title>Menu | Osteria</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <BookTable/>
      <LoadingBar/>
    <MenuContainer/>
    </>
  )
}

export default Menu