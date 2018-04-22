import React, { PureComponent, Fragment } from 'react';

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { graphql } from 'react-relay'

import withData from '../withData'

const Me = dynamic(import('../components/Me'));

class Index extends PureComponent {
  static displayName = 'Index';

  render() {
    return (
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        <Link href="/faq">
          <a>FAQ</a>
        </Link>{' '}
        {<Me me={this.props.me} />}
      </div>
    );
  }
}

export default withData(Index, {
  query: graphql`
    query pages_Query {
      me {
        id
        email
      }
    }
  `
});
