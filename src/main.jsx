import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from "./store/store"

const root = document.getElementById('root');

createRoot(root).render(
    <Provider store={store}>
        <App/>
    </Provider>
)
