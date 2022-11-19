
import { useState,useEffect, useContext } from "react";
import axios from "axios";
import { ActivePostContext } from "../Dashboard/Dashboard";


const PostDetails = (props) =>
 {
    const [post, setPost]= useState({});
    const currentPost= useContext(ActivePostContext);
    const {activePost,setActivePost}  = useContext(ActivePostContext)
    console.log(activePost);

    const fetchPost=() => {

        if(activePost != null){
            axios.get( "http://localhost:8080/api/v1/posts/"+activePost.id)   
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



    const deletePost=() => {
        if(activePost != null){
            axios.delete( "http://localhost:8080/api/v1/posts/"+props.activePost.id)   
                .then(response =>{
                    setPost(response.data)
                })
                .catch(err => console.log(err.message) )
        }else{

        }
        
    }



    return ( 
        <div>
            {
                 post != null &&
                 <div className="post-preview" >
                     <h2> {post.title }</h2>
                     <p> { post.id}</p>
                     <p> { post.author}</p>
                     <button onClick={() =>{deletePost(post.id)}}>delete</button>
                </div>
            }
        </div>
   
  
    


    )}
 
export default PostDetails;
