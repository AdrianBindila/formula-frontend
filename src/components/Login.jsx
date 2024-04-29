import {Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

export function Login() {
    const defaultUser = {username: "", password: ""}
    const navigator = useNavigate();

    const [loginUser, setLoginUser] = useState(defaultUser);

    async function login(loginData) {
        await axios.post("/auth/login", loginData)
            .then(res => {
                console.log(res);
                // navigator("/home");
            })
            .catch(err => console.log(err))
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setLoginUser(prev => {
            return {
                ...prev, [name]: value
            }
        })
    }

    function handleSubmit(event) {
        login(loginUser);
        setLoginUser(defaultUser);
        event.preventDefault();
    }

    return (<Container className="my-5">
        <h4>Please Login</h4>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId="username">
                <FormLabel>Username</FormLabel>
                <FormControl type="text" placeholder="Enter username" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl type="password" placeholder="Enter your password" onChange={handleChange}/>
            </FormGroup>
            <Button type="submit" variant="danger">SIGN IN</Button>
        </Form>
    </Container>)
}