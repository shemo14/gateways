import { Component } from 'react'
import { Button, Container, Modal, Table, Badge } from 'react-bootstrap';
import { FaPlusSquare, FaEdit, FaTrashAlt } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import { getDevices, deleteDevice } from '../../redux/features/Devices/DevicesActions'

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedDevice: null,
        };
    }

    componentDidMount() {
        this.props.getDevices()
    }
    onDeleteDevice(device){
        this.setState({ showModal: true, selectedDevice: device })
    }
    confirmDeleteDevice(){
        this.props.deleteDevice(this.state.selectedDevice?.id).then(() => {
            this.setState({ showModal: false, selectedDevice: null })
            this.props.getDevices()
        })
    }

    render() {
        return (
            <Container style={{ padding: 20 }}>
                <div>
                    <h3 style={{ display: "inline", marginRight: 15 }}>All Devices</h3>
                    <Link to='/add-device'>
                        <FaPlusSquare color={'green'} size={30} />
                    </Link>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Vendor</th>
                            <th>Description</th>
                            <th>Device</th>
                            <th>Status</th>
                            <th>Date created</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.devices && this.props.devices.map((device, i) => (
                                <tr key={i}>
                                    <td>{device.id}</td>
                                    <td>{device.vendor}</td>
                                    <td>{device.description}</td>
                                    <td>{device.gateway}</td>
                                    <td>
                                        <Badge bg={device.status ? "success" : "secondary"}>{device.status ? 'Online' : 'Offline'}</Badge>
                                    </td>
                                    <td>{device.created_at}</td>
                                    <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Link to={`/update-device/${device.id}`} style={{ marginRight: 10 }}>
                                            <FaEdit />
                                        </Link>
                                        <Link to="#" onClick={() => this.onDeleteDevice(device)}>
                                            <FaTrashAlt color={'red'} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
                <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deleting {this.state.selectedDevice?.vendor}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure, Do you want to delete {this.state.selectedDevice?.vendor} device ?!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({ showModal: false })}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => this.confirmDeleteDevice()}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}


const mapStateToProps = (state) => ({
    devices: state.devices.allDevices
});
export default connect(mapStateToProps, { getDevices, deleteDevice })(Devices);
