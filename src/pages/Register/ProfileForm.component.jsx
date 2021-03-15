import React, { useContext } from "react";
import { Form, Col, Button, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { updateMentor } from "../../api/api";

// import { AuthContext } from "../../contexts/AuthContext";
// import { updateUser } from "../../api/api";

const ProfileForm = () => {
  const schema = Yup.object().shape({
    firstname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    lastname: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    email: Yup.string().email("Invalid email"),
    phonenumber: Yup.string(),
    age: Yup.number(),
    height: Yup.number(),
    weight: Yup.number(),
    about: Yup.string(),
  });

  //   const {
  //     auth: { token },
  //   } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await updateMentor(data);
    // const finalData = { ...data, username: data.firstname };
    // try {
    //   const resp = await updateUser(finalData, token);
    //   console.log(resp, "this is resp");
    //   if (resp.data) {
    //     toast.info("user profile updated");
    //   } else {
    //     toast.error("Unable to update user profile");
    //   }
    // } catch (error) {
    //   toast.error("Unable to update user profile");
    // }
  };
  return (
    <Form style={{ textAlign: "center" }} onSubmit={handleSubmit(onSubmit)}>
      <p style={{ textAlign: "center" }}>Edit Profile</p>

      <Form.Row>
        <Form.Group
          style={{ textAlign: "center" }}
          as={Col}
          sm="6"
          controlId="username"
        >
          <Form.Label>Nick name</Form.Label>
          <Form.Control
            type="text"
            name="NickName"
            default="jida"
            placeholder="Nick Name"
            ref={register}
          ></Form.Control>
          {errors.firstname && (
            <p className="error-message">{errors.firstname.message}</p>
          )}
        </Form.Group>

        <Form.Group
          style={{ textAlign: "center" }}
          as={Col}
          sm="6"
          controlId="formGridEmail"
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            default="jakazzy@gmail.com"
            placeholder="Enter email"
            ref={register}
          ></Form.Control>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </Form.Group>
      </Form.Row>

      {["checkbox"].map((type) => (
        <div
          key={`custom-inline-${type}`}
          className="mb-3"
          style={{ textAlign: "left" }}
        >
          <Form.Check
            custom
            inline
            label="JavaScript/TypeScript"
            type={type}
            id={`custom-inline-${type}-1`}
          />
          <Form.Check
            custom
            inline
            label="Python (Web)"
            type={type}
            id={`custom-inline-${type}-2`}
          />
          <Form.Check
            custom
            inline
            label="Python/Julia (Data, AI/ML)"
            type={type}
            id={`custom-inline-${type}-3`}
          />
          <Form.Check
            custom
            inline
            label="Ruby"
            type={type}
            id={`custom-inline-${type}-3`}
          />
        </div>
      ))}

      <Form.Group controlId="formGridAbout">
        <Form.Label>About</Form.Label>
        <Form.Control
          placeholder="Lorem ipsum dolor sit amet consectetur."
          type="text"
          name="about"
          default="Lorem ipsum dolor sit amet consectetur."
          ref={register}
        ></Form.Control>
        {errors.about && (
          <p className="error-message">{errors.about.message}</p>
        )}
      </Form.Group>

      <Button
        style={{
          color: "white",
          backgroundColor: "rgb(82, 185, 192)",
          border: "rgb(82, 185, 192)",
        }}
        type="submit"
      >
        Update Profile
      </Button>
      <ToastContainer position="top-center"></ToastContainer>
    </Form>
  );
};

export default ProfileForm;
