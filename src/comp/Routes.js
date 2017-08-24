import React from 'react';
import {Route ,Switch } from 'react-router-dom';
import All from './All.js';
import Info from './Info.js';



export default(
<Switch>
                    <Route exact path="/" component={All} />
                    <Route path="/Info" component={Info} />
                </Switch>
)