import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../redux/action/action'
import {TextField} from '@material-ui/core'
import "video-react/dist/video-react.css"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';





 
function Form({url,setUrl,formData,setFormData,setInfo}){
    
    const [postData,setPostData] = useState({
        location:'',address:'',description:'',dates:'',mail:'',audio:'',video:'',selectedFile:''
    })
    const [audio,setAudio] = useState([])
    
    
   
    const [value, setValue] = React.useState(new Date());
    
    useEffect(() => {
      setPostData({...postData,dates:value})
      
    },[value,setPostData])
    
    
    
    
    const dispatch = useDispatch()
    
    useEffect(() => {
      setInfo(postData.dates)
    },[postData,setInfo])
    const handleSubmit=(e)=>{
        e.preventDefault();
         
              dispatch(createPost(postData))
               audio.push(postData.audio)
           
       console.log(postData.dates,'audio');
      setPostData({location:'',address:'',description:'',dates:'',mail:'',audio:'',video:'',selectedFile:''})
       
    }

    const handleChange=(e) => {
         console.log(formData,'radioss');
         setFormData({
             ...formData,
             [e.target.name]: e.target.value
         })
    }
    
    const handleChange2 =(e)=>{
        setUrl({
            ...url,
            [e.target.name]: e.target.value
        })
    }

    
    return (
    
<form onSubmit={handleSubmit} className='mx-1 inputs' >
  <div class="mb-3">
    <label for="location" className="form-label">Location</label>
    <input type="text" placeholder='enter your location' className="form-control" value={postData.location} onChange={(e)=> setPostData({...postData,location:e.target.value})}  />
    
  </div>
  <div class="mb-3">
    <label for="date" className="form-label">address</label>
    <input type="text" placeholder='enter your address' className="form-control" value={postData.address} onChange={(e)=> setPostData({...postData,address:e.target.value})} />
    
  </div>
  {/* dates */}
  <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>

  <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" placeholder='email' className="form-control" value={postData.mail} id="exampleInputEmail1" onChange={(e)=> setPostData({...postData, mail:e.target.value})}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="des" className="form-label">description</label>
    <textarea type="text" className="form-control" rows={4} placeholder='write some description about your styles' value={postData.description} id="exampleInputEmail1" onChange={(e)=> setPostData({...postData, description:e.target.value})}/>
    
  </div>
  {/* radio */}
  <strong>Choose your file media type</strong>
  <div className="fileMedia justify-content-between radio ">
     
      <div className=' d-flex align-items-center'>
          <label htmlFor="audio">audio:</label>
          <input type="radio" checked={formData.type==="audio"} name='type' onChange={handleChange} value='audio' />
      </div>
      <div className=' d-flex align-items-center'>
          <label htmlFor="video">video:</label>
          <input type="radio" checked={formData.type==="video"} name='type' onChange={handleChange} value='video' />
      </div>
      <div className=' d-flex align-items-center'>
          <label htmlFor="image">image:</label>
          <input type="radio" checked={formData.type==="image"} onChange={handleChange} name='type' value='image' />
      </div>
  </div>
  
  {
      formData.type==='audio'? (<div className="mb-3">
    <label for="audio" className="form-label">audio</label>
    <input type="text" value={postData.audio} className="form-control" onChange={(e)=> setPostData({...postData, audio:e.target.value})} />
 </div>):formData.type==='image'?(
    <FileBase type="file"  multiple={false}  onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
 ):formData.type==='video'?(
    <div>
    <label for="video" className="form-label">video</label>
    <input type="text" value={postData.video} className="form-control" onChange={(e)=> setPostData({...postData, video:e.target.value})} />
    <div className="linkUrl">
    <div className=' d-flex align-items-center'>
          <label htmlFor="audio">url:</label>
          <input type="radio" name='btn'checked={url.btn==="url"} onChange={handleChange2} value='url' />
          <span className='mx-2'> <a href='https://www.youtube.com'>find url from youtube</a> </span>
      </div>
      <div className=' d-flex align-items-center'>
          <label htmlFor="video">link:</label>
          <input type="radio" checked={url.btn==="link"} name='btn' onChange={handleChange2} value='link' />
      </div>
    </div>
</div>

 ):null
  }
  
  {/* audios */}

 


    {/* <select name="cars" id="cars">
    {audio.map((x)=>(
         <option value="volvo">{x}</option>
    ))}
    */}
    {/* <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option> */}
  {/* </select> */}
  
{/* vodeos */}

{/* <Player
      playsInline
      poster="images/iron1.webp"
      src={`videos/${postData.video}`}
      //https://media.w3.org/2010/05/sintel/trailer_hd.mp4
    />  */}

    {/* <ReactPlayer control url = {postData.video}/> */}
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

       
    )
}

export default Form




