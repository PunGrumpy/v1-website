'use client'

import { Box, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import Footer from '../footer'
import NavBar from '../navbar'
import VoxelGhostLoader from '../voxel-ghost-loader'

const LazyVoxelGhost = dynamic(() => import('../voxel-ghost'), {
  ssr: false,
  loading: () => <VoxelGhostLoader />
})

const MainLayout = ({ children }) => {
  const path = usePathname()

  return (
    <Box as="main" pb={8}>
      <NavBar path={path} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelGhost />
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {children}
        </AnimatePresence>
        <Footer />
      </Container>
    </Box>
  )
}

export default MainLayout
