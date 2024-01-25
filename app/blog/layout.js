import styles from './layout.module.css';
import Footer from '@/app/components/footer';

export default function BlogPostLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div className={styles.container}>
      <section>
        {/* Include shared UI here e.g. a header or sidebar */

        }

        <nav></nav>


        {children}



      </section>
    </div>
  )
}
