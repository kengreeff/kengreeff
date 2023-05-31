import { Flex, Heading, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import DefaultLayout from '@/layout/DefaultLayout'

type AboutPageProps = {
  children: React.ReactNode,
}

const AboutPage = (props: AboutPageProps) => {
  const { children } = props

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | About Me`}
        description={`A brief run through of my history and what I am currently working on.`}
      />

      <Heading as="h1">About Me</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Text>My name is Ken and I am a creator and health enthusiast. I discovered my passion for web development at the age of 15 when I started playing around with HTML. Since then, I have been committed to designing and building websites and applications from scratch.</Text>

        <Text marginTop="4">In the early stages of my career, I worked with clients and honed my skills in web development. My first major application, Out4dinner.com, was a restaurant directory built with PHP and backed by a MYSQL database. It also utilized redis as an in-memory database to create a social feed. I also built an iOS app in Objective-C to accompany it, which we launched on the App Store.</Text>

        <Text marginTop="4">In 2013, I started a print and sign business with my youngest brother, which led to the development of a tool for basic production management. This concept was the foundation for our most successful venture yet - Realhub. Founded in 2015 with my two brothers, Realhub is a platform that automates the creation of artwork for real estate agencies and manages the production process from manufacturing to installation. We became a large and agile software company.</Text>

        <Text marginTop="4">In 2020, Realhub merged with our biggest competitor, Campaigntrack, to form Realbase that dominated the real estate marketing industry in Australia & New Zealand with close to 50% of the market share. I worked as the CTO managing multiple team members. We developed conventions and systems that allowed us to build software platforms extremely quickly. In 2022, Realbase was acquired by Domain Holdings as part of their Agent Solutions offering.</Text>

        <Text marginTop="4">Currently, I work at Domain, where I continue to develop and improve the Realbase platforms, including Realhub, Engage, and many utility platforms like our Artwork Builder and Template Management systems.</Text>
        
        <Text>I have also started to live stream the development of my side projects to educate other developers and showcase how to build production-ready applications.</Text>

        <Text marginTop="4">Alongside my passion for development, I am also a health enthusiast. I have been exercising in the gym since I was 15, mainly focusing on bodybuilding. However, in 2014 I started crossfit and found a new way to train. I continue to train with my wife 5-6 times a week and spend hundreds of hours listening to podcasts on ways to optimize health and performance.</Text>
      </Flex>
    </DefaultLayout>
  )
}

export default AboutPage
