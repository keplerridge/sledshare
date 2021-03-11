import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Rental from './Components/Rental/Rental';
import AllRentals from './Components/AllRentals/AllRentals';
import Profile from './Components/Profile/Profile';
import Sled from './Components/Sled/Sled';

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/rental' component={Rental} />
        <Route path='/allrentals' component={AllRentals} />
        <Route path='/profile' component={Profile} />
        <Route path='/sled/:id' component={Sled} />
    </Switch>
)