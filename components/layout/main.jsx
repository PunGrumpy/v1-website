'use client'

import { Box, Container } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'

import Footer from '../footer'
import NavBar from '../navbar'
import VoxelGhostLoader from '../voxel-ghost-loader'

const LazyVoxelGhost = dynamic(() => import('../voxel-ghost'), {
  ssr: false,
  loading: () => <VoxelGhostLoader />
})

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <NavBar path={router?.asPath} />
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
