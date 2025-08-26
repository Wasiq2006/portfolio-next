import '../styles/globals.css';
import MatrixBackground from '../components/MatrixBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MatrixBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
