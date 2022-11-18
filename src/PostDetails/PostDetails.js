
import { useState,useEffect } from "react";
import axios from "axios";
const PostDetails = (props) =>
 {
    const [post, setPost]= useState({});

    const fetchPost=() => {
        if(props.activePost != null){
            axios.get( "http://localhost:8080/api/v1/posts/"+props.activePost.id)   
                .then(response =>{
                    setPost(response.data)
                })
                .catch(err => console.log(err.message) )
        }else{

        }
        
    }

    useEffect(()=> {
            fetchPost()
    },[props.activePost])

    return ( 
        <div>
            {
                 post != null &&
                 <div className="post-preview" >
                     <h2> {post.title }</h2>
                     <p> { post.id}</p>
                     <p> { post.author}</p>
                </div>
            }
        </div>
   
  
    


    )}
 
export default PostDetails;