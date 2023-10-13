import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "../../theme/layout";

function TestComponents() {
  const [userAccess, setUserAccess] = useState<string>("");
  const handleClick = () => {
    console.log(userAccess);
    return;
  };
  return (
    <Container
      display="flex"
      width="100vw"
      height="100vh"
      flexDirection="column"
      alignItems="center"
    >
      <h1>Test Components</h1>
      <Input
        value={userAccess}
        onChange={(e) => {
          setUserAccess(e.target.value);
        }}
        placeholder="Teste de input"
        type="text"
        width="80%"
      />
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN3SURBVO3BSY7dWAADweSD7n/lbC96wZUA4Q8uFxgR/2Dmf4eZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5ly8aIkfJPKE0loKi0J76TSkvBNKq84zJTDTDnMlIs3U3mnJDyRhKbyhMqdJLxC5Z2S8E6HmXKYKYeZcvFhSXhC5YkkNJWWhJ8sCU+ofNJhphxmymGmXPwySWgqr0hCU/nNDjPlMFMOM+Xil0tCU2lJuKPSktBUfpPDTDnMlMNMufgwlW9SuZOEJ5LQVN5J5Sc5zJTDTDnMlIs3S8JPkoSm0pLQVFoS7iShqdxJwk92mCmHmXKYKRcvUvnJVFoSmsodlZaEJ1T+JYeZcpgph5ly8aIkNJWWhHdSaSotCU3lFUloKk8k4Z1UPukwUw4z5TBTLt4sCU3liSQ0lSdU7qi0JDyRhKbyTiotCXeS0FRecZgph5lymCnxD36QJNxRaUm4o9KS0FRekYQ7Kv+Sw0w5zJTDTLn4siQ8ofKESktCU2lJuKPSktBUWhJaEl6hcicJTeUVh5lymCmHmXLxZSpPJKGpNJUnknBH5Y5KS8IdlSeS8DcdZsphphxmysWLktBU3kmlJeEJlSeS0FRaEprKnSTcUWkqf9NhphxmymGmXHxYEprKnSTcUXkiCU+otCQ0lTtJaCp3knBHpSWhqbzTYaYcZsphplx8WRKeULmThKbyhEpLwp0kNJU7SXhFEppKS0JTecVhphxmymGmXHyYSktCU7mThCeS8AqVloSm0pLwTipPqLzTYaYcZsphpsQ/+Icl4QmVloQnVFoSmsoTSXhC5ZMOM+UwUw4z5eJFSfgmlabSkvCEyhNJeCIJTeUJlW86zJTDTDnMlIs3U3mnJNxJwiuScEelqbQk3FF5QuVOEu6ovOIwUw4z5TBTLj4sCU+ovJPKEyp3knAnCa9IQlNpKi0J73SYKYeZcpgpF7+MyhMqT6g8kYSm8kQSmsonHWbKYaYcZsrFL5OEV6jcScIdlSeS0FSayjcdZsphphxmysWHqXySSkvCEypPqNxJQlO5o9KS8DcdZsphphxmysWbJeGbknBHpSWhJaGpvEKlJaGptCQ0lSeS8E6HmXKYKYeZEv9g5n+HmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZ8h+h8YUIojWZPgAAAABJRU5ErkJggg=="
        style={{ width: "200px", height: "200px", margin: "1rem" }}
      />
      <Container display="flex" width="fit-content" height="fit-content" />
      <Button width="80%" onClick={() => handleClick()} text="Teste" />
    </Container>
  );
}

export default TestComponents;
