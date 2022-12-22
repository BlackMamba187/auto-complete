import { useState } from "react";
import { Data } from "./data/data";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [searchQuery, setSearchQuery] = useState("");

	const [searchParam] = useState(["first_name", "last_name", "email"]);

	function search(items: any[]) {
		return items.filter((item) => {
			return searchParam.some((newItem) => {
				return (
					item[newItem]
						.toString()
						.toLowerCase()
						.indexOf(searchQuery.toLowerCase()) > -1
				);
			});
		});
	}

	const onChange = (Value: string) => {
		setSearchQuery(Value.replace(" ", ""));
	};

	return (
		<div>
			<Container>
				<h1 className="text-center mt-4">User List</h1>

				<h2 className="text-center my-4">
					Search feature for first & last name as well as email address
				</h2>
				<Form>
					<InputGroup className="my-3">
						<Form.Control
							value={searchQuery}
							onChange={(e) => onChange(e.target.value)}
							placeholder="Search Users"
						/>
					</InputGroup>
				</Form>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Gender</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{search(Data).map((item, index) => (
								<tr key={index}>
									<td>{item.first_name}</td>
									<td>{item.last_name}</td>
									<td>{item.gender}</td>
									<td>{item.email}</td>
								</tr>
							))}
					</tbody>
				</Table>
			</Container>
		</div>
	);
}

export default App;
