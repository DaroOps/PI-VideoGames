import { useDispatch } from "react-redux";
import Form from "../../components/Form/Form";
import { getGenres } from "../../redux/actions/actions";
import { useEffect } from "react";

const Post = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(getGenres());
     }, [])

     return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
               <Form />
          </div>
     );
}

export default Post;