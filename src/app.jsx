import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Catalogue from './components/catalogue';
import Movie from './components/movie';
import './index.sass';

const App = () => (
    <div className="wrapper">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' children={<Catalogue/>} />
                <Route path='/movie/:id' children={<Movie/>} />
                <Route path="*" children={<Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
