import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Jackknife Pizza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/icons/icon-48x48.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#B53E39" />
        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="/icons/icon-48x48.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/icons/icon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/icons/icon-256x256.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/icons/icon-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />
      </Head>
      <style global jsx>
        {`
          @import url('https://use.typekit.net/rzz2yjw.css');

          html {
            box-sizing: border-box;
            font-family: futura-pt, sans-serif;
            font-weight: 400;
            line-height: 1.5;
            font-size: 16px;
            background: var(--color-grey);
            width: 100%;
            display: block;

            @media (min-width: 800px) {
              font-size: 20px;
            }
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
            border-width: 0;
            border-style: solid;
          }

          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }

          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre {
            margin: 0;
          }

          button {
            background-color: transparent;
            background-image: none;
          }

          button:focus {
            outline: 1px dotted;
            outline: 5px auto -webkit-focus-ring-color;
          }

          fieldset {
            margin: 0;
            padding: 0;
          }

          ol,
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          hr {
            border-top-width: 1px;
          }

          img {
            border-style: solid;
            display: block;
            margin: 0;
          }

          textarea {
            resize: vertical;
          }

          input::placeholder,
          textarea::placeholder {
            color: #a0aec0;
          }

          a,
          a:visited,
          a:hover,
          a:active {
            color: inherit;
            text-decoration: none;
          }

          button,
          [role='button'] {
            cursor: pointer;
          }

          table {
            border-collapse: collapse;
          }

          button,
          input,
          optgroup,
          select,
          textarea {
            padding: 0;
            line-height: inherit;
            color: inherit;
          }
          #__next {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          h2 {
            font-size: 2rem;
          }
          h3 {
            font-size: 1.75rem;
          }
          :root {
            --color-black: #000000;
            --color-dark: #232323;
            --color-white: #f7f7f7;
            --color-red: #b53e39;
            --color-grey: #e6e6e6;

            --ease: cubic-bezier(0.215, 0.61, 0.355, 1);
            --box-shadow: 0 1rem 1rem -0.5rem rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

export default App
