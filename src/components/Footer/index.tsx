import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      alignItems="flex-start"
      borderTopWidth="1px"
      flexDirection="column"
      fontSize="xs"
      paddingY="6"
      paddingX={['6', "12"]}
      width="100%"
    >
      <Flex>
        <Text>
          Portfolio built using the open source project by
        </Text>

        <Link fontWeight="bold" href="https://www.kengreeff.com" marginLeft="1">
          Ken Greeff
        </Link>
      </Flex>

      <Flex>
        <Text>
          Create your own Next.js Portfolio with Contentful CMS by forking this repo on
        </Text>

        <Link fontWeight="bold" href="https://github.com/kengreeff/kengreeff" marginLeft="1">
          GitHub
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
