import Head from 'next/head';
import styled from 'styled-components';

const Header = styled.h1`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Home(): JSX.Element {
  return (
    <Header>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello World</h1>
        <p>
          This is a simple example of a <a href="https://nextjs.org/docs">Next.js</a> application.
        </p>
      </main>
    </Header>
  );
}

export default Home;
