import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";
import PrimaryBtn from "../atoms/PrimaryBtn";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import useSWR from "swr";
import fetcherPost from "../../../utils/fetcherPost.mjs";

export default function LoginForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [isError, setIsError] = useState(false);

  let navigate = useNavigate();

  const onSuccess = (data) => {
    setShouldFetch(false);
    setIsError(false);
    if (data.login) navigate("/home", { replace: true });
  }

  const onError = (error) => {
    setShouldFetch(false);
    if (error.response.status === 401) setIsError(true);
  }

  useSWR(shouldFetch ? [`http://localhost:3004/login`, { email, password }] : null, fetcherPost, {onSuccess, onError});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = () => {
    setShouldFetch(true);
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
      >
        {isError && <Alert severity={'error'} sx={{marginBottom: '10px', textAlign: 'left', fontSize: '0.8em'}}>Wrong username or password!</Alert>}
        <InputField fieldName={'loginEmail'} fieldType={'email'} fieldAttribute={'required'} fieldLabel={'Email'} isRequired={true} handleChange={handleEmailChange}/>
        <InputField fieldName={'loginPwd'} fieldType={'password'} fieldAttribute={'required'} fieldLabel={'Password'} isRequired={true} handleChange={handlePasswordChange}/>
        <PrimaryBtn buttonLabel={'Login'} onClickCallback={handleLoginFormSubmit}/>
      </Box>
      
  );
}

