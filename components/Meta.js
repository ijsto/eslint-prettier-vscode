import Head from 'next/head';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>iNext.js | Next.js starter app by iJS.to</title>

        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4 {
          font-family: 'Spartan', sans-serif;
        }

        body {
          min-height: 100vh;
          padding-top: 64px;
          position: relative;
        }

        p {
          margin: 1em auto;
        }

        * {
          font-family: 'Space Mono', sans-serif;
          box-sizing: border-box;
          color: #776677;
          margin: 0;
          padding: 0;
          transition: 0.3s all;
        }

        a:hover {
          color: orange;
          text-decoration: none;
        }

        // The below @font-face entries take care of Google font styles.
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/raleway/v17/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVvaorCIPrcVIT9d0c8.woff)
            format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Space Mono';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Space Mono'), local('SpaceMono-Regular'),
            url(https://fonts.gstatic.com/s/spacemono/v5/i7dPIFZifjKcF5UAWdDRYEF8RXi4EwQ.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Space Mono';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local('Space Mono Bold'), local('SpaceMono-Bold'),
            url(https://fonts.gstatic.com/s/spacemono/v5/i7dMIFZifjKcF5UAWdDRaPpZUFWaHi6WZ3Q.woff2)
              format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Spartan';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/spartan/v2/l7gfbjR61M69yt8Z2QKtlAXJExs.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Spartan';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/spartan/v2/l7gfbjR61M69yt8Z2QKtlAXJExs.woff2)
            format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}</style>
    </>
  );
};

export default Meta;
