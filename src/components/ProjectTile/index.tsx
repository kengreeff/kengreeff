import NextImage from 'next/image'
import NextLink from 'next/link'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'

import type { Project } from '@/pages/projects'

type ProjectTileProps = {
  project: Project,
}

const ProjectTile = (props: ProjectTileProps) => {
  const {
    project: {
      description,
      mainImage,
      projectLogo,
      projectUrl,
      title,
    },
  } = props

  return (
    <Flex
      borderBottom="1px dashed"
      borderColor="gray.100"
      flexDirection={['column', 'row']}
      marginBottom="8"
      paddingBottom="8"
      width={['100%', "70%"]}
    >
      <Flex
        background="white"
        flexShrink="0"
        height={180}
        marginBottom="8"
        position="relative"
        width={['100%', 320]}
      >
        <NextImage
          src={mainImage?.url}
          alt={title}
          fill
          style={{ objectFit: 'contain', objectPosition: 'center center' }}
        />
      </Flex>

      <Flex direction="column" marginLeft="4">
        <Heading noOfLines={2} size="md">
          {title}
        </Heading>

        <Text marginTop="4">
          {description}
        </Text>

        {!!projectUrl && (
          <Link as={NextLink} fontWeight="bold" href={projectUrl} marginTop="4">
            {projectUrl}
          </Link>
        )}
      </Flex>
      
    </Flex>
  )
}

export default ProjectTile
