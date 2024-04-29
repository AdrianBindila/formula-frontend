import {Button, Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import axios from "axios";
import {useState} from "react";

export function Register() {
    const defaultUser = {
        email: "", username: "", password: "", confirmPassword: ""
    };
    const [registerUser, setRegisterUser] = useState(defaultUser);

    async function register(user) {
        await axios.post("/auth/register", user)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setRegisterUser(prev => {
            return {
                ...prev, [name]: value,
            }
        })
    }

    function handleSubmit(event) {
        register(registerUser);
        setRegisterUser(defaultUser);
        event.preventDefault();
    }

    return (<Container className="my-5">
        <h2>Please register here!</h2>
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId="email">
                <FormLabel>Email address</FormLabel>
                <FormControl type="email" placeholder="Enter your email address" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="username">
                <FormLabel>Username</FormLabel>
                <FormControl type="text" placeholder="Enter your username" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="password">
                <FormLabel>Password</FormLabel>
                <FormControl type="password" placeholder="Enter your password" onChange={handleChange}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="confirmPassword">
                <FormLabel>Confirm password</FormLabel>
                <FormControl type="password" placeholder="Confirm your password" onChange={handleChange}/>
            </FormGroup>
            <Button type="submit" variant="danger">REGISTER</Button>
        </Form>
    </Container>)
}