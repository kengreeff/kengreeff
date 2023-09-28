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
import { gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

import client from '@/utils/apollo-client'

import DefaultLayout from '@/layout/DefaultLayout'

import type { GetServerSidePropsContext } from 'next'
import type { HealthProgramWeek } from '../../index'

import styles from './styles.module.scss'

const GET_HEALTH_PROGRAM_WEEK_QUERY = gql`
  query GetDayPlansForWeekQuery($id: String!) {
    healthProgramWeek(id: $id) {
      sys {
        id
      }
      title
      weekNumber
      youTubeVideoId
      description
      linkedFrom {
        healthProgramDayPlanCollection(order: weekDayNumber_ASC) {
          items {
            title
            displayTitle
            exercise
            exerciseSnack
            nutrition
            weekDayNumber
            sys {
              id
            }
          }
        }
      }
    }
  }
`

type HealthKickstartWeekProps = {
  healthProgramWeek: HealthProgramWeek,
}

const HealthKickstartWeek = (props: HealthKickstartWeekProps) => {
  const { healthProgramWeek } = props
  console.log(healthProgramWeek)

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | ${healthProgramWeek?.title} Plan - Health Kickstart Challenge`}
        description={`Full daily plan for ${healthProgramWeek?.title} of the Health Kickstart Challenge.`}
      />

      <Heading as="h1">{healthProgramWeek?.title} Plan</Heading>

      {!!healthProgramWeek?.youTubeVideoId && (
        <Box marginTop="8" width="100%">
          <YouTubeEmbed videoId={healthProgramWeek?.youTubeVideoId} />
        </Box>
      )}
      
      <Flex flexDirection="column" marginTop="8" width="100%">
        <ReactMarkdown className={styles.markdown}>
          {healthProgramWeek?.description}
        </ReactMarkdown>
      </Flex>
      
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">
          Daily Plans
        </Heading>

        <Flex flexDirection="column" marginTop="4">
          {healthProgramWeek?.linkedFrom?.healthProgramDayPlanCollection?.items?.map((dayPlan) => (
            <Link
              as={NextLink}
              color="blue.500"
              fontWeight="bold"
              href={`/healthKickstart/week/${healthProgramWeek.sys.id}/day/${dayPlan.sys.id}`}
              key={dayPlan.sys.id}
            >
              {dayPlan?.displayTitle}
            </Link>
          ))}
        </Flex>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query: { weekId } } = context

  const { data } = await client.query({
    query: GET_HEALTH_PROGRAM_WEEK_QUERY,
    variables: {
      id: weekId,
    }
  })

  return {
    props: {
      healthProgramWeek: data?.healthProgramWeek || {},
    },
  }
}

export default HealthKickstartWeek
