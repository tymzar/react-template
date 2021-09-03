import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // materialUI theme breate for dark and light mode

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
        typography: {
          fontFamily: 'Roboto',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <Header>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="initial-scale=1.0, minimun-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <ThemeProvider theme={theme}>
        <main>
          <h1>Hello World</h1>
          <p>
            This is a simple example of a <a href="https://nextjs.org/docs">Next.js</a> application.
          </p>
        </main>
        <CssBaseline />
      </ThemeProvider>
    </Header>
  );
}

export default Home;
