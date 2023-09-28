import {
  Flex,
  Link,
  Heading,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import { gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'

import type { GetServerSidePropsContext } from 'next'
import type { HealthProgramDayPlan } from '@/pages/healthKickstart'

import client from '@/utils/apollo-client'

import DefaultLayout from '@/layout/DefaultLayout'

import styles from './styles.module.scss'

const GET_HEALTH_PROGRAM_DAY_QUERY = gql`
  query GetHealthProgramDayPlan($id: String!) {
    healthProgramDayPlan(id: $id) {
      displayTitle
      exercise
      exerciseSnack
      nutrition
      sys {
        id
      }
      title
    }
  }
`

type HealthKickstartWeekDayPageProps = {
  healthProgramDayPlan: HealthProgramDayPlan,
  weekId: string,
}

const HealthKickstartWeekDayPage = (props: HealthKickstartWeekDayPageProps) => {
  const { healthProgramDayPlan, weekId } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | ${healthProgramDayPlan?.title} Plan - Health Kickstart Challenge`}
        description={`Full daily plan for ${healthProgramDayPlan?.title} of the Health Kickstart Challenge.`}
      />

      <Heading as="h1">
        {healthProgramDayPlan?.title}
      </Heading>
      
      <Flex flexDirection="column">
        <Heading as="h2" fontSize="3xl" marginTop="8">
          {healthProgramDayPlan?.displayTitle}
        </Heading>

        {/* --- Nutrition --- */}
        {!!healthProgramDayPlan?.nutrition && (
          <>
            <Heading as="h3" fontSize="xl" marginTop="8">Nutrition</Heading>

            <Flex flexDirection="column" marginTop="4">
              <ReactMarkdown className={styles.markdown}>
                {healthProgramDayPlan?.nutrition}
              </ReactMarkdown>
            </Flex>
          </>
        )}
        {/* --- End Nutrition --- */}

        {/* --- Exercise --- */}
        {!!healthProgramDayPlan?.exercise && (
          <>
            <Heading as="h3" fontSize="xl" marginTop="8">Exercise</Heading>

            <Flex flexDirection="column" marginTop="4">
              <ReactMarkdown className={styles.markdown}>
                {healthProgramDayPlan?.exercise}
              </ReactMarkdown>
            </Flex>
          </>
        )}
        {/* --- End Exercise --- */}

        {/* --- Exercise Snack --- */}
        {!!healthProgramDayPlan?.exerciseSnack && (
          <>
            <Heading as="h3" fontSize="xl" marginTop="8">Exercise Snack</Heading>

            <Flex flexDirection="column" marginTop="4">
              <ReactMarkdown className={styles.markdown}>
                {healthProgramDayPlan?.exerciseSnack}
              </ReactMarkdown>
            </Flex>
          </>
        )}
        {/* --- End Exercise Snack --- */}

        <Flex borderTopWidth="1px" marginTop="8" paddingTop="4">
          <Link
            as={NextLink}
            color="blue.500"
            fontWeight="bold"
            href={`/healthKickstart/week/${weekId}`}
          >
            Back to Week Plan
          </Link>
        </Flex>
      </Flex>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query: { weekDayId, weekId } } = context

  const { data } = await client.query({
    query: GET_HEALTH_PROGRAM_DAY_QUERY,
    variables: {
      id: weekDayId,
    }
  })

  return {
    props: {
      healthProgramDayPlan: data?.healthProgramDayPlan || {},
      weekId,
    },
  }
}

export default HealthKickstartWeekDayPage