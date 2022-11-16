import { useState } from "react";
import Posts from '../Posts/Posts';

const Post= () => {
    const [posts, setPosts]= useState([

        {id:111, title: "happiness", author:"Jhon"},
        {id:112, title:"MIU", author:"Dean"},
        {id:113, title:"enjoy life", author: "Jasmine"}
    ])


    // return ( 
    //     <div className="post">
    //         {/* Hello */}
    //         <Posts post={posts}/>
    //     </div>
    //  );

     return(
        <div className="post">
        <Posts posts={posts} />
    </div>
    );
}
 
export default Post;