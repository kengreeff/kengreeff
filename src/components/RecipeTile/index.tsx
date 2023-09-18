import NextImage from 'next/image'
import NextLink from 'next/link'

import { Flex, Heading, Link, Text } from '@chakra-ui/react'

import type { Recipe } from '@/pages/recipes'

type RecipeTileProps = {
  recipe: Recipe,
}

const RecipeTile = (props: RecipeTileProps) => {
  const {
    recipe: {
      calories,
      carbohydrates,
      content,
      fat,
      mainImage,
      protein,
      sys,
      title,
    }
  } = props

  const hasImage = !!mainImage?.url

  return (
    <Flex as="article" borderBottomWidth="1px" marginBottom="8" paddingBottom="8">
      <Flex
        aspectRatio={1}
        backgroundColor="#efefef"
        borderRadius="5px"
        flexShrink="0"
        overflow="hidden"
        position="relative"
        width={200}
      >
        {hasImage && (
          <NextImage alt={title} fill src={mainImage?.url} style={{ objectFit: 'cover' }} />
        )}
      </Flex>

      <Flex flexDirection="column" justifyContent="center" marginLeft="8">
        <Heading as="h2" noOfLines={2} size="md">
          {title}
        </Heading>

        <Text noOfLines={2} marginTop="4">
          {content}
        </Text>

        <Flex fontStyle="italic" marginTop="4">
          <Text>{calories} Cal /</Text>
          <Text marginLeft="1">{protein} Protein /</Text>
          <Text marginLeft="1">{carbohydrates} Carbs /</Text>
          <Text marginLeft="1">{fat} Fat</Text>
        </Flex>
        
        <Link
          as={NextLink}
          fontWeight="bold"
          href={`/recipes/${sys.id}`}
          marginTop="4"
        >
          Read More
        </Link>
      </Flex>
    </Flex>
  )
}

export default RecipeTile
