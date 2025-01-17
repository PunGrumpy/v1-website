import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { forwardRef } from 'react'
import { IoLogoGithub } from 'react-icons/io5'

import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ disabled, href, path, target, children, ...props }) => {
  const active = path === href

  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as="a"
      href={disabled ? undefined : href}
      disabled={disabled}
      _disabled={{ opacity: 0.5, pointerEvents: 'none' }}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as="a" {...props} />
))
MenuLink.displayName = 'MenuLink'

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem disabled href="http://takes.pungrumpy.com/">
            takes
          </LinkItem>
          <LinkItem href="https://cv.pungrumpy.com/">CV</LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/PunGrumpy/v1-website"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right" display="flex" justifyContent="flex-end">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} zIndex={2}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem
                  as={MenuLink}
                  disabled
                  href="https://takes.pungrumpy.com/"
                >
                  Takes
                </MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/PunGrumpy/v1-website"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
