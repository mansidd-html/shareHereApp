import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'
const Navbar = ({ searchTerm, SetSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;
  return (
    <div className='flex gap-2 md:gap-5 w-full mt-7 pb-7'>
      <div className='flex justify-start items-center w-full px-2 rounded-lg bg-white border-none outline-none focus-within:shadow-sm'>
        <IoMdSearch fontSize={21} className='ml-1' />
        <input type='text' onChange={(e) => SetSearchTerm(e.target.value)} placeholder='Search' value={searchTerm} onFocus={() => navigate('/search')}
          className='p-2 w-full bg-white outline-none'
        />
      </div>
      <div className='flex gap-3'>
        <Link to={`user-profile/${user?._id}`} className='hidden md:block'>
          <img src={user?.image} alt='' className='w-10 rounded-full' />
        </Link>
        <Link to='create-pin' className='bg-black text-white rounded-full w-10 md:w-11 flex justify-center items-center'>
          <IoMdAdd/>
        </Link>
      </div>
    </div>
  )
}

export default Navbar