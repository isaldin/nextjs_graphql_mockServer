import React, { PureComponent } from 'react';

class Product extends PureComponent {
  render() {
    const { me } = this.props;
    return (
      <div>
        {me && `${me.id} ${me.email}`}
      </div>
    );
  }
}

export default Product;
