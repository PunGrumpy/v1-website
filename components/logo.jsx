import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled(Box)`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  padding: 10px;

  > img {
    transition: 200ms ease;
  }

  &:hover > img {
    transform: rotate(-20deg);
    transition: 300ms ease-in-out;
  }
`

const Logo = () => {
  const ghostImage = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" passHref>
      <LogoBox as="a">
        <Image src={ghostImage} width={35} height={35} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontWeight="bold"
          ml={2}
          fontSize={['md', 'xl']}
          noOfLines={1}
        >
          Noppakorn Kaewsalabnil
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
