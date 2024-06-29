import { motion } from 'framer-motion'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
  const pageTitle = `${title} - Noppakorn Kaewsalabnil`

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <>
            <title>{pageTitle}</title>
            <meta name="og:title" content={pageTitle} />
            <meta name="twitter:title" content={pageTitle} />
          </>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
