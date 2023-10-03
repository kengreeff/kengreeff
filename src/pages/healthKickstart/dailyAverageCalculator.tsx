import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'

import DefaultLayout from '@/layout/DefaultLayout'

import DailyCalorieAverageCalculator from '@/components/DailyCalorieAverageCalculator'

const DailyAverageCalculatorPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Calorie Daily Average Calculator`}
        description={`Calorie Daily Average Calculator`}
      />

      <Heading as="h1">Calorie Average Calculator</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Text>
          This calculator will help you determine your daily calorie average.
        </Text>

        <Text marginTop="4">
          <strong>Instructions:</strong> Enter your daily calorie intake (kcal) for each day of the week. The calculator will then determine your daily average.
        </Text>

        <Heading as="h2" size="md" marginTop="8" marginBottom="2">Calculator</Heading>
        <DailyCalorieAverageCalculator />
        
        <Text marginTop="8">
          <strong>Disclaimer:</strong> This calculator is provided for informational purposes only. It is not intended to be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
        </Text>
      </Flex>

      <Flex borderTopWidth="1px" marginTop="8" paddingTop="4">
        <Link
          as={NextLink}
          color="blue.500"
          fontWeight="bold"
          href={`/healthKickstart`}
        >
          Back to Challenge Overview
        </Link>
      </Flex>
    </DefaultLayout>
  )
}

export default DailyAverageCalculatorPage
