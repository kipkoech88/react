import React from 'react'
import Bloglist from './Bloglist';
import useFetch from './useFetch';

function Home() {

  const {data:blogs, isPending,error}=useFetch("http://localhost:8000/blogs")

  return (
    <div className='content'>
      {isPending && <div>Loading ....</div> }
      {error && <div>{error}</div> }
      {blogs && <Bloglist blogs={blogs} title="All blogs"/>}
      {blogs &&<Bloglist blogs={blogs.filter((blog)=>blog.author==="Hosea Kipkoech")} title="Hosea's blogs"/>}
    </div>
  )
}

export default Home