import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import configureStore from "./_store";
import MyApp from './components/App'


const middleware: Array<object> = [thunk]

middleware.push(createLogger())

const store = configureStore();

render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('app')
)