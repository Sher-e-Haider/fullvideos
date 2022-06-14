export const fetchData= (posts = [],action)=>{
    switch (action.type){
        case "FETCH":
            return action.payload;

        
      
        case "DELETE":
                return posts.filter((post) => post._id !== action.payload)
       
        case "CREATE":
            return [...posts,action.payload]
        
        default:
            return posts;
    }

}