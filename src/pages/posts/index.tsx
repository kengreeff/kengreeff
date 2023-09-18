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
    blogPostCollection {
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

type PostsPageProps = {
  blogPosts: BlogPost[],
}

function PostsPage(props: PostsPageProps) {
  const { blogPosts } = props

  return (
    <>
      <Head>
        <title>Ken Greeff | Posts</title>
        <meta name="description" content="Software engineer and entrepreneur with a passion for building great software products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DefaultLayout>
        <Heading as="h1">
          Posts
        </Heading>

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

export default PostsPage
