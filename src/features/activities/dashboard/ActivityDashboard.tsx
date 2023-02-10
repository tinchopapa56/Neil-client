import { Wrap, Stack, Box,} from '@chakra-ui/react'
import ActivityList from "./ActivityList";
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { PagingParams } from '../../../app/models/pagination';
import InfiniteScroll from 'react-infinite-scroller';
import ActivityFilters from './ActivityFilters';
import { toast } from 'react-toastify';



const ActivityDashboard: React.FC = () => {

    const {activityStore} = useStore();
    const {pagination} = activityStore;
    const [loadingNext, setLoadingNext] = useState<boolean>(false) 


    const handlePaging = () => {
        toast('🦄 Loading more events', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setLoadingNext(true);
        activityStore.setPagingParams(
            new PagingParams(activityStore.pagination!.currentPage + 1)
        )
        activityStore.loadActivities().then(() => setLoadingNext(false));
    }

    useEffect(()=> {
        if(activityStore.activities.length < 1)  activityStore.loadActivities();
    }, [activityStore.activities.length , activityStore.loading])


    // console.log("desde ACT dashboard: procces.env es", process.env.REACT_APP_API_URL);

    return(
        <Box>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={handlePaging}
                    hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                >
                    <Stack direction="row" align={"flex-start"}>
                        <Wrap align={"flex-start"} spacing="30px">
                            <ActivityList />
                        </Wrap>
                        <Stack spacing={4}>
                            <ActivityFilters />
                        </Stack>
                    </Stack>
                </InfiniteScroll>
               
            {/* )} */}
        </Box>
        
    )
}
export default observer(ActivityDashboard);