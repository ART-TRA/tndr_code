import {combineReducers, createStore} from "redux";
import servicesReducer from "./servicesReducer";
import homeReducer from "./homeReducer";
import headerReducer from "./headerReducer";
import aboutReducer from "./aboutReducer";
import clientsReducer from "./clientsReducer";
import {reducer as formReducer} from 'redux-form';
import feedbackReducer from "./feedbackReducer";

let rootReducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    services: servicesReducer,
    about: aboutReducer,
    clients: clientsReducer,
    feedback: feedbackReducer,
    // contacts: contactsReducer,
    form: formReducer

});

let store = createStore(rootReducer);

export default store