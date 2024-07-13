import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'

const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

const WorkGridItem = ({ children, id, title }) => (
  <Box w="100%" textAlign="center">
    <LinkBox as="a" href={`/works/${id}`} cursor="pointer">
      <Image
        src={`/images/works/${id}.png`}
        alt={title}
        className="grid-item-thumbnail"
        width={400}
        height={300}
        loading="lazy"
      />
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)

export { GridItem, GridItemStyle, WorkGridItem }
