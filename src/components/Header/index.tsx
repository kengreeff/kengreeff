import { useState } from 'react'
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

import MobileNavigation from '../MobileNavigation'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.100"
      justifyContent="flex-end"
      padding="5"
      width="100%"
    >
      <Button
        display={['block', 'none']}
        onClick={() => setIsNavOpen(!isNavOpen)}
        marginRight="4"
        variant="outline"
      >
        <HamburgerIcon />
      </Button>

      <Flex width={['100%', '30%']}>
        <form action="/search" style={{ width: '100%' }}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
            >
              <SearchIcon color="gray.300" />
            </InputLeftElement>

            <Input name="string" type="text" placeholder="Search" />
          </InputGroup>
        </form>
      </Flex>

      <MobileNavigation isOpen={isNavOpen} onClose={() => setIsNavOpen(!isNavOpen)} />
    </Flex>
  )
}

export default Header
