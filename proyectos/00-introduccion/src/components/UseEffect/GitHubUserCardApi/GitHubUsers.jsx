import React, { useEffect, useState } from 'react'
import fetchGitHubUsers from '../../../helpers/fetchGitHubUsers';
import CardGitHub from './CardGitHub';
import Spinner from './Spinner';
import Modal from './Modal';

const GitHubUsers = () => {

//hooks

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedUser, setSelectedUser] = useState(null)


const handlerOpenModal =(user) =>{
    setSelectedUser(user);
}

const handlerCloseModal=() =>{
    setSelectedUser(null);
}



useEffect(() => {
    const fetchData = async () => {
            try{
            
                const data = await fetchGitHubUsers();
                setUsers(data);
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
                
                
            }catch (error) {
            setLoading(true);
        }
    }
    fetchData();
    }, [])


  return (
        <div className='mx-auto max-w-[75%] text-center relative'>
            <h1 className='text-4xl font-bold mb-8 mt-2'>Usando UseEffect para realizar un fetch de la api gitHub</h1>
            {loading ? (<Spinner/>) : (
                <>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto relative'>
                {users.map(user => (
                    <CardGitHub 
                    key = {user.id}
                    avatar_url = {user.avatar_url}
                    login ={user.login}
                    html_url={user.html_url}
                    openModal = {()=>handlerOpenModal(user)}></CardGitHub>
                ))}
            </div>
            <Modal isopen = {!!selectedUser} imgUrl = {selectedUser?.avatar_url} closeModal = {handlerCloseModal}></Modal>
            </>
            )}
        </div>   
  )
}

export default GitHubUsers