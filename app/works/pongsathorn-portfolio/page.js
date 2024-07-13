'use client'

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '@/components/layout/article'
import { Meta, Title, WorkImage } from '@/components/work'
import P from '@/components/paragraph'

const Work = () => (
  <Layout>
    <Container>
      <Title>
        Pongsathorn&apos;s Portfolio <Badge>2024</Badge>
      </Title>
      <P>
        This portfolio website showcases the work and skills of Pongsathorn, a
        dedicated web development freelancer. This site highlighting
        Pongsathorn&apos;s expertise, projects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pongsathorn-portfolio.netlify.app/" isExternal>
            https://pongsathorn-portfolio.netlify.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, shadcn/ui, TailwindCSS, Framer Motion</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/pongsathorn-portfolio_01.png"
        alt="Pongsathorn's Portfolio"
      />
      <WorkImage
        src="/images/works/pongsathorn-portfolio_02.png"
        alt="Pongsathorn's Portfolio"
      />
      <AspectRatio maxW="1920px" ratio={1.7} my={4}>
        <iframe
          src="https://pongsathorn-portfolio.netlify.app/"
          title="Pongsathorn's Portfolio"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
