import NextLink from 'next/link'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

type MobileNavigationProps = {
  isOpen: boolean,
  onClose: VoidFunction,
}

const MobileNavigation = (props: MobileNavigationProps) => {
  const { isOpen, onClose } = props

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Navigation</DrawerHeader>

        <DrawerBody>
          <UnorderedList
            fontSize="x-large"
            lineHeight={2}
            listStyleType="none"
            margin="0"
            width="100%"
          >
            <ListItem borderBottom="1px solid" borderColor="gray.100">
              <NextLink href="/">
                Home
              </NextLink>
            </ListItem>

            <ListItem borderBottom="1px solid" borderColor="gray.100">
              <NextLink href="/posts">
                Blog
              </NextLink>
            </ListItem>
            
            <ListItem borderBottom="1px solid" borderColor="gray.100">
              <NextLink href="/projects">
                Projects
              </NextLink>
            </ListItem>

            <ListItem borderBottom="1px solid" borderColor="gray.100">
              <NextLink href="/health">
                Health
              </NextLink>
            </ListItem>

            <ListItem borderBottom="1px solid" borderColor="gray.100">
              <NextLink href="/recipes">
                Recipes
              </NextLink>
            </ListItem>

            <ListItem borderBottom="1px solid" borderColor="gray.100">
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNavigation
