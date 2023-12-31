import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub, FaLock, FaSignInAlt, FaCheck } from "react-icons/fa";

const Login = () => {
  const { signIn, googleProvider, funGithubProvider } = useContext(AuthContext);
  const [error, setError] = useState("");

  // Location Hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Generating Url
  const from = location.state?.from?.pathname || "/";

  // Form Sign In
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    googleProvider()
      .then((result) => {
        const googleUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("Google sign in error", error);
      });
  };

  // Github  Sign In
  const handleGitHubSignIn = () => {
    funGithubProvider()
      .then((result) => {
        const githubUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className=" mx-auto mt-5 mb-5">
      <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12 mx-auto">
        <h2 className="text-success mb-3 d-flex align-items-center"><FaSignInAlt></FaSignInAlt> &nbsp; Please Login</h2>
        <Form
          onSubmit={handleLogin}
          className="border border-2 border-success p-5"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              className="py-3"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className="py-3"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="success" type="submit" className="py-3">
            <FaCheck></FaCheck> Login
          </Button>
          <br />
          <Form.Text className="text-secondary ">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-danger">
            <p>{error}</p>
          </Form.Text>

          <div className="mt-5">
            <Button
              onClick={handleGoogleSignIn}
              variant="outline-primary"
              className="d-block mb-2 w-100 p-3"
            >
              <FaGoogle></FaGoogle> Sign in with Google
            </Button>
            <Button
              onClick={handleGitHubSignIn}
              className="d-block mb-2 w-100 p-3"
              variant="outline-secondary"
            >
              <FaGithub></FaGithub> Sign in with Github
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
