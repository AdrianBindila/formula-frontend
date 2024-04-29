import {Button, Container} from "react-bootstrap";
import axios from "axios";

export function Home() {
    async function getCurrentUser() {
        await axios.get("/user")
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <Container className="my-5">
            <h2>This is your main page.</h2>
            <p>Here you can see your betting history, the upcoming race and more!</p>
            <Button variant="danger" onClick={getCurrentUser}>Click me</Button>
        </Container>
    )
}
