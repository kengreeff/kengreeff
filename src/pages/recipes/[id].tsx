import { gql } from '@apollo/client'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import type { GetServerSidePropsContext } from 'next'

import client from '@/utils/apollo-client'

import DefaultLayout from '@/layout/DefaultLayout'

type Recipe = {
  calories: number,
  carbohydrates: number,
  content: string,
  fat: number,
  ingredients: string,
  mainImage: {
    url: string,
  },
  method: string,
  protein: number,
  summary: string,
  sys: {
    id: string,
  },
  title: string,
  youtubeVideoId?: string,
}

const GET_RECIPE_BY_ID_QUERY = gql`
  query GetRecipeById($id: String!) {
    recipe(id: $id) {
      calories
      carbohydrates
      content
      fat
      ingredients
      mainImage {
        url
      }
      method
      protein
      sys {
        id
      }
      title
    }
  }
`

type RecipeProps = {
  recipe: Recipe,
}

function RecipePage(props: RecipeProps) {
  const {
    recipe: {
      calories,
      carbohydrates,
      content,
      fat,
      ingredients,
      mainImage,
      method,
      protein,
      summary,
      sys,
      title,
    },
  } = props

  const hasImage = !!mainImage?.url

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
          url: `https://www.kengreeff.com/recipes/${sys?.id}`,
        }}
      />

      <Heading>{title}</Heading>

      <Flex flexDirection="column" marginTop="8" whiteSpace="pre-wrap">
        <Text>
          {content}
        </Text>

        <Flex
          aspectRatio={1}
          backgroundColor="#efefef"
          borderRadius="5px"
          flexShrink="0"
          overflow="hidden"
          marginTop="8"
          position="relative"
          width={['100%', 600]}
        >
          {hasImage && (
            <NextImage alt={title} fill src={mainImage?.url} style={{ objectFit: 'cover' }} />
          )}
        </Flex>

        <Heading as="h2" marginTop="8" size="md">
          Ingredients
        </Heading>

        <Text marginTop="4">
          {ingredients}
        </Text>

        <Heading as="h2" marginTop="8" size="md">
          Method
        </Heading>

        <Text marginTop="4">
          {method}
        </Text>

        <Heading as="h2" marginTop="8" size="md">
          Nutrition
        </Heading>

        <Text marginTop="4">
          {calories} Cal<br />
          {protein}g Protein<br />
          {carbohydrates}g Carbs<br />
          {fat}g Fat
        </Text>
      </Flex>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query: { id } } = context

  const { data } = await client.query({
    query: GET_RECIPE_BY_ID_QUERY,
    variables: {
      id
    }
  })

  return {
    props: {
      recipe: data?.recipe || {},
    },
  }
}

export default RecipePage
