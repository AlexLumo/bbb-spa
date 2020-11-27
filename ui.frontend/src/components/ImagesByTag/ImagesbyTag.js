import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const ImagesByTagEditConfig = {
    emptyLabel: 'Images By Tag',

    isEmpty: function(props) {
        return !props || !props.images || props.images.images < 1;
    }
};

class ImagesByTag extends React.Component {

    renderImages() {
        if (!this.props.images || this.props.images.length < 1) {
            return <p>No images :(</p>;
        }

        return this.props.images.map(imageSrc => <img src={imageSrc} />);
    }

    render() {
        console.log(this.props);
        return (
          <div>
              <p>Images By Tag!</p>
              {this.renderImages()}
          </div>
        );
    }
}

export default MapTo('bbb/components/imagesbytag')(
    ImagesByTag,
    ImagesByTagEditConfig
);