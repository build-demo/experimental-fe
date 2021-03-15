import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";
import {getParameterByName} from '../../lib/utils'
import { config } from "../../config";

const useForm = (validate) => {
  const userEmail = getParameterByName("email")
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your url for API
    const url = config.backendUrl+'/user/registerUser';
    console.log(values)
    axios
        .post(url, {
          "email": userEmail,
          "githubId": values['GithubId'],
          "proficientLanguages": values['proficientLanguages'].split(',').map(Function.prototype.call, String.prototype.trim)
        })
        .then(() => {
          setShouldSubmit(true);
        });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon("success");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
