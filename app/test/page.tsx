// pages/_app.js

import App from 'next/app';

function MyApp({ Component, pageProps, serverData }) {
  // Pass the serverData as a prop to all pages
  return <Component {...pageProps} serverData={serverData} />;
}

MyApp.getInitialProps = async (appContext) => {
  // Fetch data on the server before rendering the app
  const { ctx } = appContext;
  const response = await fetch('https://api.example.com/data');
  const serverData = await response.json();

  let appProps = {};
  if (typeof App.getInitialProps === 'function') {
    appProps = await App.getInitialProps(appContext);
  }

  return { ...appProps, serverData };
};

export default MyApp;
