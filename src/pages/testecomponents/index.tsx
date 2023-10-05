import React from "react";
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
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOcSURBVO3BQY4kyQEDQWeg/v9l1xz2wFMAiaxu7Ug0i38w84/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNM+fBSEn6TSkvCjUpLQlNpSXhDpSXhN6m8cZgph5lymCkfvkzlm5LwTSo3Ki0JNypPqHxTEr7pMFMOM+UwUz78sCQ8ofKESkvCE0loKjcqLQlN5YkkPKHykw4z5TBTDjPlw18uCU8koancqPw/OcyUw0w5zJQPfzmVmyQ8kYQblabyv+QwUw4z5TBTPvwwld+UhKbyhkpLQlN5Q+Xf5DBTDjPlMFM+fFkSflMSmkpLQlNpSWgqLQlNpSWhqdwk4d/sMFMOM+UwUz68pPK/JAlN5UblRuVvcpgph5lymCkfXkpCU2lJuFFpSXhCpSXhJyWhqdwkoancJKGptCTcqLxxmCmHmXKYKR9+mEpLQkvCjcpPUvmmJNwkoak8odKS8E2HmXKYKYeZEv/gByXhCZWWhBuVN5LQVG6ScKPSktBUWhLeUPmmw0w5zJTDTPnwy1RaEm5UWhJuktBUnkhCU2kqN0n4SSo/6TBTDjPlMFPiH7yQhBuVN5LQVFoSmspNEprKTRJuVL4pCW+ovHGYKYeZcpgpH15SuUnCjUpLQlNpSWgqLQk/SeWNJNyoPJGEbzrMlMNMOcyUD1+WhKbSknCj0pJwk4Sm8kQSblRaEprKEyo3SbhR+UmHmXKYKYeZ8uGlJDSVG5WWhBuVloSm0pLQVJ5Q+aYkNJWWhKby33SYKYeZcpgpH15SeSIJTeUmCU+o3CShqTyh0pLwRBKeSMJvOsyUw0w5zJT4B3+xJDSVloSm0pLQVG6ScKPyRBKeUGlJaCpvHGbKYaYcZsqHl5Lwm1SeUGlJ+E1JaCpvJKGpfNNhphxmymGmfPgylW9KwhtJaCotCTdJeEPlDZWWhJ90mCmHmXKYKR9+WBKeUHlCpSWhqbQkNJWWhKbSknCThDdUblR+0mGmHGbKYaZ8+Msl4QmVloSm0pJwo3KThBuVN5LQVN44zJTDTDnMlA//Z5LQVG5UnkjCjUpLQlNpSbhR+abDTDnMlMNM+fDDVH6SSktCS0JTeSIJT6jcJKGp/JscZsphphxmSvyDF5Lwm1RaEprKE0loKjdJeEPlm5LQVN44zJTDTDnMlPgHM/84zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlP8ArnmlA4uIgMYAAAAASUVORK5CYII="
        style={{ width: "200px", height: "200px", margin: "1rem" }}
      />
      <Button width="80%" onClick={() => handleClick()} text="Teste" />
    </Container>
  );
}

export default TestComponents;
