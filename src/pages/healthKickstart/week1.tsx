import {
  Flex,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'

import DefaultLayout from '@/layout/DefaultLayout'

import Timeline from '@/components/Timeline'

const HealthKickstartWeek1 = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Week 1 Plan - Health Kickstart Challenge`}
        description={`Full daily plan for Week 1 of the Health Kickstart Challenge.`}
      />

      <Heading as="h1">Week 1 Plan</Heading>
      
      <Text marginTop="4">Today is the day! Let&apos;s strap in and commit, you won&apos;t recognise yourself after this.</Text>

      <Text marginTop="4">This week is about finding your bearings. We will ease in to it slowly so that we can ensure we finish the race.</Text>
      
      <Text marginTop="4">
        A useful trick when dieting is to try eat the same meals. This may sound boring but most people do this anyway e.g. Sunday Pizza night, cereal for breakfast etc. 
      </Text>

      <Text marginTop="4">
        Doing this makes it easier to log as well as shop for groceries and plan ahead.
      </Text>
      
      {/* --- Monday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Monday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Nutrition</Heading>

        <Text marginTop="4">
          Eat as you normally do but make sure you log everything in <Link href="https://cronometer.com/" color="blue.500"><strong>Cronometer</strong></Link> or <Link href="https://www.myfitnesspal.com/" color="blue.500"><strong>MyFitnessPal</strong></Link>.
        </Text>

        <Text marginTop="4">
          This will give you a baseline to work from next week.
        </Text>

        <Text marginTop="4">
          Make sure you weigh yourself and log it.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <Link href="https://www.crossfit.com/230825" color="blue.500">
              <strong>Crossfit 230825</strong>
            </Link><br />

            <i>5 Rounds</i> for time of:<br/>
            50-foot overhead walking lunge<br />
            21 burpees
          </Text>

          <Text marginTop="2">
            <strong>Beginner option:</strong><br />

            <i>5 Rounds</i> for time of:<br/>
            10 Squats<br/>
            5 Burpees<br/>
            Straight in to 10 min brisk walk
          </Text>
        </Flex>
      </Flex>
      {/* --- End Monday --- */}

      {/* --- Tuesday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Tuesday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            TBC
          </Text>
        </Flex>
      </Flex>
      {/* --- End Tuesday --- */}
    </DefaultLayout>
  )
}

export default HealthKickstartWeek1
