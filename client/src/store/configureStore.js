import {createStore} from 'redux';
import sampleReducer from '../reducers/sampleReducer';

export default () => {
    const store = createStore(
    sampleReducer
    );
    return store;
}