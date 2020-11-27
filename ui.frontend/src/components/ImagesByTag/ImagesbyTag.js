import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const ImagesByTagEditConfig = {
    emptyLabel: 'Images By Tag',

    isEmpty: function(props) {
        return !props || !props.imageTag || props.imageTag.length < 1;
    }
};

class ImagesByTag extends React.Component {

    renderImages() {
        if (!this.props.imageTag || this.props.imageTag.length < 1) {
            return <p>No images :(</p>;
        }

        return this.props.imageTag.map(imageTag => <p>{imageTag}</p>);
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