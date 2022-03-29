import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../reducers';


const configureStore=()=>{
    const enhancer = process.env.NODE_ENV === 'production'
    const store=createStore(reducer,enhancer);
   
    return store;
};
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;