import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFlagCheckered} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function LandingPage() {
    async function start() {
        await axios.get("/start")
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (<Container className="my-5">
        <h2>Welcome to Formula Friends!</h2>
        <p>Since modern F1 is all about hearing the Dutch National Anthem every Sunday, how about we shake things up
            and try to see which driver ends up on P10?</p>
        <p>Note: This website is a work in progress. <b>Invitation only</b>. </p>
        <p>Liberty Media don't sue pls.</p>
        <p> © Adrian-Ioan Bindila 2024</p>
        <Button variant="danger" onClick={() => {
            start()
        }}><FontAwesomeIcon icon={faFlagCheckered}/> START</Button>
    </Container>);
}