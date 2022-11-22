import Posts from "../Posts/Posts";
import ChangeTitle from "./ChangeTitle";
import {useState, useEffect,createContext,useContext} from 'react';
import PostDetails from "../PostDetails/PostDetails";
import axios from "axios";

export const ActivePostContext= createContext();

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
    <ActivePostContext.Provider value={{activePost,setActivePost,posts}}>

    <Posts /> 
    <ChangeTitle titleChangeHandler={titleChangeHandler}/>
    <PostDetails />
  
    </ActivePostContext.Provider>
    );
        
}
 
export default Dashboard;
