import '../styles/tailwind.css';
import DataProvider from '../components/training/dataProvider';

export default ({ Component, pageProps }) => (
  <DataProvider>
    <Component {...pageProps} />
  </DataProvider>
);
