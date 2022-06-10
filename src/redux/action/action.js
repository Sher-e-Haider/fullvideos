import Axios from "axios"

const url = 'http://localhost:5000/api'
export const getPosts=()=>async(dispatch)=>{
   
    try {
        const {data} = await Axios.get(url)
        //console.log(data,'dataaa');
        dispatch({type:"FETCH",payload:data})
    } catch (error) {
       
        console.log(error.message);
    }
}

export const createPost=(newPost)=>async(dispatch)=>{
  
    try {
        const {data} = await Axios.post(url,newPost)
        
        dispatch({type:"CREATE",payload:data})
    } catch (error) {
        
       console.log(error.message);
    }
}
