import '../styles/globals.css';
import MatrixBackground from '../components/MatrixBackground';

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      {/* Background always behind */}
      <MatrixBackground />

      {/* Page content always above */}
      <div className="relative z-10">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
