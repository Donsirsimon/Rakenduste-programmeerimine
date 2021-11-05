import React, {useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { Context } from "../store";
import {logoutUser} from "../store/actions";

const Navbar = () => {
    const[state, dispatch] = useContext(Context)
    const history = useHistory();
    const [key, setKey] = useState("");
    const [current, setCurrent] = useState(window.location.pathname)        

    useEffect(() => {
        if (window.location) {
            if( current !== window.location.pathname ) {
                setCurrent(window.location.pathname);
            }
        }
    }, [window.location, current]);

    const handleClick = ({ _item, key, _keyPath, _domEvent }) => {
        setCurrent(key);

    };

    const Logout = () => {
        dispatch(logoutUser())
        history.push("/login")
    }    




    return (
        <>
            <div className="logo">
                <Link to="/">
                    <img className="logo" src="reactlogo.png" alt="ReactLogo"  />
                </Link>

            </div>
            <Menu 
                theme="dark" 
                mode="horizontal"
                onClick={handleClick}
                selectedKeys={[current]}
                selectable={true}
            >
                
                {!state.auth.token ?
                    <>
                        <Menu.Item key="/register" ><Link to="/register">Register</Link></Menu.Item>
                        <Menu.Item key="/login" ><Link to="/login">Log in</Link></Menu.Item>
                    </>
                :
                    <>
                        <Menu.Item key="/"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="/posts"><Link to="/posts">Add Post</Link></Menu.Item>
                        <Menu.Item key="/viewposts"><Link to="/viewposts">View Posts</Link></Menu.Item>
                        <Menu.Item key="x"><Link to="/login" onClick={Logout}>Log out</Link></Menu.Item>
                    </>    
                }
            </Menu>
        </>
    

    )

}

export default Navbar;


