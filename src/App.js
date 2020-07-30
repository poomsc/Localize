import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import MenuTab from './Components/Menu'
import Content from './Containers/Content'
import JoinUs from './Containers/JoinUs'
import Foot from './Components/Foot'
import { BrowserRouter as Router } from 'react-router-dom'
import { withTracker } from './utils/withTracker'
import ScrollToTop from './utils/ScrollToTop'

function App() {
    return (
        <Router>
            <MenuTab />
            <ScrollToTop />
            <Switch>
                <Route path="/joinus" component={withTracker(JoinUs)} />
                <Route path="/" component={withTracker(Content)} />
            </Switch>
        </Router>
    )
}

export default App
