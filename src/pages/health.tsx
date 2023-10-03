import {
  Flex,
  Heading,
  Link,
  Table,
  Td,
  Tr,
  Tbody,
  Text,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextImage from 'next/image'

import DefaultLayout from '@/layout/DefaultLayout'

import KickstartLogo from 'public/kickstart-logo.png'

type HealthPageProps = {
  children: React.ReactNode,
}

const HealthPage = (props: HealthPageProps) => {
  const { children } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Health and Fitness`}
        description={`Some tips and tricks I have learned along the way.`}
      />

      <Heading as="h1">Health & Fitness</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Flex
          alignItems="center"
          backgroundColor="black"
          borderRadius="5px"
          border="1px solid"
          borderColor="gray.200"
          color="white"
          direction={['column', 'row']}
          marginBottom="8"
          padding="4"
        >
          <NextImage
            alt="8 Weeks, 8 Habits"
            width={160}
            height={100}
            src={KickstartLogo.src}
          />

          <Flex
            borderColor="rgba(255, 255, 255, 0.4)"
            borderLeft={['none', "1px solid"]}
            borderTop={["1px solid", 'none']}
            flexDirection="column"
            marginLeft={[0, "4"]}
            paddingLeft={[0, "4"]}
            paddingTop={['4', 0]}
          >
            <Text fontWeight="bold">Health & Fitness Kickstart</Text>
            <Text>An 8 week program to kickstart your health journey.</Text>
            <Link color="blue.500" href="/healthKickstart">
              Read More & Get Involved
            </Link>
          </Flex>
        </Flex>

        <Text>
          After years of exercising and dieting I have collected a few tips and tricks that make achieving your goals a little easier.
        </Text>

        <Text marginTop="4">Below are a few things I use to form a relatively simple protocol that can be the foundation for your health and fitness journey.</Text>

        <Heading as="h2" fontSize="3xl" marginTop="8">Protocol</Heading>

        <Text marginTop="4">To ensure you are setup for success you will need to prioritise 3 things: Sleep, Exercise & Nutrition.</Text>

        <Heading as="h3" fontSize="2xl" marginTop="8">Sleep</Heading>
        
        <Heading as="h3" fontSize="xl" marginTop="8">
          / Morning Sunlight in eyes
        </Heading>
        
        <Text marginTop="4">If you listen to <a href="https://hubermanlab.com"><strong>Andrew Huberman</strong></a> you will know how important this step is. Doing this will help set your circadian rythym.</Text>

        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">Viewing sunlight in the morning causes ~50% increase in circulating cortisol, epinephrine and dopamine. These leverage healthy increases in energy, immune system function and mood.<br /><br />Full episode of Huberman Lab Podcast on tools for immune-neural health and mood coming soon.</p>&mdash; Andrew D. Huberman, Ph.D. (@hubermanlab) <a href="https://twitter.com/hubermanlab/status/1554854275225776128?ref_src=twsrc%5Etfw">August 3, 2022</a>
        </blockquote>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Go to Bed and Wake Up at the same time every day (inc weekends)
        </Heading>

        <Text marginTop="4">
          Consistency is key. If you are going to bed at 10pm and waking up at 6am, try to do this every day. This will help you get into a routine and ensure you are getting enough sleep.
        </Text>

        <Text marginTop="4">
          Consistent sleep is important for your circadian rythym. Your circadian rythym is your body's internal clock. It is responsible for your sleep/wake cycle, hormone release, eating habits and digestion.
        </Text>

        <Text marginTop="4">
          I aim for 8 hours of sleep a night which means I need to be in bed for around 9 hours. I use a Whoop to track my sleep and recovery.
        </Text>
        
        <Heading as="h3" fontSize="xl" marginTop="8">
          / No Alcohol
        </Heading>

        <Text marginTop="4">
          No amount of alcohol is good for you. It is a poison and should be treated as such. If you are serious about your health and fitness, cut it out.
        </Text>

        <Text marginTop="4">
          Alcohol affects your restorative sleep and can cause you to wake up in the middle of the night.
        </Text>

        <Text marginTop="4">
          If you do drink, try to limit it to 1-2 drinks and stop drinking a few hours before bed.
        </Text>

        <Text marginTop="4">
          There is a great episode on <a href="https://hubermanlab.com/what-alcohol-does-to-your-body-brain-health/"><strong>What Alcohol Does to Your Body, Brain & Health</strong></a> that goes into more detail.
        </Text>

        <Heading as="h3" fontSize="2xl" marginTop="12">Exercise</Heading>

        <Text marginTop="4">Exercise is extremely important and has so many health benefits. The key is to find something you enjoy and will stick to.</Text>
        
        <Text marginTop="4">Try different activities and sports to find something you love. I personally enjoy <a href="https://www.crossfit.com/"><strong>Crossfit</strong></a> as it combines weightlifting, gymnastics and cardio.</Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Exercise 4-5 Times per week - Start a fitness program
        </Heading>

        <Text marginTop="4">
          It is a good idea to find a fitness program that you can follow. This will help you stay consistent and ensure you are getting a balanced workout.
        </Text>

        <Text marginTop="4">
          I am currently following the HWPO60 program from <a href="https://www.hwpotraining.com/programs/hwpo-60"><strong>HWPO Training</strong></a>. It is a shortened version of the HWPO Flagship program and takes about 60-80 minutes to complete.
        </Text>

        <Heading as="h3" fontSize="2xl" marginTop="12">Nutrition</Heading>

        <Text marginTop="4">
          When losing or gaining weight you want to do it slowly to avoid losing too much muscle or gaining too much fat.
        </Text>

        <Text marginTop="4">
          I aim to lose or gain 250 - 500 grams per week.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Log your meals using Cronometer or equivalent
        </Heading>

        <Text marginTop="4">
          Use an app to log your food to ensure you are accurately tracking your calories and macros.
        </Text>
        
        <Text marginTop="4">
          In one weight loss <a href="https://pubmed.ncbi.nlm.nih.gov/18617080/"><strong>study</strong></a> of nearly 1,700 participants, those who kept daily food records lost twice as much weight as those who kept no records.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Favour protein - setup your macros to win
        </Heading>

        <Text marginTop="4">
          Protein is the most important macronutrient when it comes to losing weight. It is the most satiating and will help you retain muscle mass.
        </Text>

        <Text marginTop="4">
          Clinical trials have found that favouring protein not only reduces body weight, but also enhances body composition by decreasing fat mass while preserving fat-free mass in both low-calorie and standard-calorie diets.
        </Text>

        <Text marginTop="4">
          I aim for a 40 / 30 / 30 split of protein, carbs and fat. This is a good starting point but you may need to adjust it depending on your goals.
        </Text>
        
        <Heading as="h3" fontSize="xl" marginTop="8">
          / 3-4L of water per day
        </Heading>

        <Text marginTop="4">
          Depending on your daily activity you should aim to drink 3-4L of water per day. I use a 800mL water bottle and aim to drink 3-4 of them per day along with a few cups of tea.
        </Text>

        <Text marginTop="4">
          If you are doing a lot of exercise you may need to add some electrolytes to your water.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Weigh yourself daily at the same time
        </Heading>

        <Text marginTop="4">
          Weighing yourself daily will help you track your progress and make adjustments to your diet if needed. It allows you to see the trend over time and not get caught up in the daily fluctuations.
        </Text>

        <Heading as="h2" fontSize="3xl" marginTop="8">Bonus Points</Heading>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Get a blood test every 6 months
        </Heading>

        <Text marginTop="4">
          Blood tests are the only way to truely see what is going on inside your body. I get a blood test every 6 months to track my progress and ensure all my markers are in range.
        </Text>

        <Text marginTop="4">
          Here is a sample of some important markers to track:
        </Text>

        <Table marginTop="4">
          <Tbody>
            <Tr>
              <Td>Apolipoprotein B (ApoB)</Td>
              <Td>Attaches to negative types of cholesterol that cause plaque buildup in your blood vessels</Td>
            </Tr>
            <Tr>
              <Td>Insulin (Fasting)</Td>
              <Td>Diagnose insulin resistance</Td>
            </Tr>
            <Tr>
              <Td>Total Testosterone</Td>
              <Td>Measures both free and attached testosterone</Td>
            </Tr>
            <Tr>
              <Td>SHBG</Td>
              <Td>Binds tightly to 3 sex hormones found in both males and females</Td>
            </Tr>
            <Tr>
              <Td>Free Testosterone</Td>
              <Td>Free (unbound) testosterone</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Take a progress photo every day
        </Heading>

        <Text marginTop="4">
          Taking a progress photo every day will help you track your progress and keep you motivated. It is a great way to see how far you have come.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Measure your blood pressure
        </Heading>

        <Text marginTop="4">High blood pressure is a silent killer. Aim to have a blood pressure of 120/80. I measure blood pressure every 3 months for a week (morning & night). Take 2 readings and average them each time. I use the Omron HEM7361T.</Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Get a DEXA scan
        </Heading>

        <Text marginTop="4">
          A DEXA scan is the most accurate way to measure your body composition. It will tell you your body fat percentage, lean mass, bone density and visceral fat.
        </Text>

        <Text marginTop="4">
          I try to get a DEXA scan every couple of years to track my progress.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Listen to a podcast on health
        </Heading>

        <Text marginY="4">
          A great way to increase your knowledge on health and fitness is to listen to podcasts. Here are a few of my favourites:
        </Text>

        <Flex width={['100%', '50%']}>
          <iframe
            style={{ borderRadius: 12 }}
            src="https://open.spotify.com/embed/show/79CkJF3UJTHFV8Dse3Oy0P/video?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Flex>

        <Flex width={['100%', '50%']}>
          <iframe
            style={{ borderRadius: 12, marginTop: 8 }}
            src="https://open.spotify.com/embed/show/63AWQmsSnFNFHUqnRAOFtD/video?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Flex>
        
        <Flex width={['100%', '50%']}>
          <iframe
            style={{ borderRadius: 12, marginTop: 8 }}
            src="https://open.spotify.com/embed/show/5QjpaU0o1Q2MkVZwwG3y7d/video?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </Flex>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Hot & Cold Exposure
        </Heading>

        <Text marginTop="4">
          Ice baths, cold showers or sauna all have great health benefits. We aim for 3 x 25-30 min sauna sessions per week. I also do a 1-2 min cold shower after every workout.
        </Text>

        <Heading as="h3" fontSize="xl" marginTop="8">
          / Exercise Snacking
        </Heading>

        <Text marginTop="4">
          Exercise snacking is a great way to get in some extra exercise throughout the day. It involves doing short bursts of exercise.
        </Text>

        <Text marginTop="4">
          We do a 3 min workout at 1:30pm at work to break up the day and get the blood flowing. Try something simple like 3 min of squats, pushups, situps or burpees.
        </Text>

        <Text fontStyle="italic" marginTop="4">Last updated September 2023</Text>
      </Flex>
    </DefaultLayout>
  )
}

export default HealthPage
