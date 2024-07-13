'use client'

import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '@/components/layout/article'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'

const universityProjects = [
  {
    id: 'paperclip',
    title: 'Paperclip',
    description:
      'An online platform for learning UX/UI design and coding, developed as part of the Human-Computer Interaction course at the university.'
  }
]

const works = [
  {
    id: 'pongsathorn-portfolio',
    title: "Pongsathorn's Portfolio",
    description:
      'A Portfolio website for Pongsathorn, developed as part of the Web Development Freelancer work.'
  }
]

const categories = [
  {
    title: 'University Projects',
    projects: universityProjects
  },
  {
    title: 'Works',
    projects: works
  }
]

const Works = () => (
  <Layout>
    <Container>
      {categories.map((category, catIndex) => (
        <div key={catIndex}>
          <Heading as="h3" fontSize={20} mb={4}>
            {category.title}
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {category.projects.map(
              ({ id, title, thumbnail, description }, index) => (
                <Section key={id} delay={(catIndex + index) * 0.1}>
                  <WorkGridItem id={id} title={title} thumbnail={thumbnail}>
                    {description}
                  </WorkGridItem>
                </Section>
              )
            )}
          </SimpleGrid>
        </div>
      ))}
    </Container>
  </Layout>
)

export default Works
