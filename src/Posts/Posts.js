import {useState} from 'react';
import Post from '../Post/Post';

   
  
const Posts = ( props ) => {

  const posts= props.posts. map(post =>

     <Post post={post} changeActivePost={props.changeActivePost} key={post.id}/> );

    return posts;


}
 
export default Posts;