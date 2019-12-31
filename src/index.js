import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';

import MusicMaster from'./projects/music-master'
import App from './components/App';

import { resolve } from 'url';
import Jokes from './components/Jokes';
import Header from './components/Header';
//import './index.css';
//const history = createBrowserHistory();
//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router history={createBrowserHistory()}>
    <Switch>
            <Route exact path='/' render={() => <Header><App/></Header>}/>
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster/></Header>}/>
    </Switch>
    </Router>,
    document.getElementById('root')
    );

/*
new Promise((resolve, reject) => { 
    return reject(new Error('no bears'));
    setTimeout(() => {
        
        resolve('bears,beets,almonds');
    }, 2000);
})
    .then(quote => {
        console.log(quote);
        
    })
    .catch(error=>console.log('error',error))

*/