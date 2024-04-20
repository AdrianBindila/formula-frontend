import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export function Login() {

    const navigator = useNavigate();
    return (<Container className="my-5">
            <p>Please Login</p>
            <Button variant="danger" onClick={() => navigator("/home")}>SIGN IN</Button>
        </Container>)
}