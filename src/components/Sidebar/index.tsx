import NextLink from 'next/link'
import { Flex, ListItem, UnorderedList } from '@chakra-ui/react'

const Sidebar = () => {
  return (
    <Flex
      backgroundColor="black"
      display={['none', 'flex']}
      height="100vh"
      position="fixed"
      width="200px"
    >
      <UnorderedList
        color="white"
        fontSize="large"
        lineHeight={2.5}
        listStyleType="none"
        margin="0"
        padding="8"
        width="100%"
      >
        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/">
            Home
          </NextLink>
        </ListItem>
        
        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/projects">
            Projects
          </NextLink>
        </ListItem>

        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/health">
            Health
          </NextLink>
        </ListItem>

        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/about">
            About
          </NextLink>
        </ListItem>
        
        <ListItem>
          <NextLink href="/contact">
            Contact
          </NextLink>
        </ListItem>
      </UnorderedList>
    </Flex>
  )
}

export default Sidebar
