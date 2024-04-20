import { AppProps } from 'next/app';
import { ShoppingCartProvider } from '../state/useShoppingCart';

import './globals.css';

// Type the component and pageProps using AppProps from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <Component {...pageProps} />
    </ShoppingCartProvider>
  );
}

export default MyApp;
