import { React, useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
    useGetUserDetailsQuery,
    useUpdateUserDetailsMutation
} from '../../slices/usersApiSlice';

const UserEditScreen = () => {

    const { id: userId } = useParams();
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);


    const {data:user, isLoading, refetch, error} = useGetUserDetailsQuery(userId);
    const [updateUser, {isLoading: loadingUpdate}] = useUpdateUserDetailsMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            setName(user.name);
            setEmail(user.email);
            setIsAdmin(user.isAdmin);
        }
      },[user]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await updateUser({userId, name, email, isAdmin});
            toast.success('User updated successfully');
            refetch();
            navigate('/admin/userlist');
        } catch (err) {
            toast.error(err?.data?.message || err.error);
        }
    }
  
  return (
    <>
      <Link to="/admin/userlist" className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        { isLoading ? <Loader /> : error  ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                    type='text'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='isAdmin'>
                    <Form.Check
                    type='checkbox'
                    label='Is Admin'
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    ></Form.Check>
                </Form.Group>
                <Button
                variant='primary'
                type='submit'
                className='my-2'
                >Update</Button>
            </Form>
        )}
      </FormContainer>
    </>
  )
}

export default UserEditScreen