import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

interface Iprop {
  blogs: IBlog[];
}

function AppTable(props: Iprop) {
  const { blogs } = props;
  console.log(blogs);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Author</th>
          <th>Title</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {blogs?.map((blog) => {
          return (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>{blog.author}</td>
              <td>{blog.title}</td>
              <td>
                <Button variant="warning">Edit</Button>
                <Button className="mx-3">View</Button>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default AppTable;
