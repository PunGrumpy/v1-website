'use client'

import { Box, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const images = [
  'https://assets.pungrumpy.com/preview/desktop-home.png',
  'https://assets.pungrumpy.com/preview/desktop-about.png',
  'https://assets.pungrumpy.com/preview/mobile-home.png',
  'https://assets.pungrumpy.com/preview/mobile-about.png'
]

const useImageRotation = (images, interval) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return { currentImageIndex }
}

export const NewWorkOverlay = () => {
  const { currentImageIndex } = useImageRotation(images, 3500)

  return (
    <Box position="fixed" bottom={6} right={10} zIndex={30}>
      <Link
        href="https://www.pungrumpy.com"
        target="_blank"
        rel="noopener noreferrer"
        display="block"
        w="160px"
        h="160px"
        overflow="hidden"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="lg"
        transition="all 0.3s"
      >
        <Box position="relative" w="full" h="full" overflow="hidden">
          {images.map((src, index) => (
            <Box
              key={src}
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              transition="transform 1s ease-in-out"
              transform={`translateY(${100 * (index - currentImageIndex)}%)`}
            >
              <Image
                src={src}
                alt={`Portfolio screenshot ${index + 1}`}
                fill
                sizes="160px"
                priority={index === 0}
                style={{
                  objectFit: 'cover'
                }}
                className="transition-transform duration-500 hover:scale-110"
              />
            </Box>
          ))}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={2}
            bgGradient="linear(to-t, blackAlpha.800, transparent)"
            backdropFilter="blur(4px)"
          >
            <Text
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              color="white"
            >
              New portfolio
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  )
}
