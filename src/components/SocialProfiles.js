import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile =props=> { 
    
        //console.log('this.props', this.props);
        const { link, image } = props.SocialProfile;
        
        return (
            <div style={{display:'inline-block',width:250,height:5,margin:40}}>    
                <a href={link}><img src={image} alt='social-profile'/></a>
            </div> 
        )
    
}
const SocialProfiles=()=>  (
    
        
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                            return (
                            <SocialProfile key={SOCIAL_PROFILE.id} SocialProfile={SOCIAL_PROFILE} />
                             ) ;
                        })
                    }
                </div>
            </div>
        
    )

    

export default SocialProfiles;