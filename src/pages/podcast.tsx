import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import Parser from 'rss-parser'

import DefaultLayout from '@/layout/DefaultLayout'

import PodcastEpisodeTile from '@/components/PodcastEpisodeTile'

export type PodcastEpisode = {
  description: string,
  guid: string,
  itunes: {
    image: string,
  },
  link: string,
  title: string,
}

type PodcastPageProps = {
  episodes: PodcastEpisode[],
}

const PodcastPage = (props: PodcastPageProps) => {
  const { episodes } = props

  console.log(episodes)

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

      <Heading as="h2" size="md" marginTop="8">Latest Episodes</Heading>

      <Flex direction="column" gap="4" marginTop="8">
        {episodes.map((episode: any) => (
          <PodcastEpisodeTile key={episode.guid} episode={episode} />
        ))}
      </Flex>

      <Heading as="h2" size="md" marginTop="8">Subscribe</Heading>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="sm">YouTube</Heading>
        <Link href="https://www.youtube.com/@initium-clips" isExternal>
          https://www.youtube.com/@initium-clips
        </Link>
      </Flex>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="sm">Spotify</Heading>
        <Link href="https://open.spotify.com/show/4Znpm8ST33x3NQ1mfRyi2H" isExternal>
          https://open.spotify.com/show/4Znpm8ST33x3NQ1mfRyi2H
        </Link>
      </Flex>

      <Flex direction="column" marginTop="8">
        <Heading as="h2" size="sm">Apple Podcasts</Heading>
        <Link href="https://podcasts.apple.com/us/podcast/initium-clips/id1763967908" isExternal>
          https://podcasts.apple.com/us/podcast/initium-clips/id1763967908
        </Link>
      </Flex>
    </DefaultLayout>
  )
}

export async function getServerSideProps(){
  const parser: Parser = new Parser({
    customFields: {
      item: ['description'],
    },
  })

  const feed = await parser.parseURL('https://anchor.fm/s/fa284240/podcast/rss')

  return {
    props: {
      episodes: feed?.items || [],
    },
  }
}

export default PodcastPage
