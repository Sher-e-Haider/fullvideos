import { Container, Grid, Grow } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getPosts} from '../redux/action/action'
import * as React from 'react';
import Posts from './posts/Posts'
import Form from './Form'
import useStyles from './styles'
import Appbar from '../appbar/Appbar'

 

const Home = () => {

  const [value, setValue] = React.useState(new Date());
 
  const classes = useStyles();
  const [info,setInfo] = useState([])
  const [formData,setFormData] = useState({
    isAgree:false,
    type:"image"
})
  const [url,setUrl] = useState({
        
    btn:"url"
 })
  const dispatch = useDispatch()
  const posts = useSelector(state=>state.alldata)
//console.log(posts,'postsss');
  useEffect(() => {
    
  
  dispatch(getPosts())
  }, [posts,dispatch])
  return (
    <Grow in>
     
    <Container>
    <Appbar/>
      <div container className= 'main'  alignItems="stretch" spacing={2}>
        <Grid item xs={12} sm={7}>
          <Posts url={url} formData={formData} info={info} />
        </Grid> 
        <Grid item xs={12} sm={4}>
          <Form url={url} info={info} setInfo={setInfo} setUrl={setUrl} formData={formData} setFormData={setFormData} />
        </Grid>
      </div>
    </Container>
  </Grow>
   
  )
}

export default Home
