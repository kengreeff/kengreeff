import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import DefaultLayout from '@/layout/DefaultLayout'

type PodcastPageProps = {
  children: React.ReactNode,
}

const PodcastPage = (props: PodcastPageProps) => {
  const { children } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Podcast`}
        description={`A podcast where we discuss business and software development.`}
      />

      <Heading as="h1">Podcast</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Text>A podcast where we discuss business and software development.</Text>

        <Text marginTop="4">Subscribe to our podcast on Spotify, Apple Podcasts, or YouTube.</Text>
      </Flex>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="md">YouTube</Heading>
        <Link href="https://www.youtube.com/@initium-clips" isExternal>
          https://www.youtube.com/@initium-clips
        </Link>
      </Flex>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="md">Spotify</Heading>
        <Link href="https://open.spotify.com/show/4Znpm8ST33x3NQ1mfRyi2H" isExternal>
          https://open.spotify.com/show/4Znpm8ST33x3NQ1mfRyi2H
        </Link>
      </Flex>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="md">Apple Podcasts</Heading>
        <Link href="https://podcasts.apple.com/us/podcast/initium-clips/id1763967908" isExternal>
          https://podcasts.apple.com/us/podcast/initium-clips/id1763967908
        </Link>
      </Flex>
    </DefaultLayout>
  )
}

export default PodcastPage
