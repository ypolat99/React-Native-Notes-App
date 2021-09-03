import React, {useContext}  from 'react'; 
import {View, Text, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({navigation}) =>
{
    id = navigation.getParam("id");
    const { state } = useContext(Context);
    const blog_post = state.find( (blog_post) => blog_post.id === id);

    
    return (
        <View>        
            <Text> {blog_post.title} </Text> 
            <Text> {blog_post.content} </Text>          

        </View>
    );
};


ShowScreen.navigationOptions = ({navigation}) =>
{
    return {
        headerRight: () =>
        (
            <TouchableOpacity onPress= {()=> navigation.navigate("Edit", {id})}>
                <EvilIcons name = "pencil"  size = {30}/>
            </TouchableOpacity>

        ),
    }
}

const styles = StyleSheet.create({});

export default ShowScreen;