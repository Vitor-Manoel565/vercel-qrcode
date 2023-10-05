import React from "react";
import { Container } from "../../theme/layout";
import { COLORS } from "../../theme/colors";
import { Input } from "../../components/Input";
import { useState } from "react";
import { Button } from "../../components/Button";

export default function Login() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Container
      position="relative"
      display="flex"
      width="80%"
      height="60%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="16px"
      minHeight="450px"
      backgroundColor={COLORS.light}
    >
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Usuário:"
        type="text"
        width="80%"
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha:"
        type="password"
        width="80%"
      />
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        height="auto"
        width="100%"
        top="95%"
        onClick={() => {
          console.log("click");
        }}
      >
        <Button
          width="60%"
          minWidth="0"
          onClick={() => {
            console.log(user, password);
          }}
          text="Entrar"
        />
      </Container>
    </Container>
  );
}
