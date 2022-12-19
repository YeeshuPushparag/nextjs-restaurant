import React,{useEffect, useState} from 'react'
import Image from 'next/legacy/image'

const BookTable = () => {
  const [closeTable, setCloseTable] = useState(false)
 useEffect(() => {
   if(closeTable){
    document.getElementById("bookTable").style.transform = "translateY(-100%)"
    setCloseTable(false)
   }
  },[closeTable])
  return (
    <div id='bookTable'>
        <h2>Book Table</h2>
        <div id="cross-book" onClick={()=>{setCloseTable(true)}}>
          <Image
            layout="fill"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_IMAGESPATH}/close-icon.png`}
            alt="close"
          />
          </div>
         <div className="form-container">
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Phone Number' />
            <input type="text" placeholder='Date'/>
            <input type="text" placeholder='Time'/>
            <button type='submit' className='book-table-button'>Book Table</button>
        </div>
    </div>
  )
}

export default BookTable