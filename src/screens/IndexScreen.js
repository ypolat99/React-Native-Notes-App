import React, {useContext, useEffect}  from 'react';  //hooks add additional functionality to a function component
//useContext --> Looks at context obj and give access to that things value prompt
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) =>
{
    const {state, delete_blog_post, get_blog_posts} = useContext(Context);

    //use effect run some bit of code once when it is first rendered

    useEffect( () => {
        get_blog_posts();
        const listener = navigation.addListener("didFocus", () => {
            get_blog_posts();
        });
        return () => {
            listener.remove(); // when Index Screen is fully gone
        }; // to clean up after the listener return a function from use Effect

    }, [])


    return (
        <View>                  
            <FlatList 
                data={state}
                keyExtractor = { (blog_post) => blog_post.title }
                renderItem= { ( {item} ) => {
                   return  (
                       <TouchableOpacity  onPress= { () => navigation.navigate("Show", {id: item.id}) }>
                            <View style= {styles.row}>
                                <Text style={styles.title}> {item.title} - {item.id} </Text> 

                                <TouchableOpacity onPress = {() => delete_blog_post(item.id)} >
                                    <Feather style={styles.icon} name="trash" color="red" />
                                </TouchableOpacity>
                            </View>
                       </TouchableOpacity>

                   ) 
                } }
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) =>
{
    return {
        headerRight: () => 
        (
            <TouchableOpacity onPress = {()=> navigation.navigate("Create") }>
                <Feather  name="plus" size = {30} color="gray"/>
            </TouchableOpacity>
        ),
    };
};

styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        //marginRight: 10,
        paddingHorizontal:10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon : {
        fontSize:24
    }
});

export default IndexScreen;