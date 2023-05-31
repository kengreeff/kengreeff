import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import DefaultLayout from '@/layout/DefaultLayout'

import useContactForm from '@/hooks/useContactForm'

type ContactPageProps = {
  children: React.ReactNode,
}

const ContactPage = (props: ContactPageProps) => {
  const { children } = props

  const contactFormPayload = useContactForm()
  const {
    callbacks: {
      setState,
      submitForm,
    },
    state: {
      email,
      loading,
      message,
      mobile,
      name,
      success,
    },
  } = contactFormPayload

  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Contact Me`}
        description={`Contact me using the form on this page.`}
      />

      <Heading as="h1">Contact</Heading>

      <Flex direction="column" marginTop="8" width={['100%', "70%"]}>
        {success && (
          <Box
            backgroundColor="black"
            borderRadius="lg"
            color="white"
            marginBottom="4"
            padding="4"
          >
            <Text>Message was sent successfully!</Text>
          </Box>
        )}

        <form onSubmit={submitForm}>
          <FormControl>
            <FormLabel>Your Name</FormLabel>
            <Input onChange={e => setState({ name: e.target.value })} value={name} type="text" />

            <FormLabel marginTop="4">Your Email</FormLabel>
            <Input onChange={e => setState({ email: e.target.value })} value={email}  type="email" />

            <FormLabel marginTop="4">Your Mobile</FormLabel>
            <Input onChange={e => setState({ mobile: e.target.value })} value={mobile}  type="text" />

            <FormLabel marginTop="4">Your Message</FormLabel>
            <Textarea onChange={e => setState({ message: e.target.value })} value={message}  height={120} />

            <Button
              colorScheme="green"
              onClick={submitForm}
              isLoading={loading}
              marginTop="4"
              type="submit"
            >
              Send Message
            </Button>
          </FormControl>
        </form>
      </Flex>
    </DefaultLayout>
  )
}

export default ContactPage
