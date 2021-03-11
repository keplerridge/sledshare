import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Rental from './Components/Rental/Rental';
import AllRentals from './Components/AllRentals/AllRentals';
import Profile from './Components/Profile/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/rental/:id' component={Rental} />
        <Route path='/allrentals' component={AllRentals} />
        <Route path='/profile' component={Profile} />
    </Switch>
)