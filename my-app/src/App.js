import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from './landingPage';
import GoogleMap from './googleMap';

function App(){
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/textSearch" component={GoogleMap} />
        </Switch>
    )
}

export default App; 