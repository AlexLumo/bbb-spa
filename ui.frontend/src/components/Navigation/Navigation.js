import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import {Link} from "react-router-dom";

require('./Navigation.css');

const NavigationEditConfig = {
    emptyLabel: 'Navigation',

    isEmpty: function(props) {
        return !props || !props.navigationRoot || props.navigationRoot.trim().length < 1;
    }
};

class Navigation extends React.Component {
    
    childPages() {
        if (!this.props.items || this.props.items.length < 1) {
            return;
        }
        
        return this.props.items.map(link => <Link to={link.url} className="nav-link">{link.title}</Link>);
    }

    render() {
        return (
          <div>
              <p>Navigation!</p>
              <div className="navigation">
                  <Link className="nav-link" to="/content/bbb/us/en/home.html" >Back to Home Page</Link>
                  { this.childPages() }
              </div>
          </div>
        );
    }
}

export default MapTo('bbb/components/navigation')(
    Navigation,
    NavigationEditConfig
);