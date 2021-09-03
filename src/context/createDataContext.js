import React, {useReducer} from 'react'; // exports plain funciton so names lowercase
// has create content function --jsx requires React


export default (reducer, actions, initial_state) => 
{
    const Context = React.createContext();
    const Provider = ({children}) => // children -->not related to context
    {
        const [state, dispatch] = useReducer(reducer, initial_state);
        // actions is obj like {addBlogPost: (dispatch) => {return () => {} }} 
        // loop through with every key take function call with dispatch and give back return function pass to value prop
        
        const boundActions = {}; // bound to copy of dispatch

        for (let key in actions)
        {
            //key = first addBlogPost
            boundActions[key] = actions[key](dispatch);  //actions[key] dispatch li comment bolmu
        }

        //state value: share state to change state in some way with all child components state:state
        return (
            <Context.Provider value = {{ state, ...boundActions }} >  
                {children}
            </Context.Provider>
        )

    }

    return { Context, Provider };
};
