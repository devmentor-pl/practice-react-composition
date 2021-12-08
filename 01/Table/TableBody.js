import React from 'react';

export default class TableBody extends React.Component {
  render() {
    const { children } = this.props;
    return (<tbody>
      {children}
    </tbody>)
  }
}