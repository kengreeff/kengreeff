import {
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import NextImage from 'next/image'

import DefaultLayout from '@/layout/DefaultLayout'

import Timeline from '@/components/Timeline'

import HeaderImage from './assets/image.jpg'
console.log(HeaderImage)

const HealthKickstart = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Health Kickstart Challenge`}
        description={`An 8 week challenge to reset your habits and establish a healthy lifestyle.`}
      />

      <Heading as="h1">Health Kickstart Challenge</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Flex aspectRatio={1920 / 965} borderRadius="5px" marginBottom="4" position="relative" overflow="hidden" maxWidth={800}>
          <NextImage src={HeaderImage} alt="8 Weeks, 8 Habits" fill />
        </Flex>

        <Text>Every 1-2 years we spend 8 weeks in a calorie deficit to trim down and get ready for summer. This is a great oppurtunity to reset your habits and establish new ones.</Text>

        <Text marginTop="4">I encourage you to try it out and see if it improves your life (I am betting it will).</Text>

        <Text marginTop="4">I have put together a plan for you to follow along with and modify as you see fit.</Text>

        <Text marginTop="4">The examples provided will be based on a bed time of 9pm, wake time of 6am and a 2300 calorie diet but you can adjust as required.</Text>

        <Text marginTop="4">
          The sample workouts provided are aimed at beginners. If you have been training a while I suggest you grab a program from <Link href="https://www.hwpotraining.com/" color="blue.500"><strong>HWPO Training</strong></Link>
        </Text>

        <Text marginTop="4"><strong>IMPORTANT:</strong> I am not a doctor or health professional. Please get your own advice and clearance before starting an exercise program.</Text>



      <Heading as="h2" fontSize="3xl" marginTop="8">Protocol</Heading>

      <Timeline boxProps={{ marginTop: '8' }}>
        <Timeline.Entry label="6am" title="Wake up" />

        <Timeline.Entry label="6:15am" title="Sunlight in Eyes">
          <Link href="https://hubermanlab.com/using-light-for-health/" color="blue.500">
            Using Light for Health
          </Link>
        </Timeline.Entry>

        <Timeline.Entry label="7am" title="Exercise">
          Mon, Tue, Wed, Fri and Sat. Try to move on your days off as well.
        </Timeline.Entry>

        <Timeline.Entry label="8am" title="Cold Shower (1-2 min)">
          Even on your days off. This is a great way to start the day.
        </Timeline.Entry>

        <Timeline.Entry label="8:10am" title="Weigh In" />

        <Timeline.Entry label="8:15am" title="Shred Shake" />

        <Timeline.Entry label="10am" title="Snack" />

        <Timeline.Entry label="12pm" title="Lunch" />

        <Timeline.Entry label="1:30pm" title="Exercise Snack">
          Mon, Tue, Wed and Fri
        </Timeline.Entry>

        <Timeline.Entry label="5pm" title="Dinner" />

        <Timeline.Entry label="5:30pm" title="Snack" />

        <Timeline.Entry label="7:45pm" title="Start Bedtime Routine" />

        <Timeline.Entry label="8:15pm" title="Bed">
          Try minimize screen time before bed. Read a book or listen to a podcast instead.
        </Timeline.Entry>
      </Timeline>

        <Heading as="h2" fontSize="3xl" marginTop="8">Daily Plan</Heading>

        <Flex flexDirection="column" marginTop="4">
          <Link href="/healthKickstart/week1" color="blue.500">Week 1</Link>
          <Link href="">Week 2 - Coming Soon</Link>
          <Link href="">Week 3 - Coming Soon</Link>
          <Link href="">Week 4 - Coming Soon</Link>
          <Link href="">Week 5 - Coming Soon</Link>
          <Link href="">Week 6 - Coming Soon</Link>
          <Link href="">Week 7 - Coming Soon</Link>
          <Link href="">Week 8 - Coming Soon</Link>
        </Flex>

        <Heading as="h2" fontSize="3xl" marginTop="8">Resources</Heading>

        <Flex flexDirection="column" marginTop="4">
          <Link href="/recipes">Recipes</Link>
          <Link href="/exercises">Exercises</Link>
        </Flex>
      </Flex>
    </DefaultLayout>
  )
}

export default HealthKickstart
