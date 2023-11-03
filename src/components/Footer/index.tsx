import { Flex, Link, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex flexDirection="column" marginTop="auto">
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

        <Text>
          Create your own Next.js Portfolio with Contentful CMS by forking this repo on
          <Link fontWeight="bold" href="https://github.com/kengreeff/kengreeff" marginLeft="1">
            GitHub
          </Link>
        </Text>
      </Flex>

      <Flex
        flexDirection={['column', 'row']}
        fontSize="xs"
        paddingX={['6', "12"]}
        paddingBottom="4"
      >
        <Flex>
          <Link href="/posts">
            Blog
          </Link>

          <Text marginX="1">|</Text>

          <Link href="/projects">
            Projects
          </Link>

          <Text marginX="1">|</Text>

          <Link href="/health">
            Health
          </Link>

          <Text marginX="1">|</Text>

          <Link href="/recipes">
            Recipes
          </Link>

          <Text marginX="1">|</Text>

          <Link href="/about">
            About
          </Link>

          <Text marginX="1">|</Text>

          <Link href="/contact">
            Contact
          </Link>
        </Flex>

        <Text marginLeft={[0, "auto"]} marginTop={[4, 0]}>
          {new Date().getFullYear()} Greeff Consulting Pty Ltd
        </Text>
      </Flex>
    </Flex>
  )
}

export default Footer
