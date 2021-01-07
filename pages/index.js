import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import PageDisplayComponent from '../components/PageDisplay'

export default function Index() {

    return(
        <div>
            <PageDisplayComponent />
        </div>
    )
}

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const json = await res.json()
    return json
}

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery('posts', getPosts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}