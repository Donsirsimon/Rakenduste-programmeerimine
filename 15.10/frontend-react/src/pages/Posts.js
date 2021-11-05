import { useContext, useState, useRef } from "react";
import { Context } from "../store";
import { addPost } from "../store/actions";
import { Form, Input, Button, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */





function Posts() {
  const [form] = Form.useForm();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const contentRef = useRef(null);
  let history = useHistory();
 
  
  console.log(state.auth)

  if(state.auth.token === null) {
    history.push('/login')
  }
  // Ilma dependency massivita ehk ilma [] kutsub välja igal renderdusel
  // tühja massiivi dependencyna esimest korda
  // saab ka kutsuda teatud state muutustel välja
  /* useEffect(() => {
    dispatch(updatePosts([
      {
        id: 1,
        title: "Test-prefetched-array-1"
      },
      {
        id: 2,
        title: "Test-prefetched-array-2"
      },
      {
        id: 3,
        title: "Test-prefetched-array-3"
      },
      {
        id: 4,
        title: "Test-prefetched-array-4"
      },
    ]))
  }, [])
 */
  // Või võite panna eraldi nupu, et "Get latest from database" (Sync)

  const handleSubmit = (e) => {
  

    setTitle("");
    setContent("");
    

    addNewPost();

    if (inputRef.current) inputRef.current.focus();
  };


  const addNewPost = async () => {
    const newPost = {
     
      title,
      content,
      author: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
    };

    console.log(newPost);
    // Salvestame andmebaasi ja kui on edukas, 
    // siis teeme dispatchi ja uuendame state lokaalselt


    const response = await fetch('http://localhost:8081/api/post/postcreate/', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
          'Content-Type': 'application/json'
      
      
        },

      
    }) 
    if (response.ok){
      dispatch(addPost(newPost));
      form.resetFields();
      history.push('/viewposts');
    };

    
  };


  return (

    <div>
      <h1>Add Post</h1>
      <Row className="row"  justify="center" align="center">
        <Col flex="auto" justify= "center" align="center"> 
          <Form form = {form} {...layout}  className="add-post-form" name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages}>
            <Form.Item
              name= "title"
              label="Title"
              ref={inputRef}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            
            <Form.Item 
              name= "content" 
              label="Content"
              ref={contentRef}
              value={title}
              onChange={(e) => setContent(e.target.value)}
              autoFocus
              rules={[
                {
                  required: true,
                },
              ]}
              
              >
              <Input.TextArea rows = "5"/>
            </Form.Item>
              
            

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          </Col>
        </Row>
    
     {/*  {state.posts.data.map((e) => (
        <li key={e.id}>
          {e.id} {e.title}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(removePost(e.id))}
          >
            &#128540;
          </span>
        </li>
      ))} */}
    </div>
  );
}

export default Posts;
