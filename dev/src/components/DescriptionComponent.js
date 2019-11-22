import React, { Component } from 'react';
import T from 'prop-types';

class DescriptionComponent extends Component {
  render() {
    return (
      [
        <div key="i1">
          { this.props.title ? 'title should be displayed' : 'no title' }
          {' '}
        </div>,
        <div key="i2">
          { this.props.actions ? 'actions are available' : 'no actions' }
          {' '}
        </div>,
        <br key="b1" />,
        <div key="i3">
          { this.props.description ? this.props.description : '' }
          {' '}
        </div>,
      ]
    );
  }
}

DescriptionComponent.propTypes = {
  description: T.string,
  actions: T.bool,
  title: T.bool,
};

export default DescriptionComponent;
