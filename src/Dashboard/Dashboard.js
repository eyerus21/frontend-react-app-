import Posts from "../Posts/Posts";
import ChangeTitle from "./ChangeTitle";
import {useState, useEffect} from 'react';
import PostDetails from "../PostDetails/PostDetails";
import axios from "axios";

const Dashboard = () => {

    
    const [posts, setPosts]= useState([
    
        {id:111, title: "happiness", author:"Jhon"},
        {id:112, title:"MIU", author:"Dean"},
        {id:113, title:"enjoy life", author: "Jasmine"}
    ])


    const [activePost, setActivePost]=useState(null);

    const changeActivePost= (post) => {

        setActivePost(post);

    }
    
    const titleChangeHandler = (post) => {
       
        axios.post("http://localhost:8080/api/v1/posts",post)
                .then(response => console.log(response))
                .catch(error => console.log(error))
             

    } 

    const fetchPost=() => {
        axios.get("http://localhost:8080/api/v1/posts")
            .then(response => setPosts(response.data))
            .catch(err => console.log(err.message) )
    }

    useEffect(()=> {
        fetchPost()
    },[])

  
    return  (
    <>
    <Posts posts={posts} changeActivePost={changeActivePost}/> 
    <ChangeTitle titleChangeHandler={titleChangeHandler}/>
    <PostDetails activePost={activePost}/>
    
   

    </>
    );
        
}
 
export default Dashboard;