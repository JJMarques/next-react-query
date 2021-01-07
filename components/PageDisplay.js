import Link from 'next/link'
import styles from '../styles/PageDisplay.module.scss'
import { useQuery } from 'react-query'

export default function PageDisplayComponent() {

    const { data, isLoading } = useQuery('posts')

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className={styles.displayPosts}>
            <h1 className={styles.h1}>All Posts</h1>
            {data.map(({id, title, body}) => (
                <div className={styles.postDisplay} key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
                <Link href={`/posts/${id}`}><a>Read more</a></Link>
                </div>
            ))}
        </div>
    )
}