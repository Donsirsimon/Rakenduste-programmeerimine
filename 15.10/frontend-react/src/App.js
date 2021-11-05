import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from 'antd';
import ShowMagic from "./components/ShowMagic";
import Posts from "./pages/Posts";
import ViewPosts from "./pages/ViewPosts";
import 'antd/dist/antd.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EditPost from "./pages/EditPost";



const { Header, Footer, Content } = Layout;

function App() {
  
  return (

    <BrowserRouter>
      <Layout>
        <Header className= "header">
          <Route path="/" component={Navbar}/>
        </Header>
        <Content style={{ padding: ' 50px'  }}>
          <div className="site-layout-content">
            
            <Switch>
              <Route exact path="/" component={ShowMagic} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/viewposts" component={ViewPosts} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/editpost" component={EditPost} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}> Rakenduste programmeerimine 2021 Ken Pikanõmme
        </Footer>
      </Layout>    
    </BrowserRouter>
  );
}

export default App;


