import React ,{ Component } from 'react';
import Projects from './Project';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png'
import Title from './Title.js';
//import Header from './Header'
class App extends Component {
  state = { displayBio: false };
  /*constructor() { 
    super();
    this.state = {displayBio:false};
    console.log('Component this', this)
    this.toggleDispalyBio = this.toggleDispalyBio.bind(this);
  }*/
  /*we can directly attach toggleDisplay bio to the this object by making 
  toggleDisplayBio an  arrow funtion*/

  toggleDispalyBio=()=> {
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {
    
    return (
      <div>
        
        <img src={profile} alt='profile' className='profile'/>
        <h1>Hello</h1>
        <Title />
        
        <p>Working on project</p>
        {this.state.displayBio ? (
      <div>
            <p>I live in bangalore</p>
            <button onClick={this.toggleDispalyBio}>showless</button>
      </div>
        ) : (
            <div>
              <button onClick={this.toggleDispalyBio}>Read more</button>
            </div>
          )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />

      </div>
    )
  }
}

export default App;