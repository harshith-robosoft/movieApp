import React, { useState } from 'react'
import Instagram from "../../images/Instagram.png";
import {Link} from "react-router-dom"
import "./Header.css"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Header = () => {
  const[term,setTerm]= useState("");
  const dispatch= useDispatch();
  const submitHandler =(e)=>{
    e.preventDefault();
    if(term === "") return alert("Please enter search term!")
   dispatch(fetchAsyncMovies(term))
   dispatch(fetchAsyncShows(term))
    console.log(term);
    setTerm("")
  }
  return (
    <>
     <div className='header'>     
      <div className='logo'><Link to='/' >Movie App   </Link></div>
       <div className='search-bar'>
        <form className='search-icn' onSubmit={submitHandler}>
          <input type="text" value={term}  placeholder="Search Movies Or Shows" onChange={(e)=> setTerm(e.target.value)} />
       
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
       </div>
      <div className='user-image'>
        <img src={Instagram} alt="" />
      </div>
     </div>
    </>
  )
}

export default Header
