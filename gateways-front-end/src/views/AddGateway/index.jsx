import { useState } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { setNewGateway } from "../../redux/features/Gateways/GatewaysActions";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function AddGateway(){
    const [gatewayFields, setGatewayFields] = useState({
        name: '',
        ip: ''
    });
    const { name, ip } = gatewayFields;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handelFields = (event) => {
        const { name, value } = event.target;
        setGatewayFields(() => {
            return {
                ...gatewayFields,
                [name]: value
            };
        });
    }

    const onSubmitFields = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
            return setValidated(true);
        }

        dispatch(setNewGateway(gatewayFields)).then(() => navigate('/gateways'))
    }

    return(
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ flex: 0.8, marginTop: 20 }}>
                <Card.Header>Add new gateway</Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={onSubmitFields}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gateway name</Form.Label>
                            <Form.Control
                                name='name'
                                type="text"
                                placeholder="Enter gateway name ..."
                                onChange={handelFields}
                                value={name}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a gateway name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>IPv4</Form.Label>
                            <Form.Control
                                name='ip'
                                type="text"
                                placeholder="Enter IPv4 ..."
                                onChange={handelFields}
                                value={ip}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a gateway IPv4.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}
