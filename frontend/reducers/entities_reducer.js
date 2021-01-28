import { combineReducers } from "redux";
import notesReducer from "./notes_reducer";
import usersReducer from './users_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    notes: notesReducer
  });
  
  export default entitiesReducer;