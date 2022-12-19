import Image from "next/legacy/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [bookTable, setBookTable] = useState(false)
 useEffect(() => {
   if(toggleMenu){
    document.getElementById("toggle").style.transform = "translateY(0)"
   } 
   else{
    document.getElementById("toggle").style.transform = "translateY(-100%)"
   }
 }, [toggleMenu])
 useEffect(() => {
  if(bookTable){
   document.getElementById("bookTable").style.transform = "translateY(0)"
   setBookTable(false)
  }
}, [bookTable])
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/" className="link">
          <h1 className="logo-heading">Osteria</h1>
        </Link>
      </div>
      <ul className="navlink">
        <li>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link href="/menu" className="link">
            Menu
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="link">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
      <div className="cta">
        <button className="cta-button" onClick={()=>{setBookTable(true)}}>Book A Table</button>
      </div>
     

    
        <div id="ham" onClick={()=>{setToggleMenu(true)}}>
        <Image
          layout="fill"
          objectFit="contain"
          src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/menu-icon.png`}
          alt="menu"
        />
      </div>
  <div className="toggle-menu" id="toggle">
        <div id="cross" onClick={()=>{setToggleMenu(false)}}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/close-icon.png`}
            alt="close"
          />
        </div>
        <ul className="navlink-toggle">
          <li>
            <Link href="/" className="link-toggle" onClick={()=>{setToggleMenu(false)}}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="link-toggle" onClick={()=>{setToggleMenu(false)}}>
              About
            </Link>
          </li>
          <li>
            <Link href="/menu" className="link-toggle" onClick={()=>{setToggleMenu(false)}}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="link-toggle" onClick={()=>{setToggleMenu(false)}}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link-toggle" onClick={()=>{setToggleMenu(false)}}>
              Contact
            </Link>
          </li>
        </ul>
        </div>
    </nav>
    )
};

export default Navbar;
