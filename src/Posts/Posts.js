const Posts = (props) => {

    const posts = props.posts;


    return ( 
        <div className="posts">
             {
         posts.map(post => (
            <div className="post-preview" key={post.id} >
              <h2>{post.title }</h2>
              <p>ID { post.id}</p>
              <p>Written by { post.author}</p>
            </div>
          ))}


        </div>

     );
}
 
export default Posts;