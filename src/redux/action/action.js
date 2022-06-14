import Axios from "axios"
//https://gaan-sahil.herokuapp.com
const url = 'https://gaan-sahil.herokuapp.com/api'
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

export const deletePost=(id)=>async(dispatch)=>{
  
    try {
        const {data} =await Axios.delete(`${url}/delete/${id}`)
        dispatch({type:"DELETE",payload:id})
    } catch (error) {
       
       console.log(error.message);
    }
}