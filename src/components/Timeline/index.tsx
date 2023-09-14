import { Flex } from '@chakra-ui/react'

import TimelineEntry from './TimelineEntry'

type TimelineProps = {
  boxProps?: object,
  children: React.ReactNode,
}

const Timeline = (props: TimelineProps) => {
  const { boxProps, children } = props

  return (
    <Flex
      _before={{
        backgroundColor: 'blue.200',
        bottom: 0,
        border: '1px solid white',
        borderRadius: '5px',
        content: '""',
        position: 'absolute',
        top: 0,
        width: '6px',
      }}
      alignItems="flex-start"
      flexDirection="column"
      position="relative"
      width="auto"
      {...boxProps}
    >
      {children}
    </Flex>
  )
}

Timeline.Entry = TimelineEntry

export default Timeline
