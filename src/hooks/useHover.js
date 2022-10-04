import {useState} from 'react';

//! What onHover Function should do?
// *  Returns the State. 
// *  Return the Function to change the State.

function useHover(initialVal){
    const [state,setState] = useState(initialVal);
    const onHover = ()=>{
        setState(!state);
    }

    return [state,onHover];

}

export default useHover;