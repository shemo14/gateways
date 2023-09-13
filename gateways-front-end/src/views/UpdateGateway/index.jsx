import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getGateway, updateGateway} from "../../redux/features/Gateways/GatewaysActions";
import {Button, Card, Container, Form} from "react-bootstrap";

export default function UpdateGateway(){
    const {id} = useParams();
    const gateway = useSelector(state => state.gateways.gateway)
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

        dispatch(updateGateway(gatewayFields)).then(() => navigate('/gateways'))
    }

    useEffect(() => {
        dispatch(getGateway(id))
    }, [id])

    useEffect(() => {
        setGatewayFields({name: gateway?.name, ip: gateway?.IPv4, id})
    }, [gateway])

    return(
        <Container style={{ display: "flex", justifyContent: "center" }}>
            <Card style={{ flex: 0.8, marginTop: 20 }}>
                <Card.Header>Update {gateway?.name} gateway</Card.Header>
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
