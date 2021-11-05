import { useState, useEffect, useContext } from 'react';
import { Table, Popconfirm, Space } from 'antd';
import { updatePosts, removePost } from '../store/actions';
import { Context } from "../store";
import { useHistory } from "react-router-dom";


const ViewPosts = () => {
    const [state, dispatch] = useContext(Context);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    if(state.auth.token === null) {
        history.push('/login')
    }

    useEffect (() => {
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then(async (data) =>{
            console.log(data);
            await dispatch(updatePosts(data))
            console.log(state.posts.data)
            setIsLoading(false);
        }); 
    },[]);  



    const columns = [
        {
        title: 'Title',
        dataIndex: 'title',
        editable: true,
        },
        {
        title: 'Content',
        dataIndex: 'content',
        editable: true,
        },
        {
        title: 'Author',
        dataIndex: 'author',
        editable: false,
        },
        {
        title: 'Date',
        dataIndex: 'createdAt',
        editable: false,
        },
        {
            title: 'Action',
            key: 'key',
            render: (_,record) => (
                <div className= "action">
                <Space>   
                <Popconfirm title="Sure to delete?" onConfirm= { () => handleDelete(record._id)}>
                <a>Delete</a>
                </Popconfirm>
                
                <Popconfirm title="Sure to edit?" onConfirm= { () => handleEdit(record._id, record.title, record.content, record.author)}>
                <a>Edit</a>
                </Popconfirm>
                </Space>
                </div>
            ),
        }

    
    ];



    









    async function handleDelete (id)  {
        dispatch(removePost(id));
        await fetch('http://localhost:8081/api/post/delete/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });    
        
        fetch('http://localhost:8081/api/post').then(res => {
            return res.json();
        }).then((data) =>{
            console.log(data);
            dispatch(updatePosts(data));
        })
    }



    function handleEdit(ID, TITLE, CONTENT, AUTHOR ){
        console.log(ID);
        console.log(TITLE);
        console.log(CONTENT);
        history.push("/editpost", {id: ID, title: TITLE, content: CONTENT, author: AUTHOR})
            
    }


    if (isLoading) {
        return (<div>Loading...</div>)
    } 



    return(
        <div>
            <h1>Posts</h1>
            <Table 
                dataSource={state.posts.data} 
                columns={columns} 
                rowKey="_id" 
                bordered
            />
        </div>
    )
}    
export default ViewPosts;