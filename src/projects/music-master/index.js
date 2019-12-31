import React from 'react';
import App from './components/App';
import './index.css';

//ReactDOM.render(<App/>, document.getElementById('root'))
export default App;

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