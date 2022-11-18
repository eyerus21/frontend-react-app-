//import './Post.css';
const Post = (props) => {

    const post = props.post;


    return ( 
       
            <div className="post-preview" onClick={() => props.changeActivePost(props.post)}>
              <h2>{post.title }</h2>
              <p>ID { post.id}</p>
              <p>Written by { post.author}</p>
            </div>
          
        );
}
 
export default Post;