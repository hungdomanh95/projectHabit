import { createStore } from 'redux';
import rootReducer from '../reducer/index'
const configureStore = () => {
return createStore(rootReducer);
}
export default configureStore;