import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';

export default function Home() {
  let [posts,setPosts] = useState([]);

  let getPosts = async()=>{
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
    setPosts(data)

  }
  useEffect(
    ()=>{
      getPosts()
  },[])
  return (
    <div className="container">
      <div className="row">
        {posts.length>0?posts.map( (ele) => {
          return(
         <div className="col-md-4">
          <div className="posts">
            <h2>{ele.title}</h2>
          </div>
        </div>
      )
        }):<Loading />
      }
        </div>
    </div>
  )
}

