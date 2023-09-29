import { Flex, Heading, Text } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

import DefaultLayout from '@/layout/DefaultLayout'

const LiabilityWaiverPage = () => {
  return (
    <DefaultLayout>
      <NextSeo
        title={`Ken Greeff | Exercise Liability Waiver`}
        description={`Exercise Program Liability Acknowledgment`}
      />

      <Heading as="h1">Exercise Program Liability Acknowledgment</Heading>

      <Flex direction="column" lineHeight="1.5" marginTop="8" width={['100%', '70%']}>
        <Text>
          By accessing and using the free exercise program provided by Ken Greeff (hereinafter referred to as the &quot;Program&quot;) on our website, you acknowledge and agree to the following terms and conditions:
        </Text>

        <Text marginTop="4">
          <strong>Assumption of Risk:</strong> You understand that participation in physical activity, including the Program, carries inherent risks, including but not limited to muscle soreness, strains, sprains, fractures, and other injuries. You are aware of these risks and voluntarily assume them when you choose to participate.
        </Text>

        <Text marginTop="4">
          <strong>Health and Medical Considerations:</strong> You certify that you are in good health and have no medical conditions that would prevent your safe participation in the Program. If you have any concerns about your health or fitness level, it is recommended that you consult a medical professional before starting the Program.
        </Text>
        
        <Text marginTop="4">
          <strong>Release and Waiver of Liability:</strong> In consideration of being allowed to access and use the Program on our website, you hereby release and discharge Ken Greeff, its officers, directors, employees, volunteers, and agents from any and all claims, liabilities, demands, actions, and causes of action whatsoever, arising out of or related to any loss, damage, or injury, including death, that may be sustained by you during your use of the Program.
        </Text>

        <Text marginTop="4">
          By accessing and using the Program on our website, you acknowledge that you have read, understood, and agreed to the contents of this acknowledgment. If you do not agree with any of these terms and conditions, please refrain from using the Program.
        </Text>
        
        <Text marginTop="4">
          This acknowledgment is binding upon you and your legal representatives.
        </Text>
      </Flex>
    </DefaultLayout>
  )
}

export default LiabilityWaiverPage
