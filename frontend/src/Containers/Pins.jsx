import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Feed, PinDetails, Search,CreatePin } from '../Components'
const Pins = ({user}) => {
  const [searchTerm, SetSearchTerm] = useState("");
  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} SetSearchTerm={SetSearchTerm} user={user}/>
      </div>
      <div className='h-full'>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/category/:categoryId' element={<Feed/>}/>
        <Route path='/pin-detail/:pinId' element={<PinDetails user={user}/>}/>
        <Route path='/create-pin' element={<CreatePin/>}/>
        <Route path='/search' element={<Search searchTerm={searchTerm} SetSearchTerm={SetSearchTerm}/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default Pins