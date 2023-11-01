import { useState } from "react";


const Form = () => {
    const [form, setForm] = useState({
        name:'',
        image:'',
        description:'',
        platforms:'',
        releaseDate:'',
        rating:'',
        genres:''
    });

    const changeHandler = (event) =>{
       const property = event.target.name;
       const value = event.target.value;

       setForm({...form,[property]:value});
       
    }

    return (
       <form action="">
           <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name' value={form.name} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">Image</label>
                <input type="file" name='image' value={form.image} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">Description</label>
                <input type="text" name='description' value={form.description} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">Platforms</label>
                <input type="text" name='platforms' value={form.platforms} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">ReleaseDate</label>
                <input type="date" name='releaseDate' value={form.releaseDate} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">Rating</label>
                <input type="text" name='rating' value={form.rating} onChange={changeHandler}/>
           </div>
           <div>
                <label htmlFor="">Genres</label>
                <input type="text" name='genres' value={form.genres} onChange={changeHandler}/>
           </div>
           

       </form>
    );
}

export default Form;