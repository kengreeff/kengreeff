import { gql } from '@apollo/client'

import client from '@/utils/apollo-client'

import { type NextApiRequest, type NextApiResponse } from 'next'

const sitemapString = `https://www.kengreeff.com/about
https://www.kengreeff.com/contact
https://www.kengreeff.com/health
https://www.kengreeff.com/healthKickstart
https://www.kengreeff.com/posts
https://www.kengreeff.com/projects
https://www.kengreeff.com/recipes
`

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

const sitemap = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = await client.query({
      query: GET_BLOG_POSTS_QUERY,
  })

  const postsString = data?.blogPostCollection?.items.reduce((acc, post) => {
    const postUrl = `https://www.kengreeff.com/posts/${post.sys.id}\n`
    return acc + postUrl
  }, '')

  res.send(sitemapString + postsString)
}

export default sitemap
