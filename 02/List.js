import React from 'react';

import ListItem from './ListItem';

class List extends React.Component {
    render() {
      const { items } = this.props;
      const usersList = items.map((i) => {
        return (
            <React.Fragment key={ i.id }>
                <ListItem name={ i.name }/>
            </React.Fragment>
)}

      );
      return <ul>{usersList}</ul>;
    }
  }
  
  export default List;