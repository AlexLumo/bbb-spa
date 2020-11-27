import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';

const NavigationEditConfig = {
    emptyLabel: 'Navigation',

    isEmpty: function(props) {
        return !props || !props.navigationRoot || props.navigationRoot.trim().length < 1;
    }
};

class Navigation extends React.Component {

    render() {
        return (
          <div>
              <p>Navigation!</p>
          </div>
        );
    }
}

export default MapTo('bbb/components/navigation')(
    Navigation,
    NavigationEditConfig
);