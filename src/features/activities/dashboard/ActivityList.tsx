import { Heading,  Divider, WrapItem,  Container, Skeleton,} from '@chakra-ui/react';

import { useStore } from '../../../app/stores/store';
import ActivityCard from './ActivityCard';


const ActivityList: React.FC = () => {

  const {activityStore} = useStore();

  return (
    <Container maxW={'7xl'} p="6" w={"100%"}>
      <Heading as="h1">All Activities</Heading>
      <Divider marginTop="5" />
    {/* <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}> */}
        <WrapItem flexWrap="wrap" maxW={800} width={"100%"} gap="15px">

          {activityStore.loading ? (
            <>
              <Skeleton w={250} h={250} />
              <Skeleton w={250} h={250} />
              <Skeleton w={250} h={250} />
              <Skeleton w={250} h={250} />
              <Skeleton w={250} h={250} />
              <Skeleton w={250} h={250} />
            </>
            ) : (
            activityStore.activities?.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          )}
          
        </WrapItem>

    </Container>
  );
};

export default ActivityList;