import { useRef } from "react";

const ChangeTitle = (props) => {

    const newPostForm = useRef(); 

    const onclickChangeTitle = () => {

        const form=  newPostForm.current;
        props.titleChangeHandler(form.title.value);  

    }
   

    return (
        <div className="container">

            <form ref={newPostForm}>

                <label >title</label>
                <input type="text" name ="title"/>
               
            </form>
            <div className="button">
            <button onClick ={onclickChangeTitle}>Change Title</button>
            </div>
            


        </div>
      );
}
 
export default ChangeTitle;