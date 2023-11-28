import NextImage from 'next/image'
import NextLink from 'next/link'
import { Flex, GridItem, Heading, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

import type { BlogPost } from '@/pages'

type BlogPostTileProps = {
  blogPost: BlogPost,
}

const BlogPostTile = (props: BlogPostTileProps) => {
  const { blogPost: { mainImage, summary, sys, title } } = props

  return (
    <LinkBox
      as={GridItem}
      position="relative"
      overflow="clip"
      width="100%"
    >
      <Flex
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        height="220px"
        overflow="clip"
        position="relative"
      >
        <NextImage
          src={mainImage?.url}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'left' }}
        />
      </Flex>

      <Flex
        borderBottomLeftRadius="5px"
        borderBottomRightRadius="5px"
        border="1px solid"
        borderColor="gray.100"
        direction="column"
        height="186px"
        padding="4"
      >
        <Heading noOfLines={2} size="md">
          {title}
        </Heading>

        <Text noOfLines={2} marginTop="4">
          {summary}
        </Text>
        
        <LinkOverlay
          as={NextLink}
          fontWeight="bold"
          href={`/posts/${sys.id}`}
          marginTop="auto"
        >
          Read More
        </LinkOverlay>
      </Flex>
    </LinkBox>
  )
}

export default BlogPostTile
