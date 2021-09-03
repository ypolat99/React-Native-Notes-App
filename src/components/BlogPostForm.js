import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({ onSubmit, init_values }) =>
{
    const [title, setTitle] = useState(init_values.title);
    const [content, setContent] = useState(init_values.content);


    return (
        <View>        
            <Text style = {styles.label}> Enter Title: </Text>     
            <TextInput style = {styles.input} value = {title} onChangeText={(text) => setTitle(text)} />     
            <Text style = {styles.label} > Enter Content: </Text>     
            <TextInput style = {styles.input} value = {content} onChangeText={(text) => setContent(text)}/>    
            <Button
             title = "Save Blog Post" 
             onPress = {()=> onSubmit(title, content)}
            />
        </View>
    );
};

BlogPostForm.defaultProps = {
    init_values: {
        title: "",
        content: ""
    }
};


const styles = StyleSheet.create({
    input: {
        fontSize:18,
        borderWidth:1,
        borderColor:"black",
        marginBottom:10,
        padding:5,
        margin:5
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
});


export default BlogPostForm;
