import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/Interfaces";
import { Link, Avatar} from '@chakra-ui/react';
import ProfileCard from "../../Profiles/ProfileCard";

import {Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody,PopoverFooter,PopoverArrow,PopoverCloseButton,PopoverAnchor} from '@chakra-ui/react'

interface Props {
    act: Activity
}

const ActivityAttendees: React.FC<Props> = ({act}) =>{

    return(
        <>
            {act.attendees.map(attendee => (
                <Popover trigger={'hover'} key={attendee.username}>
                <PopoverTrigger>
                    <Avatar 
                        as={Link} href={`/profiles/${attendee.username}`}
                        cursor={"pointer"} size='sm' _hover={{   transform: "scale(1.2)", }}
                        border={attendee.following ? "2px orange solid" :""}
                        name= { attendee.username ? `${attendee.username}` : 'TemplateName'} 
                        src={ attendee.image ? `${attendee.image}` : 'https://bit.ly/dan-abramov'} 
                    />
                </PopoverTrigger>
                <PopoverContent>
                    {/* <PopoverArrow /> */}
                    {/* <PopoverCloseButton /> */}
                    {/* <PopoverHeader>Attendee: </PopoverHeader> */}
                    <PopoverBody w={40}>
                        <ProfileCard profile={attendee} />
                    </PopoverBody>
                </PopoverContent>
                </Popover>
                
            ))}
        </>
    )
}


export default observer(ActivityAttendees);