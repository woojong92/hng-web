// import logo from './logo.svg';
import "./App.css";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import hng from "hangeul-nickname-generator";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fdd981;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  // height: 15rem;
  border: 1px solid #fcc02d;
  border-radius: 15px;
  background-color: #fcc02d;
`;

function App() {
  const [nickname, setNickname] = useState(" ");

  const onClick = () => {
    setNickname(hng());
  };

  return (
    <Wrapper>
      <Box>
        <text style={{ fontSize: "100px", marginBottom: "1rem" }}>🐥</text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <text style={{ marginRight: "1rem", fontSize: "25px" }}>
            지금 당장 한글 닉네임을 만들어보세요.
          </text>
          <div
            style={{
              padding: "0.5rem",
              backgroundColor: "#F08A00",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={onClick}
          >
            <text style={{ fontSize: "20" }}>Click!!</text>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e5e5e5",
            width: "100%",
            height: "40px",
            borderRadius: "15px",
          }}
        >
          <text style={{ fontSize: "23px", color: "#F08A00" }}>{nickname}</text>
        </div>
      </Box>
    </Wrapper>
  );
}

export default App;
