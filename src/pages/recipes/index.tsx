import {
  Flex,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import { gql } from '@apollo/client'

import DefaultLayout from '@/layout/DefaultLayout'

import client from '@/utils/apollo-client'

import RecipeTile from '@/components/RecipeTile'

export type Recipe = {
  calories: string,
  carbohydrates: string,
  content: string,
  fat: string,
  mainImage: {
    url: string,
  },
  protein: string,
  sys: {
    id: string,
  },
  title: string,
}

const GET_RECIPES_QUERY = gql`
  query GetRecipes {
    recipeCollection(limit: 50) {
      items {
        calories
        carbohydrates
        content
        fat
        ingredients
        mainImage {
          url(transform: { height: 400, width: 400 })
        }
        method
        protein
        sys {
          id
        }
        title
      }
    }
  }
`

type RecipesPageProps = {
  recipes: Recipe[],
}

const RecipesPage = (props: RecipesPageProps) => {
  const { recipes } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Recipes`}
        description={`Healthy, high protein and macro friendly recipes.`}
      />

      <Heading as="h1">Recipes</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        {recipes.map((recipe) => (
          <RecipeTile key={recipe.sys.id} recipe={recipe} />
        ))}
      </Flex>
    </DefaultLayout>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_RECIPES_QUERY,
  })

  return {
    props: {
      recipes: data?.recipeCollection?.items || [],
    },
  }
}

export default RecipesPage
