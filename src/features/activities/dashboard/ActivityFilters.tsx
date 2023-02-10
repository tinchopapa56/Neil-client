import { Heading, Button, Text, Input, Stack } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useStore } from '../../../app/stores/store'

 function ActivityFilters() {
  const {activityStore} = useStore()
  const [filter, setFilter] = useState()

  const handleSelector = (e: any) => {
    console.log(e)
    setFilter(e.target.value)
    console.log(filter)
  }
  
  return (
    <Stack>
        <Heading mt={6} as="h2">Filter by</Heading>
        <Text>Date</Text>
        <Input name="date"  type="date"
          onChange={(e) => activityStore.setPredicate('startdDate', e.target.value)} 
        />

        <Text>Category</Text>
          <Button colorScheme="teal" onClick={() => activityStore.setPredicate('all', 'true')}> {/*active={activityStore.predicate.has('isGoing')}*/}
            All
          </Button>
          <Button colorScheme="teal" onClick={() => activityStore.setPredicate('isGoing', 'true')}> {/*active={activityStore.predicate.has('isGoing')}*/}
            I´m going
          </Button>
          <Button colorScheme="teal" onClick={() => activityStore.setPredicate('isHost', 'true')}> {/*active={activityStore.predicate.has('isGoing')}*/}
            I´m Hosting
          </Button>
        {/* <Select value={filter} onChange={(e) => handleSelector(e)} placeholder='Select Category'>
            <option value='option1'>All</option>
            <option value='option2'>You are going</option>
            <option value='option3'>You are Hosting</option>
        </Select> */}
        <Button>Filter</Button>
        {/* <Calendar 
                onChange={(date) => setPredicate('startDate', date as Date)}
                value={predicate.get('startDate') || new Date()}
            />  */}
    </Stack>
  )
}

export default observer(ActivityFilters)

{/* <Menu vertical size='large' style={{ width: '100%', marginTop: 25 }}>
                <Header icon='filter' attached color='teal' content='Filters' />
                <Menu.Item 
                    content='All Activites' 
                    active={predicate.has('all')}
                    onClick={() => setPredicate('all', 'true')}
                />
                <Menu.Item 
                    content="I'm going" 
                    active={predicate.has('isGoing')}
                    onClick={() => setPredicate('isGoing', 'true')}
                />
                <Menu.Item 
                    content="I'm hosting" 
                    active={predicate.has('isHost')}
                    onClick={() => setPredicate('isHost', 'true')}    
                />
            </Menu>
            <Header />
            <Calendar 
                onChange={(date) => setPredicate('startDate', date as Date)}
                value={predicate.get('startDate') || new Date()}
            /> */}