import React from 'react';
const Artist = ({ artist }) => { 
    if (!artist) return null
    const { images, name, followers, genres } = artist;
    return (
        <div>
            <h3>{name}</h3>
            <p>{genres.join(',')}</p>
            <p>{followers.total} followers</p>
            <img
                src={images[0] && images[0].url}
                alt='artist-profile'
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: 10,
                    objectFit:'cover'
                    
                }}/>
            
        </div>
    )
}
export default Artist