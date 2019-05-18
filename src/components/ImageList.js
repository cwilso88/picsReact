import React from 'react';

const ImageList = props => {
    const imageList = props.images.map((image) => {
        return(
            <div>
                <img key={image.id} alt="cool" src={image.urls.small} /> 
            </div>
        ) 
      });

  return (
    <div>
      <h1>Image List</h1>

      <div className="ui container">
      {imageList}
      </div>
    </div>
  )
}

export default ImageList;




