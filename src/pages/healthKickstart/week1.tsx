import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import YouTubeEmbed from 'react-youtube'

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

      <Box marginTop="8" width="100%">
        <YouTubeEmbed videoId="NSpvlPJbPtE" />
      </Box>
      
      <Text marginTop="8">Today is the day! Let&apos;s strap in and commit, you won&apos;t recognise yourself after this.</Text>

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
          Make sure you weigh yourself and log it. Don&apos;t forget to take a progress photo.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Warmup:</strong><br />

            30 seconds - Jogging on Spot with high knees to chest<br />
            10 x Pushup plus motion. For scapulothoracic rhythm and function.<br />
            10 x Pushups. Kneeling or toes. With push-up plus focus at top range.<br />
            30 seconds - Jogging on spot heels to bum.<br />
            10 x Alternate Side Lunge
          </Text>

          <Text marginTop="2">
            <strong>Working Sets (2 - 3 Rounds):</strong><br />

            15 second rest between exercises and 60 seconds rest between sets.<br /><br />

            12 x Bodyweight Squat (Use a seat and squat to seat if needed for extra assistance.<br />
            12 x Pushups (Kneeling or on Toes)<br />
            12 x Alternating Back Step Lunge (Use chair or table for support if feeling unsteady)<br />
            20 x Mountain Climbers (Good controlled flowing movement try picking up speed when feel comfortable)<br />
            12 x Prone Cobra (Hold 2 seconds at top) (lying face down tuck tailbone under, activate core muscle gently roll hands and shoulders out scapular back and down and lift upper body gently off ground tuck chin in).
          </Text>
        </Flex>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise Snack</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>3 minute AMRAP (As Many Rounds As Possible)</strong><br />

            5 x Pushup<br />
            10 x Squat Jumps<br />
            15 x Straight Leg Raise (Bent legs if required)
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
            <strong>Cardio (Day 1):</strong><br />

            Get outside for 20-30 minutes of Zone 2 training. Comfortably uncomfortable so you can just chat through your walk. Try to Leave the phone at home so you aren&apos;t distracted.
          </Text>
        </Flex>
      </Flex>
      {/* --- End Tuesday --- */}

      {/* --- Wednesday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Wednesday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Warmup:</strong><br />

            30 seconds - Jogging on Spot with high knees to chest<br />
            10 x Pushup plus motion. For scapulothoracic rhythm and function.<br />
            10 x Pushups. Kneeling or toes. With push-up plus focus at top range.<br />
            30 seconds - Jogging on spot heels to bum.<br />
            10 x Alternate Side Lunge<br />
            20 x Banded Reverse Fly (No band? Use bent over reverse fly with 2 x water bottles)
          </Text>

          <Text marginTop="2">
            <strong>Working Sets (2 - 3 Rounds):</strong><br />

            You&apos;ll need a timer for this one. <a href="https://smartwod.app/">Download SmartWOD</a> if you dont have one.<br /><br />

            30 sec work / 10 seconds rest between exercises and 60 seconds rest between sets.<br />
            Record your reps per exercise and try to beat it next round.<br /><br />

            Sumo Squat<br />
            Air Boxing<br />
            Alternate Side Lunge (with either mid shin touch or ground touch with hands)<br />
            Glute Bridge<br />
            Plank Hold either kneeling or on toes
          </Text>
        </Flex>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise Snack</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>3 minute AMRAP (As Many Rounds As Possible)</strong><br />

            5 x Walkouts<br />
            10 x Alternating Side Lunge<br />
            15 x Bench Dips
          </Text>
        </Flex>
      </Flex>
      {/* --- End Wednesday --- */}

      {/* --- Thursday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Thursday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Cardio (Day 2):</strong><br />

            20 - 30 mins this time head for the hills or stairs. But still try to aim for the zone 2 slight zone 3 training ranges. Push a little on the up but keep the heart rate comfortable.
          </Text>
        </Flex>
      </Flex>
      {/* --- End Thursday --- */}

      {/* --- Friday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Friday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Warmup:</strong><br />

            30 seconds - Jogging on Spot with high knees to chest<br />
            10 x Pushup plus motion. For scapulothoracic rhythm and function.<br />
            10 x Pushups. Kneeling or toes. With push-up plus focus at top range.<br />
            30 seconds - Jogging on spot heels to bum.<br />
            10 x Alternate Side Lunge
          </Text>

          <Text marginTop="2">
            <strong>Working Sets (2 - 3 Rounds):</strong><br />

            12 x Squats with Alternating leg kick out front.<br />
            12 x High plank with alternating shoulder taps.<br />
            12 x Alternate sprinter lunge with ground touch.<br />
            12 x Side plank left either on knees or feet.<br />
            12 x Side plank right either on knees or feet.
          </Text>
        </Flex>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise Snack</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>3 minute AMRAP (As Many Rounds As Possible)</strong><br />

            5 x Pike Pushup<br />
            10 x Side Lunge<br />
            20 x Scissor Kicks
          </Text>
        </Flex>
      </Flex>
      {/* --- End Friday --- */}

      {/* --- Saturday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Saturday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise (Bonus Day)</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Warmup:</strong><br />

            30 seconds - Star jumps<br />
            10 x Pushup plus motion. For scapulothoracic rhythm and function<br />
            10 x Pushups Kneeling or toes. With push-up plus focus at top range<br />
            30 seconds - Skipping (no need for skipping rope just jump and touch your thighs)<br />
            10 x Alternate Sprinter lunge
          </Text>

          <Text marginTop="2">
            <strong>Working Sets (3 - 4 Rounds):</strong><br />

            40 seconds work / 10 seconds rest between exercises and 60 seconds rest between sets.<br/><br/>

            1 and a 1/2 Squat<br />
            Renegade row with push-up. Kneeling or on toes<br />
            Bodyweight tricep extension on coffee table or lounge (narrow grip pushups style)<br />
            Star Crunch
          </Text>
        </Flex>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise Snack</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>3 minute (Max Reps)</strong><br />

            1 min Pushups<br />
            1 min Sumo Squat<br />
            1 min Star Crunch
          </Text>
        </Flex>
      </Flex>
      {/* --- End Saturday --- */}

      {/* --- Sunday --- */}
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">Sunday</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

        <Flex flexDirection="column">
          <Text marginTop="2">
            <strong>Rest Day</strong><br />

            Get outside and enjoy the fresh air. Go for a walk, play with the kids, do some gardening. Just get outside and enjoy the day.
          </Text>
        </Flex>
      </Flex>
      {/* --- End Sunday --- */}
    </DefaultLayout>
  )
}

export default HealthKickstartWeek1
