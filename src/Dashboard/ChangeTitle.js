import { useRef } from "react";

const ChangeTitle = (props) => {

    const newPostForm = useRef(); 

    const onclickChangeTitle = () => {

        const form=  newPostForm.current;
        const post= {
                title: form.title.value,
                author: form.author.value,
                content: form.content.value
            
        };

        
        props.titleChangeHandler(post);  

    }
   

    return (
        <div className="container">

            <form ref={newPostForm}>
            <div>
                <label >title </label>
                <input type="text" name ="title"/>
                </div>
                <br/>  

             <div>
                 <label >content </label>
                <input type="text" name ="content"/>

                </div> 
                <br/>  
                
                <div>
                <label >author </label>
                <input type="text" name ="author"/>
                
                </div>
                <br/>  
              
               
            </form>
            <div className="button">
            <button onClick ={onclickChangeTitle}>Change Title</button>
            </div>
            


        </div>
      );
}
 
export default ChangeTitle;