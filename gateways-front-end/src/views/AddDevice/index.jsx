import { Component } from 'react'
import {Button, Card, Container, Form} from "react-bootstrap";
import { connect } from 'react-redux'
import { getGateways } from '../../redux/features/Gateways/GatewaysActions'
import { setNewDevice } from '../../redux/features/Devices/DevicesActions'
import {Navigate} from "react-router-dom";

class AddDevice extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deviceFields: {
                vendor: '',
                description: '',
                status: 0,
                gateway_id: ''
            },
            validated: false,
            navigateToDevices: false
        }
    }

    componentDidMount() {
        this.props.getGateways()
    }

    handelFields(event){
        const { name, value } = event.target;
        this.setState({
            deviceFields: {
                ...this.state.deviceFields,
                [name]: value
            }
        });
    }

    onSubmitFields(e){
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
            this.setState({ validated: true })
        }

        this.props.setNewDevice(this.state.deviceFields).then(() => this.setState({ navigateToDevices: true }))
    }

    render() {
        return (
            <>
                {
                    this.state.navigateToDevices ?
                        <Navigate to={'/devices'} replace /> :
                        <Container style={{ display: "flex", justifyContent: "center" }}>
                            <Card style={{ flex: 0.8, marginTop: 20 }}>
                                <Card.Header>Add new device</Card.Header>
                                <Card.Body>
                                    <Form noValidate validated={this.state.validated} onSubmit={(e) => this.onSubmitFields(e)}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Vendor</Form.Label>
                                            <Form.Control
                                                name='vendor'
                                                type="text"
                                                placeholder="Enter vendor name ..."
                                                onChange={(event) => this.handelFields(event)}
                                                value={this.state.deviceFields.vendor}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a vendor name.
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group className="mb-3">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                name='description'
                                                as="textarea"
                                                placeholder="Enter description ..."
                                                onChange={(event) => this.handelFields(event)}
                                                value={this.state.deviceFields.description}
                                                required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please enter a device description.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Gateways</Form.Label>
                                            <Form.Select
                                                name='gateway_id'
                                                required
                                                onChange={(event) => this.handelFields(event)}
                                            >
                                                <option value=''>Select Gateway ...</option>
                                                {
                                                    this.props.gateways
                                                    && this.props.gateways.map((gateway, i) => (
                                                        <option key={i} value={gateway?.id}>{gateway?.name}</option>
                                                    ))
                                                }
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                Please select a gateway.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group style={{ marginTop: 15 }}>
                                            <Form.Label>Status</Form.Label>
                                            <Form.Check
                                                name='status'
                                                type="switch"
                                                id="custom-switch"
                                                label="Check this switch"
                                                value={1}
                                                onChange={(event) => this.handelFields(event)}
                                            />
                                        </Form.Group>
                                        <Button
                                            style={{ marginTop: 20 }}
                                            variant="primary"
                                            type="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Container>
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    gateways: state.gateways.allGateways
});
export default connect(mapStateToProps, { getGateways, setNewDevice })(AddDevice)
