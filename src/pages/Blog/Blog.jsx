import React from "react";
import { Button } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'potrait',
    unit: 'in',
    format: [11.7,8.3]
};
const Blog = () => {
  return (
    <div   className="container mt-5 mb-5">
        
       <div className="print p-3" ref={ref}>
        <h1 className="mb-5 text-success">Question and Answers</h1>
        {/* Ques -1 */}
        <div className="question ">
          <p className="text-lg font-bold mb-3">
            Tell us the differences between uncontrolled and controlled
            components?
          </p>
        </div>
        <div className="answer">
          <p className="mb-5">
            Controlled components are controlled by its parents state, data and
            functionalities. I one word controlled component are controlled by
            its parent component. It depends on props
            <br />
            On the other hand uncontrolled component manage its own state.
          </p>
        </div>

        {/* Ques -2 */}
        <div className="question">
          <p className="text-lg font-bold mb-3">
            How to validate React props using PropTypes?
          </p>
        </div>
        <div className="answer">
          <p className="mb-5">
            Parent components can pass down any data as props to child
            components, we need to validate the data type to ensure the child
            gets what it expects using prop types. There is a package{" "}
            <strong>prop-types</strong>. By installing it we can do that.
          </p>
        </div>

        {/* Ques -3 */}
        <div className="question">
          <p className="text-lg font-bold mb-3">
            Tell us the difference between nodejs and express js?
          </p>
        </div>
        <div className="answer">
          <p className="mb-5">
            Node.js is Javascript runtime for easily building fast, scalable
            network applications. Express.js is the Node.js framework
          </p>
        </div>

        {/* Ques -4 */}
        <div className="question">
          <p className="text-lg font-bold mb-3">
            What is a custom hook, and why will you create a custom hook?
          </p>
        </div>
        <div className="answer">
          <p className="mb-5">
            Hooks are a new addition in React 16.8 and plus. They let us use
            state and other React features without writing a class. Building own
            Hooks lets extract component logic into reusable functions.
          </p>
        
      </div>
      </div>
      
      <ReactToPdf targetRef={ref} filename="blog.pdf" options={options} scale={0.8}>
        {({ toPdf }) => <Button variant="success" className="p-3" onClick={toPdf}><FaDownload></FaDownload> Download Blog</Button>}
      </ReactToPdf>
      
    </div>
  );
};

export default Blog;
