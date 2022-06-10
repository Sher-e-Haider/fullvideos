import { Grid } from '@material-ui/core';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './post/Post'
import { CircularProgress } from '@material-ui/core';




function Posts({url,formData,info}) {
    const posts = useSelector((state)=>state.alldata)
    const [data,setData] = useState()
    useEffect(()=>{
          const info  =  posts.reverse()
          setData(info)
          //console.log(formData,'datatata');
    },[posts])
    //console.log(posts,data,'datatata');
    return (
       !posts.length===0 ? <h3><CircularProgress/></h3>:(
            <div className='l'  container alignItems="stretch"  spacing={3}>
             {data?.map((post)=>(
                 <div key={post._id} item xs={12} sm={6}>
                    <Post post={post} url={url} info={info} formData={formData} />
                 </div>
             ))}
            </div>
         
        )
     
    )
}

export default Posts
