import {useState,useContext} from 'react';
import Post from '../Post/Post';
import  {ActivePostContext}  from '../Dashboard/Dashboard';

   
  
const Posts = ( props ) => {
  const {posts}  = useContext(ActivePostContext)

  const postsList= posts. map(post =>

     <Post post={post} changeActivePost={props.changeActivePost} key={post.id}/> );

    return postsList;


}
 
export default Posts;