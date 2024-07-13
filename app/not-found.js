'use client'

import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button
          as={'a'}
          href="/"
          colorScheme={useColorModeValue('purple', 'orange')}
          size="md"
        >
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
