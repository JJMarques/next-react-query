import styles from '../../styles/Posts.module.scss'

export default function PostPage({ postData, postComments }) {

    return (
        <div className={styles.PostContainer}>
            <div className={styles.post}>
                <h1>{postData.title}</h1>
                <p>{postData.body}</p>
            </div>
            <h2>Comments</h2>
            {postComments.map((comment) => (
                <div className={styles.CommentContainer} key={comment.id}>
                    <h4>{comment.name} <span>{comment.email}</span></h4>
                    <p>{comment.body}</p>
                </div>
            ))}
        </div>
    )
}

const fetchData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}


export async function getStaticPaths() {

    const postList = await fetchData('https://jsonplaceholder.typicode.com/posts/')

    let paths = []
    postList.forEach(p => {
        paths.push({ params: { id: p.id.toString() } })
    }); 

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await fetchData(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postComments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    
    return {
        props: {
            postData,
            postComments
        }
    }
}