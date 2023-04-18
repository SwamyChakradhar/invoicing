import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Clients = () => {
    return (
    <Card>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className="container">
                <div className="py-4">
                    <h1>Clients</h1>
                    <table class="table border shadow">
                        <thead class="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <Link className="btn btn-primary pr-2">View</Link>
                                <Link className="btn btn-outline-primary pr-2">Edit</Link>
                                <Link className="btn btn-danger">Delete</Link>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <Link className="btn btn-primary">View</Link>
                                <Link className="btn btn-outline-primary">Edit</Link>
                                <Link className="btn btn-danger">Delete</Link>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>@the Bird</td>
                            <td>Thornton</td>
                            <td>
                                <Link className="btn btn-primary">View</Link>
                                <Link className="btn btn-outline-primary">Edit</Link>
                                <Link className="btn btn-danger">Delete</Link>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Card.Body>
    </Card>
    )
};

export default Clients;