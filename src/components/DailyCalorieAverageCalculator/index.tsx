import { Flex, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

import useDailyCalorieAverageCalculator from '@/hooks/useDailyCalorieAverageCalculator'

const DailyCalorieAverageCalculator = () => {
  const calculatorPayload = useDailyCalorieAverageCalculator()
  const {
    callbacks: {
      setState,
    },
    dailyAverage,
    isValid,
    state: {
      friday,
      goal,
      monday,
      saturday,
      sunday,
      thursday,
      tuesday,
      wednesday,
    },
    suggestedCalories: {
      lower,
      upper,
    },
  } = calculatorPayload

  return (
    <Flex flexDirection="column">
      <Flex flexDirection={['column', 'row']}>
        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Monday</FormLabel>
          <Input
            onChange={e => setState({ monday: Number(e.target.value) })}
            type='number'
            value={monday || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Tuesday</FormLabel>
          <Input
            onChange={e => setState({ tuesday: Number(e.target.value) })}
            type='number'
            value={tuesday || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Wednesday</FormLabel>
          <Input
            onChange={e => setState({ wednesday: Number(e.target.value) })}
            type='number'
            value={wednesday || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Thursday</FormLabel>
          <Input
            onChange={e => setState({ thursday: Number(e.target.value) })}
            type='number'
            value={thursday || ''}
          />
        </FormControl>
        
        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Friday</FormLabel>
          <Input
            onChange={e => setState({ friday: Number(e.target.value) })}
            type='number'
            value={friday || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Saturday</FormLabel>
          <Input
            onChange={e => setState({ saturday: Number(e.target.value) })}
            type='number'
            value={saturday || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop={["2", 0]}>
          <FormLabel>Sunday</FormLabel>
          <Input
            onChange={e => setState({ sunday: Number(e.target.value) })}
            type='number'
            value={sunday || ''}
          />
        </FormControl>
      </Flex>

      <Flex borderTopWidth="1px" flexDirection="column" marginTop="4" paddingTop="4">
        <FormControl marginRight={[0, "1"]}>
          <FormLabel>Daily Average</FormLabel>
          <Input
            onChange={e => setState({ monday: Number(e.target.value) })}
            type='number'
            value={dailyAverage || ''}
          />
        </FormControl>

        <FormControl marginRight={[0, "1"]} marginTop="2">
          <FormLabel>Goal</FormLabel>
          <Select
            onChange={e => setState({ goal: e.target.value })}
            value={goal || ''}
          >
            <option value="gain">Gain Weight</option>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
          </Select>
        </FormControl>

        {isValid && (
          <FormControl marginRight={[0, "1"]} marginTop="2">
            <FormLabel>Suggested Daily Goal</FormLabel>
            <Input
              type='text'
              value={goal === 'maintain' ? lower : `${lower} - ${upper}`}
            />
          </FormControl>
        )}
      </Flex>
    </Flex>
  )
}

export default DailyCalorieAverageCalculator
