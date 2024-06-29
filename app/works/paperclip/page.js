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
  <Layout title="Paperclip">
    <Container>
      <Title>
        Paperclip <Badge>2024</Badge>
      </Title>
      <P>
        A comprehensive online platform for learning UX/UI design and coding,
        developed as part of the Human-Computer Interaction course at King
        Mongkut&apos;s University of Technology Ladkrabang.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://www.figma.com/design/GJKlQNTn0wqRmOiMQjutBe/Paperclip-(UI)?t=qsZtHbpshKEyb849-1"
            isExternal
          >
            https://figma.com/paperclip <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Figma, iOS, UX/UI Design</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/paperclip_01.png" alt="Paperclip" />
      <WorkImage src="/images/works/paperclip_02.png" alt="Paperclip" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGJKlQNTn0wqRmOiMQjutBe%2FPaperclip-(UI)%3Fpage-id%3D2001%253A78%26node-id%3D2002-124%26viewport%3D188%252C193%252C0.38%26t%3DNAqMBliCgAUIPyEs-1%26scaling%3Dscale-down%26starting-point-node-id%3D2002%253A124%26show-proto-sidebar%3D1"
          title="Figma Prototype"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
