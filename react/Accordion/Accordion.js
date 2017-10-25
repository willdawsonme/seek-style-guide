import styles from './Accordion.less';
import Card from '../Card/Card';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ''
    };
  }

  onChange = tab => {
    if (!this.props.allowMultiple) {
      const { active } = this.state;
      active === tab ?
        this.setState({ active: null }) :
        this.setState({ active: tab });
    }
  }

  render() {
    const childWithProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        active: this.state.active,
        onChange: this.onChange,
        allowMultiple: this.props.allowMultiple,
        onClick: this.props.onClick
      });
    });

    return (
      <Card group>
        {childWithProp}
      </Card>
    );
  }
}

Accordion.displayName = 'Accordion';

Accordion.propTypes = {
  className: PropTypes.string,
  allowMultiple: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

export default Accordion;
