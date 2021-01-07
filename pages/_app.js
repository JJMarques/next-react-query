import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import NavbarComponent from "../components/Navbar";
import '../styles/global.scss'

const queryClient  = new QueryClient()

export default function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <div className="content">
                    <NavbarComponent />
                    <div className="content-container">
                        <Component {...pageProps} />
                    </div>
                </div>
            </Hydrate>
        </QueryClientProvider>
    )
}