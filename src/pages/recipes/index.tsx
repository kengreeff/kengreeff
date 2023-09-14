import {
  Flex,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'

import DefaultLayout from '@/layout/DefaultLayout'

const RecipesPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Recipes`}
        description={`Healthy, high protein and macro friendly recipes.`}
      />

      <Heading as="h1">Recipes</Heading>
    </DefaultLayout>
  )
}

export default RecipesPage
