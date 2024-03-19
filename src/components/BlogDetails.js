import { useParams, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import useFetch from './useFetch';
import axios from 'axios';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog } = useFetch('http://localhost:4000/blogs/' + id);
    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:4000/blogs/' + id)
            .then(res => {
                alert("Blog deleted");
                history.push('/');
            })
            .catch(err => {
                console.error("Error deleting blog", err);
            });
    }

    return (
        <div className="details">
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>Done by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <Button onClick={handleDelete} variant="danger" className="mt-3" type="submit">Delete Blog</Button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;