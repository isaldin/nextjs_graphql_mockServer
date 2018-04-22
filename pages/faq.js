import Link from 'next/link'

export default () =>
  <div>
    <Link href="/about">
      <a>About</a>
    </Link>{' '}
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
  </div>