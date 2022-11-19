import { useContext } from "react";
import { ActivePostContext } from "../Dashboard/Dashboard";

//import './Post.css';
const Post = (props) => {
  
    const {activePost,setActivePost}  = useContext(ActivePostContext)
    const post = props.post;


    return ( 
       
            <div className="post-preview" onClick={() => setActivePost(post)}>
              <h2>{post.title }</h2>
              <p>ID { post.id}</p>
              <p>Written by { post.author}</p>
            </div>
          
        );
}
 
export default Post;