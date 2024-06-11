import Markdown from 'markdown-to-jsx'
import { getSortedPostsData } from '../../../../lib/posts'
import styles from './page.module.css'

export default function Page({ params }: { params: { id: string }}) {
    let post = getSortedPostsData().find(p => p.id == params.id)
   if (post != undefined) {
        return (
            <div className={styles.container}>
                <div className={styles.blog_header}>
                    <h3>{post.title}</h3>
                    <p>{post.date}</p>
                </div>
                
                <Markdown>{post.content}</Markdown>
            </div>
        )
    }
}