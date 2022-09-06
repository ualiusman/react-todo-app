import React from "react"
import ReactDOM from 'react-dom'

import TodoContainer from "./components/TodoContainer"
import { BrowserRouter } from "react-router-dom"

//stylesheet
import './App.css'

ReactDOM.render(
<React.StrictMode>
    <BrowserRouter>
        <TodoContainer />
    </BrowserRouter>
</React.StrictMode>
,document.getElementById('root'))