import React, { Component } from 'react';
import photos from './data/photos.json';

class Photolist extends Component {
  render() {
      console.log(photos);
    var photo = photos[0];
    return (
        <div>
        {
            photos.map(photo => {
                return (
                <img src={photo.urls.regular} />        
        )
            })
        }
    
        </div>
    );
  }
}

export default Photolist;
