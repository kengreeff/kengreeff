import { Flex, Text } from '@chakra-ui/react'

type TimelineEntryProps = {
  children?: React.ReactNode,
  label: string,
  title: string,
}

const TimelineEntry = (props: TimelineEntryProps) => {
  const { children, label, title } = props

  return (
    <Flex
      border="1px solid"
      borderColor="gray.200"
      borderRadius="5px"
      flexDirection="column"
      paddingX="4"
      paddingY="2"
      minWidth="200px"
      marginLeft="4"
      marginBottom="2"
    >
      <Flex>
        <Text>{label}</Text>
        <Text marginX="1"> - </Text>
        <Text fontWeight="bold">{title}</Text>
      </Flex>
      
      {children && <Text>{children}</Text>}
    </Flex>
  )
}

export default TimelineEntry
