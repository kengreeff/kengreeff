import Head from 'next/head'
import { Flex, Grid, Heading, Text } from '@chakra-ui/react'
import { gql } from '@apollo/client'

import { Inter } from 'next/font/google'

import DefaultLayout from '@/layout/DefaultLayout'

import client from '@/utils/apollo-client'

const inter = Inter({ subsets: ['latin'] })

import BlogPostTile from '@/components/BlogPostTile'

export type BlogPost = {
  content: string,
  mainImage: {
    url: string,
  },
  summary: string,
  sys: {
    id: string,
  },
  title: string,
}

const GET_BLOG_POSTS_QUERY = gql`
  query GetBlogPosts {
    blogPostCollection(limit: 16) {
      items {
        content
        mainImage {
          url
        }
        summary
        sys {
          id
        }
        title
      }
    }
  }
`

type HomeProps = {
  blogPosts: BlogPost[],
}

export default function Home(props: HomeProps) {
  const { blogPosts } = props

  return (
    <>
      <Head>
        <title>Ken Greeff - Software Engineer</title>
        <meta name="description" content="Software engineer and entrepreneur with a passion for building great software products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DefaultLayout>
        <Flex
          borderBottom="1px solid"
          borderColor="gray.100"
          direction="column"
          paddingBottom="12"
        >
          <Heading letterSpacing="-3px" size="4xl">Ken Greeff</Heading>
          <Heading marginTop="2" size="lg">Software Engineer, Sydney Australia</Heading>

          <Text marginTop="8" width={['100%', "70%"]}>
            I'm a software engineer and entrepreneur with a passion for building great software products and promoting a healthy lifestyle. 
            I founded Realhub, a software company that helps real estate agents manage their business more efficiently, and currently work as a software engineer at Domain Group, a leading Australian real estate website. 
            When I'm not building software, you can find me in the gym or outdoors, as fitness is a huge part of my life and something that I'm truly passionate about.
          </Text>
        </Flex>

        <Grid
          gridTemplateColumns="repeat(auto-fill, minmax(296px, 1fr))"
          gap={6}
          marginTop="8"
          width="100%"
        >
          {blogPosts.map((blogPost) => (
            <BlogPostTile key={blogPost.sys.id} blogPost={blogPost} />
          ))}
        </Grid>
      </DefaultLayout>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_BLOG_POSTS_QUERY,
  })

  return {
    props: {
      blogPosts: data?.blogPostCollection?.items || [],
    },
  }
}
