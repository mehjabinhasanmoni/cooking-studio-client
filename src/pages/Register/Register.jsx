import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Location Hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Generating Url
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    const name = event.target.name.value;
    const photourl = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password, name);

    // Create User  and update user name & photo

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");
        event.target.reset();
        setSuccess("User has created successfully");

        updateProfileUser(result.user, name, photourl);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // Update Profile
  const updateProfileUser = (user, name, photourl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photourl,
    })
      .then(() => {
        console.log("username & Photo updated");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-25 mx-auto mt-5 mb-5">
      <h1>Please Register</h1>
      <Form
        onSubmit={handleRegister}
        className="border border-2 border-success p-5"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo URL"
           
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
         
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button variant="success" disabled={!accepted} type="submit">
          Register
        </Button>
        <br />
        <br />
        <Form.Text className="text-secondary">
          Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
        <br />
        <br />
        <Form.Text className="text-success">
          <h5>{success}</h5>
        </Form.Text>
        <Form.Text className="text-danger">
          <p>{error}</p>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
