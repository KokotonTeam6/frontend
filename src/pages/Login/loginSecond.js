import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../../components/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 130px;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 30px;
`;

const Input = styled.input`
    width: 320px;
    height: 40px;
    padding: 12px 40px 12px 20px;
    font-size: 18px;
    border-radius: 8px;
    border: 2px solid #a5b68d;
    outline: none;
    &:focus {
        border-color: #8fa47d;
    }
`;

const ClearButton = styled.button`
    position: absolute;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: red;
    opacity: 70%;

    &:hover {
        color: #7b8f6c;
    }
`;

const LoginButton = styled.button`
    background-color: ${(props) => { return (props.disabled ? "#d3d3d3" : "#a5b68d"); }};
    margin-top: 50px;
    width: 384px;
    height: 56px;
    color: white;
    font-size: 24px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 12px 24px;
    cursor: ${(props) => { return (props.disabled ? "not-allowed" : "pointer"); }};
    transition:
            background-color 0.3s ease,
            transform 0.1s ease;

    &:hover {
        background-color: ${(props) => { return (props.disabled ? "#d3d3d3" : "#8fa47d"); }};
    }

    &:active {
        transform: ${(props) => { return (props.disabled ? "none" : "scale(0.95)"); }};
        background-color: ${(props) => { return (props.disabled ? "#d3d3d3" : "#7b8f6c"); }};
    }
`;

const TextContainer = styled.div`
    display: flex;
`;

const Text = styled.div`
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
    padding-right: 10px;
`;

const BoldText = styled.div`
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    padding-top: 10px;
    text-decoration-line: underline;
    cursor: pointer;
`;

const LoginSecond = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clearUsername = () => { return setUsername(""); };
  const clearPassword = () => { return setPassword(""); };

  const isFormValid = username && password;

  const handleLogin = async () => {
    if (isFormValid) {
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/v1/auth/login`, {
          id: username,
          password,
        });

        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/main");
      } catch (error) {
        console.error("로그인 오류:", error);
      }
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <div>
      <Header title="로그인" />
      <Container>
        <InputContainer>
          <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => { return setUsername(e.target.value); }}
          />
          {username && <ClearButton onClick={clearUsername}>×</ClearButton>}
        </InputContainer>
        <InputContainer>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => { return setPassword(e.target.value); }}
          />
          {password && <ClearButton onClick={clearPassword}>×</ClearButton>}
        </InputContainer>
        <LoginButton onClick={handleLogin} disabled={!isFormValid}>
          로그인
        </LoginButton>
        <TextContainer>
          <Text>아직 회원이 아니신가요?</Text>
          <BoldText onClick={handleSignUp}>회원가입</BoldText>
        </TextContainer>
      </Container>
    </div>
  );
};

export default LoginSecond;
