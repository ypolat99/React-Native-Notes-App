import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import React from 'react';
import { Provider } from './src/context/BlogContext'; // { }  kullnadık çünkü sadece export ettik--> export default yapmadık
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  { //first argument
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  { // seconds argument
    initialRouteName: "Index",

    defaultNavigationOptions:{
      title: "Notes"
    }

  }
);

const App = createAppContainer(navigator);
export default () => 
{
  return <Provider><App /></Provider>  // app is the child for the BlockProvider
  //return <App />;
};