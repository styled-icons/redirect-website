import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Styled Icons</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">💅 Styled Icons</h1>

        <p className="description">
          Open-source icon packs, packaged as React Styled Components. View the icon explorer at{' '}
          <a href="https://styled-icons.dev">styled-icons.dev</a>.
        </p>
      </main>

      <style jsx>{`
        .container {
          padding: 0 2rem;
        }

        .main {
          min-height: 100vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
          max-width: 30em;
        }

        .description a {
          color: #0070f3;
        }
      `}</style>
    </div>
  )
}
