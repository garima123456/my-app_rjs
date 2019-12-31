import React, { Component } from 'react';
const TITLE = [
    'a software engineer',
    'a good cook',
    'an adventure seeeker',
    'a enthusiastic learner'
];
class Title extends Component { 
    state = { titleIndex: 0,fadeIn:true };
    componentDidMount() { 
        setTimeout(() => this.setState({ fadeIn: false }), 2000);
        this.animateTitles();
    }
    componentWillUnmount() { 
        
        clearInterval(this.titleInterval)

    }
    animateTitles=()=> { 
        this.titleInterval=setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1)%TITLE.length;
            this.setState({ titleIndex, fadeIn: true });
            
        }, 4000);
        
    }
    render() { 
        const { fadeIn, titleIndex } = this.state;
        const title = TITLE[titleIndex];
        return (
            <p className={fadeIn ? 'title-fade-in':'title-fade-out'}>  I am {title}    </p>   )   
        
    }
}
export default Title;