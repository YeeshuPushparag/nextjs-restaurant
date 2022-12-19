import React,{useState,useEffect} from 'react'

const Header = () => {
  const [bookTable, setBookTable] = useState(false)
  useEffect(() => {
    if(bookTable){
     document.getElementById("bookTable").style.transform = "translateY(0)"
     setBookTable(false)
    }
  }, [bookTable])
  return (
    <header className='header'>
        <div className="welcome">
        <p>Welcome to Osteria</p>
      </div>
      <div className="fine-dine">
        <p id="key-fine">The Key To Fine Dining</p>
      </div>
      <div className="intro">
        <p>Spicy jalapeno bacon ipsum dolor amet porchetta ground round rump bresaola laboris dolore ham doner kevin reprehenderit.</p>
      </div>
      <div className="call-to-action">
        <button id='header-btn' onClick={()=>{setBookTable(true)}}>Book A Table</button>
      </div>
    </header>
  )
}

export default Header