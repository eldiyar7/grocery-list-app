import React, { Component } from 'react';
import Item from './Item';
import Card from './common/Card';
import Filter from './Filter';

import './items.css';

class Items extends Component {
  state = {
    searchTerm: '',
  };

  updateSearchTerm = searchTerm => {
    this.setState({ searchTerm });
  };

  renderItems = item => {
    const { checkOffItem, removeItem } = this.props;
    return (
      <Item
        item={item}
        onCheckOff={checkOffItem}
        onRemoveItem={removeItem}
        key={item.id}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <div>
        <Filter
          searchTerm={this.state.searchTerm}
          onChange={this.updateSearchTerm}
        />
        {console.log(items.filter(item => item.grabbed))}
        <Card className="items-card">
          {items
            .filter(item =>
              item.name
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase()),
            )
            .map(this.renderItems)}
        </Card>
      </div>
    );
  }
}

export { Items };
