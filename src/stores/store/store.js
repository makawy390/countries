
import { createStore } from "redux";
import reducerLoader from "../reducer/reducerLoader";

const store = createStore(reducerLoader);

export default store;