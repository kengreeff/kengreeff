import { useEffect, useState } from 'react'

import NextImage from 'next/image'
import NextLink from 'next/link'
import { Flex, Heading, Link, Text } from '@chakra-ui/react'

import type { PodcastEpisode } from '@/pages/podcast'

type PodcastEpisodeTileProps = {
  episode: PodcastEpisode,
}

const PodcastEpisodeTile = (props: PodcastEpisodeTileProps) => {
  const {
    episode: {
      description,
      itunes: {
        image,
        summary,
      },
      link,
      title,
    },
  } = props

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Flex
      alignItems="center"
      borderBottom="1px dashed"
      borderColor="gray.100"
      flexDirection={['column', 'row']}
      paddingBottom="4"
      width={['100%', "70%"]}
    >
      <Flex
        aspectRatio={1}
        background="white"
        flexShrink="0"
        position="relative"
        width={['100%', 180]}
      >
        <NextImage
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'contain', objectPosition: 'center center' }}
        />
      </Flex>

      <Flex direction="column" marginLeft="4">
        <Heading noOfLines={2} size="md">
          {title}
        </Heading>

        {isClient && (
          <Text marginTop="4" dangerouslySetInnerHTML={{ __html: description }} />
        )}

        {!!link && (
          <Link as={NextLink} fontWeight="bold" href={link} isExternal marginTop="4">
            Listen on Spotify
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default PodcastEpisodeTile
