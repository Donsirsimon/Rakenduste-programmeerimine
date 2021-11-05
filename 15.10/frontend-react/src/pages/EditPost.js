import { useContext, useState, useRef } from "react";
import { Context } from "../store";
import { updatePosts } from "../store/actions";
import { Form, Input, Button, Row, Col } from 'antd';
import {useHistory, useLocation} from 'react-router-dom'


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





function EditPost() {
  const [form] = Form.useForm();
  const [title, setTitle] = useState(useLocation().state.title);
  const [content, setContent] = useState(useLocation().state.content);
  const [author, setAuthor] = useState(useLocation().state.author);
  let history = useHistory();

  const [state, dispatch] = useContext(Context);
  const inputRef = useRef(null);
  const contentRef = useRef(null);
  
  
  const id = useLocation().state.id;

  if(state.auth.token === null) {
    history.push('/login')
  }



  const handleSave = async (e) => {

      const itemSubmitted={
        id: id,
        title: title,
        content: content,
        author: `${state.auth.user.firstName} ${state.auth.user.lastName}`,
        createdAt: Date.now(),
        __v: 0,
      }
      console.log(itemSubmitted);
      const response = await fetch('http://localhost:8081/api/post/update/' + id, {
          method: 'PUT',
          body: JSON.stringify(itemSubmitted),
          headers: {
              'Content-Type':'application/json'
          }
      });
      const data = await response;
    
        console.log(data)
        console.log(data.message)
      if(response.ok){
            dispatch(updatePosts(itemSubmitted));
            history.push('/viewposts');
        };
        
        
    

        
      
      form.resetFields();




   // dispatch(addPost(newPost));
  };

  //console.log({ inputRef });

  return (

    <div>
      <h1>Edit post</h1>
      <Row className="row"  justify="center" align="center">
        <Col flex="auto" justify= "center" align="center"> 
          <Form form = {form} {...layout}  className="add-post-form" name="nest-messages" onFinish={handleSave} validateMessages={validateMessages}>
            <Form.Item
              name= "title"
              label="Title"
              //ref={inputRef}
              value={title}
              initialValue= {title}
              placeholder= "title here"
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
              //ref={contentRef}
              value={content}
              initialValue={content}
              placeholder="Content here"
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
                Save
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

export default EditPost;
