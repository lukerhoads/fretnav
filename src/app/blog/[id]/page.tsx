import Markdown from 'markdown-to-jsx'
import { getSortedPostsData } from '../../../../lib/posts'
import styles from './page.module.css'
import FretboardPane from '@/components/FretboardPane/FretboardPane'
import { DEFAULT_TUNING } from '@/constants/notes'

export default function Page({ params }: { params: { id: string }}) {
    let post = getSortedPostsData().find(p => p.id == params.id)
   if (post != undefined) {
        return (
            <div className={styles.container}>
                <div className={styles.blog_header}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                </div>

                <FretboardPane tuning={DEFAULT_TUNING} patternName='Open E' />
                
                <Markdown>{post.content}</Markdown>
            </div>
        )
    }
}