import React, { useContext} from "react";
import { StyleSheet} from 'react-native';
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


const EditScreen = ({navigation}) =>
{
    const id = navigation.getParam("id");
    const {state, edit_blog_post} = useContext(Context);
    const blog_post = state.find( (blog_post) => blog_post.id === id );



    return <BlogPostForm
    init_values = {{title: blog_post.title, content: blog_post.content}}
    onSubmit = {(title, content)=>{
        edit_blog_post(id, title, content,  () => navigation.pop());
    } }
     />
};



const style = StyleSheet.create({});

export default EditScreen;
