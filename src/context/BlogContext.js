
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


const blogReducer = (state, action) =>
{
    switch (action.type)
    {
        // case "add_blog_post":
        //     return [...state, 
        //         {
        //             id: Math.floor(Math.random() * 99999),
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }];
        case "delete_blog_post":
            return state.filter( (blog_post) => blog_post.id !== action.payload );
        case "edit_blog_post":
            return state.map( (blog_post) => 
            {
                return blog_post.id === action.payload.id ? action.payload : blog_post
            } );
        case "get_blog_posts":
            return action.payload;
        default:
            return state;
    }
};



const get_blog_posts = dispatch =>
{
    return async () =>
    {
       const response =  await jsonServer.get("/blogposts");
       //response.data ===[{},{},{}] every {} obj is a blog post
       dispatch({type: "get_blog_posts", payload:response.data})

    };
};

const add_blog_post = (dispatch) =>{  // call with dispatch to make sure inner function gets access to the dispatch created by createDataContext
    return async (title, content, callback) => {
        await jsonServer.post("/blogposts", {title, content});

        if (callback)
        {
            callback();
        }   
    }   
};

const delete_blog_post = (dispatch) =>{
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: "delete_blog_post", payload: id })  // we run the inner function in our components
    }   
};

const edit_blog_post = (dispatch) =>{
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content});
        dispatch({type: "edit_blog_post", payload: {id, title, content} });  // we run the inner function in our components
        if (callback)
        {
            callback();
        }
    };  
};


export const { Context, Provider } = createDataContext(
    blogReducer, 
    {add_blog_post, delete_blog_post, edit_blog_post, get_blog_posts},
    []);

// {title: "TEST POST", content: "TEST CONTENT", id:1}