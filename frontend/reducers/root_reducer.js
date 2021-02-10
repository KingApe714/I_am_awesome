import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionsReducer from './session_reducer';

const rootReducer = combineReducers({
    entitiesReducer, 
    sessionsReducer
})

export default rootReducer;