//this reducer get 2 arguments "state" (not the app state, it refers to the state the reducer is responsible for) and "action" (from our action creator), reducers are only called when actions occurs, "state = null" (es6 syntax) when the app is first booted up the user hasent selected a book yet which means "undefined" will be returned, Redux doesnt allow us to do this, therefore we default this piece of state to be NULL 
export default function(state = null, action){
    //If the type of action 
    switch(action.type){
        //has a type of 'BOOK_SELECTED'
        case 'BOOK_SELECTED':
            //return the payload (the selected book)(never alter the state here)
            return action.payload;
        }
    //If action = anything else, return current state  
    return state;
}