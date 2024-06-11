import { Post, getSortedPostsData } from '../../../lib/posts';
import styles from './page.module.css'

export default function Blog() {
    let posts = getSortedPostsData()
    console.log(posts)
    return (
        <div className={styles.container}>
            <h3>Blog</h3>
            {posts.map(({ id, title, date }) => (
                <div key={id} className={styles.post}>
                    <a href={`/blog/${id}`}><p>{title}</p><p>{date}</p></a>
                </div>
            ))}
        </div>
    )
}