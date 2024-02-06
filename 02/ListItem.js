import React from 'react';



class ListItem extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default ListItem;