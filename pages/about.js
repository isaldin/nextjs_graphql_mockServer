import Link from 'next/link'

export default () =>
  <div>
    <Link href="/faq">
      <a>FAQ</a>
    </Link>{' '}
    <Link href="/">
      <a>Home</a>
    </Link>{' '}
  </div>