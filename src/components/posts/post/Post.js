import React from 'react'
import useStyles from './style'
import ReactAudioPlayer from 'react-audio-player';
import {Card , CardActions, CardContent, CardMedia, Button ,Typography} from '@material-ui/core'
import {MdDelete, MdDeleteOutline} from 'react-icons/md'
import {useDispatch} from 'react-redux'
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import { deletePost } from '../../../redux/action/action';


const Post=({post,url,formData,info})=> {
    const classes = useStyles();
    const dispatch = useDispatch()
    //console.log(post,'tdtdtdtdt');
    return (
         <div className="cards">

       
        <Card className={classes.card} xs={12} sm={6}>      
        {
            formData?.type==='image'?(<CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          ):formData?.type==='audio'?( <div>
                <ReactAudioPlayer
            src={`/audios/${post.audio}.mp3`}
            //   autoPlay {`/audio/${post.audio}.mp3`}
            controls
            />
            </div>):formData?.type==='video'?(<div>
             {
     url.btn==='link'?( <Player
      playsInline
      poster="images/iron1.webp"
      src={`videos/${post.video}.mp4`}
      //https://media.w3.org/2010/05/sintel/trailer_hd.mp4
    />):url.btn==='url'?(<ReactPlayer control width='300px' height='220px' url = {post.video}/> ):null
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
            <Typography variant="div"  >{post.mail}</Typography>
            </div>
           
           {
                post?.dates &&<div className="mail">
                 <Typography variant="h6" className={classes.type}>{post.dates}</Typography>
            </div>
    
           }

           <div className="des p-3">
                {post.description}
           </div>
            
           <button className='del' onClick={()=>dispatch(deletePost(post._id))}><MdDelete/></button>
          
           </Card>
       </div>
    )
}

export default Post




