'use client'

import { BioSection, BioYear } from '@/components/bio'
import Layout from '@/components/layout/article'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin
} from 'react-icons/io5'

export default function Home() {
  const bioItems = [
    {
      title: 'Born and live in',
      years: '2002',
      content: 'Bangkok, Thailand'
    },
    {
      title: 'High School Education at',
      years: '2015 to 2021',
      content: 'Sriayudhya School',
      href: 'http://www.sriayudhya.ac.th/'
    },
    {
      title: 'University Education at',
      years: '2022 to Present',
      content: "King Mongkut's Institute of Technology Ladkrabang",
      href: 'https://www.kmitl.ac.th/'
    }
  ]

  const iLoveItems = [
    { title: 'Coding' },
    { title: 'Music', href: 'https://www.instagram.com/ansonseabra/' },
    { title: 'Playing Guitar' },
    { title: 'Photography', href: 'https://500px.com/p/whatthepunphoto' },
    { title: 'Custom Keyboard' },
    { title: 'DevOps' }
  ]

  const socialLinks = [
    {
      href: 'https://github.com/PunGrumpy',
      label: '@PunGrumpy',
      icon: <IoLogoGithub />
    },
    {
      href: 'https://discordapp.com/users/353899973252874260',
      label: '@Grumpy#9760',
      icon: <IoLogoDiscord />
    },
    {
      href: 'https://www.instagram.com/wtpp_p114/',
      label: '@wtpp_p114',
      icon: <IoLogoInstagram />
    },
    {
      href: 'https://www.linkedin.com/in/noppakorn-kaewsalabnil/',
      label: '@Noppakorn Kaewsalabnil',
      icon: <IoLogoLinkedin />
    }
  ]

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a student computer science based in Thailand!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Noppakorn Kaewsalabnil
            </Heading>
            <p>
              Undergraduate Student at King Mongkut&apos;s Institute of
              Technology Ladkrabang
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/profile.png"
                alt="Profile image"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            I am a passionate student of software development and DevOps,
            currently pursuing a degree in computer science at King
            Mongkut&apos;s Institute of Technology Ladkrabang.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as="a"
              href="/works"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" mb={4}>
            Bio
          </Heading>
          {bioItems.map(({ title, years, content, href }, index) => (
            <BioSection key={index}>
              <BioYear>{years}</BioYear>
              {title && <span>{title} </span>}
              {href ? (
                <Link as="a" href={href} target="_blank">
                  {content}
                </Link>
              ) : (
                <span>{content}</span>
              )}
            </BioSection>
          ))}
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love
          </Heading>
          <Box display="flex" flexWrap="wrap">
            {iLoveItems.map(({ title, href }, index) => (
              <Box key={index} textAlign="center">
                {href ? (
                  <Link as="a" href={href} target="_blank">
                    <Paragraph>{title}</Paragraph>
                  </Link>
                ) : (
                  <Paragraph>{title}</Paragraph>
                )}
              </Box>
            ))}
          </Box>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            {socialLinks.map(({ href, label, icon }) => (
              <ListItem key={href}>
                <Link href={href} isExternal>
                  <Button variant="ghost" colorScheme="teal" leftIcon={icon}>
                    {label}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
