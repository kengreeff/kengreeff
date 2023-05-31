import { gql } from '@apollo/client'
import { Box, Heading } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import YouTubeEmbed from 'react-youtube'
import { NextSeo } from 'next-seo'

import type { GetServerSidePropsContext } from 'next'

import client from '@/utils/apollo-client'

import DefaultLayout from '@/layout/DefaultLayout'

type BlogPost = {
  content: string,
  mainImage: {
    url: string,
  },
  summary: string,
  sys: {
    id: string,
  },
  title: string,
  youtubeVideoId?: string,
}

const GET_POST_BY_ID_QUERY = gql`
  query GetPostById($id: String!) {
    blogPost(id: $id) {
      content
      mainImage {
        url
      }
      summary
      sys {
        id
      }
      title
      youtubeVideoId
    }
  }
`

type PostProps = {
  blogPost: BlogPost,
}

function PostPage(props: PostProps) {
  const {
    blogPost: {
      content,
      mainImage,
      summary,
      sys,
      title,
      youtubeVideoId,
    },
  } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | ${title}`}
        description={summary}
        openGraph={{
          description: summary,
          images: [
            {
              url: mainImage?.url,
              alt: `Main Image for ${title}`,
            },
          ],
          title: title,
          type: 'website',
          url: `https://www.kengreeff.com/posts/${sys?.id}`,
        }}
      />

      <Heading>{title}</Heading>

      {!!youtubeVideoId && (
        <Box marginTop="8" width="100%">
          <YouTubeEmbed videoId={youtubeVideoId} />
        </Box>
      )}

      <Box marginTop="8" whiteSpace="pre-wrap">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </Box>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query: { id } } = context

  const { data } = await client.query({
    query: GET_POST_BY_ID_QUERY,
    variables: {
      id
    }
  })

  return {
    props: {
      blogPost: data?.blogPost || {},
    },
  }
}

export default PostPage
