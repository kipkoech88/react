import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch'

function BlogDetails() {
    const {id}=useParams()
    const {data:blogs, error,isPending}=useFetch("http://localhost:8000/blogs/"+id)
    
  return (
    <div>
        {isPending &&<div>Loading....</div>} 
        {error&&<div>{error}</div> }
        {blogs &&(<div>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author} </p>
          <p>{blogs.body} </p>
        </div>)}
    </div> 

  )
}

export default BlogDetails