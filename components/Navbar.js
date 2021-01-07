import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

export default function NavbarComponent() {
    return(
        <div className={styles.navbar}>
            <Link href="/"><a><h1>Amazing blog posts</h1></a></Link>
        </div>
    )
}