import React from 'react'
import useStyles from './style'
import ReactAudioPlayer from 'react-audio-player';
import {Card , CardActions, CardContent, CardMedia, Button ,Typography} from '@material-ui/core'
//import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

// import DeleteIcon from '@mui/icons-material/Delete';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import moment from 'moment'
import {useDispatch} from 'react-redux'
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';


const Post=({post,url,formData,info})=> {
    const classes = useStyles();
    const dispatch = useDispatch()
    //console.log(post,'tdtdtdtdt');
    return (
        <Card className={classes.card}>      
        {
            formData?.type==='image'?(<CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          ):formData?.type==='audio'?( <div>
                <ReactAudioPlayer
            src={`audios/${post.audio}.mp3`}
            //   autoPlay
            controls
            />
            </div>):formData?.type==='video'?(<div>
             {
     url.btn==='link'?( <Player
      playsInline
      poster="images/iron1.webp"
      src={`videos/${post.video}.mp4`}
      //https://media.w3.org/2010/05/sintel/trailer_hd.mp4
    />):url.btn==='url'?(<ReactPlayer control url = {post.video}/> ):null
             }
        </div>):888888
        }           
        
   
             {/* */}
           
             {
                  post&&(<div>
                     <div className='p-3 border-bottom ' > <Typography variant="div">{post.location} <br/><Link to='/map'>click me to know your location</Link></Typography></div>
                     <div className='p-3 border-bottom'> <Typography variant="div">{post.address}</Typography></div>
             
                  </div>
                  )
             }
             
            <div className="add p-3 m-3 border-bottom">
            <Typography variant="h5">{post.mail}</Typography>
            </div>
           
           {
                post?.dates &&<div className="mail">
                 <Typography variant="h5">{post.dates}</Typography>
            </div>
    
           }

           <div className="des p-3">
                {post.description}
           </div>
            
            
       </Card>
    )
}

export default Post




