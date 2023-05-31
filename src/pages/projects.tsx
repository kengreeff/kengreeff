import { Flex, Heading } from '@chakra-ui/react'
import { gql } from '@apollo/client'
import { NextSeo } from 'next-seo'

import client from '@/utils/apollo-client'

import DefaultLayout from '@/layout/DefaultLayout'

import ProjectTile from '@/components/ProjectTile'

export type Project = {
  description: string,
  mainImage: {
    url: string,
  },
  projectLogo: {
    url: string,
  },
  projectUrl: string,
  sys: {
    id: string,
  },
  title: string,
}

const RECENT_PROJECTS_QUERY = gql`
  query RecentProjectsQuery {
    projectCollection(limit: 10, order: sys_publishedAt_DESC) {
      items {
        description
        title
        projectLogo {
          url
        }
        projectUrl
        mainImage {
          url
        }
        sys {
          id
        }
      }
    }
  }
`

type ProjectsPageProps = {
  projects: Project[],
}

const ProjectsPage = (props: ProjectsPageProps) => {
  const { projects } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Projects`}
        description={`A list of projects I have worked on in the past and present.`}
      />

      <Heading as="h1">
        Projects
      </Heading>

      <Flex direction="column" marginTop="8">
        {projects.map((project) => (
          <ProjectTile key={project.sys.id} project={project} />
        ))}
      </Flex>
    </DefaultLayout>
  )
}

export async function getServerSideProps(){
  const { data } = await client.query({
    query: RECENT_PROJECTS_QUERY,
  })

  return {
    props: {
      projects: data?.projectCollection?.items || [],
    },
  }
}

export default ProjectsPage
