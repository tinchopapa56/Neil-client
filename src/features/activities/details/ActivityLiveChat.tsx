import { Formik, useFormik, Form, Field, FieldProps } from 'formik'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Box, Heading,  Loader } from 'semantic-ui-react'
import { Box, Heading,  Text, Stack, Divider, Avatar, Spinner, Button, Textarea, Flex } from '@chakra-ui/react'
import { useStore } from '../../../app/stores/store';
import * as Yup from 'yup';
import { formatDistanceToNow } from 'date-fns'
import I1 from "../../../../public/3.jpg"

interface Props {
    activityId: string;
}

export default observer(function ActivityDetailedChat({ activityId }: Props) {
    const { liveCommentStore } = useStore();

    useEffect(() => {
        if (activityId) {
            liveCommentStore.createHubConnection(activityId);
        }
        return () => {   liveCommentStore.clearComments(); }
    }, [liveCommentStore, activityId]);

    return (
        <>
            <Button w="100%" colorScheme={"teal"}> Press enter to post your comment</Button>
            <Box>
                <Stack divider={<Divider />}>
                    {liveCommentStore.comments.map(comment => (
                        <Stack direction="row" key={comment.id}>
                            <Avatar src={comment.image || `${I1}`} />
                            <Box>
                                <Stack align="center" direction="row" spacing={2}>
                                    <Text fontWeight={"bold"} as={Link} to={`/profiles/${comment.username}`}>
                                        {comment.displayName || "Name"} 
                                    </Text>
                                    <Text fontSize={"sm"} color="gray.400">({formatDistanceToNow(comment.createdAt)} ago)</Text>
                                </Stack>
                                <Text>{comment.body}</Text>
                            </Box>
                            
                        </Stack>
                    ))}
                </Stack>
                <Formik
                    onSubmit={(values, { resetForm }) =>{
                        console.log(values)
                        liveCommentStore.addComment(values).then(() => resetForm())
                    }}
                    initialValues={{ body: '' }}
                    validationSchema={Yup.object({
                        body: Yup.string().required()
                    })}
                >
                    {({ isSubmitting, isValid, handleSubmit, values, handleChange }) => (
                        <Form className='ui form'>
                            {/* <Textarea name="body"
                                value={values.body}
                                onChange={handleChange}
                                placeholder='Enter your comment'
                                size='sm'
                            /> */}
                            <Field name='body'>
                                {() => (
                                    <Box mt={2} position= 'relative'>
                                        {isSubmitting && <Spinner /> }
                                        <Textarea 
                                            name="body"
                                            value={values.body}
                                            onChange={handleChange}
                                            placeholder='Enter your comment'
                                            size='sm'
                                            onKeyPress={e => {
                                                if (e.key === 'Enter' && e.shiftKey) {
                                                    return;
                                                }
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    isValid && handleSubmit();
                                                }
                                            }}
                                        />
                                    </Box>
                                )}
                            </Field>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>

    )
})