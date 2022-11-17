import {useState} from 'react';
import Post from '../Post/Post';

const Posts= () => {
   
  const [posts, setPosts]= useState([

    {id:111, title: "happiness", author:"Jhon"},
    {id:112, title:"MIU", author:"Dean"},
    {id:113, title:"enjoy life", author: "Jasmine"}
]);

  const handleChange= (id)=> {

    const newPosts= [...posts];
    newPosts[id].title= 'New title';  
    newPosts[id].author="New author";
    newPosts[id].id= 200;

  setPosts(newPosts);
    
  };

  return(
    <div>
   
    { posts.map((Posts, id) =>{
      
      return (

      <div className="post"  onClick={()=>{handleChange(id);}}  key={id}>

      <Post key={id} title={Posts.title} author ={Posts.author} id={Posts.id} />
  </div>
 );

} )

}
</div>
);

}

export default Posts;