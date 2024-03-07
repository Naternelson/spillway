import '../styles/global.css'; // Corrected path and file name
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout'; // Adjust the import path if necessary
import { useAuthChange } from '@/services/firebase/useAuthChange';
function MyApp({ Component, pageProps }: AppProps) {
    useAuthChange({onChange: (user) => console.log({user})})
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
