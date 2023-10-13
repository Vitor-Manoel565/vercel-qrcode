import { useUserData } from "../../hooks/useUser";
import { User } from "../../utils/interfaces";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { Result } from "@zxing/library";
import { ContainerUserData } from "../../components/modalUserData";
import {
  Container,
  IconFail,
  IconSuccess,
  IconWarning,
} from "../../theme/layout";
import { Button } from "../../components/Button";
import { COLORS } from "../../theme/colors";
function Home() {
  const { getUserById, updateUser } = useUserData();
  const [user, setUser] = useState<User | null>(null);
  const [qrCodeResult, setQrCodeResult] = useState<string | null>(null);
  const [id, setId] = useState<string>("");
  const [error, setError] = useState<{
    error: boolean;
    message: string;
  }>({
    error: false,
    message: "",
  });

  const formsData = [
    {
      text:
        user && !user.validated
          ? "INGRESSO VÁLIDO"
          : user && user.validated
          ? "ENTRADA JÁ VALIDADA"
          : "INGRESSO INVÁLIDO",
      icon:
        user && !user.validated ? (
          <IconSuccess />
        ) : user && user.validated ? (
          <IconWarning />
        ) : (
          <IconFail />
        ),
      user,
    },
  ];

  const handleResult = async (result: Result | null | undefined) => {
    if (!result) return;

    setQrCodeResult(result.getText());
  };

  useEffect(() => {
    if (!qrCodeResult) return;
    setId(qrCodeResult);

    const fetchUser = async () => {
      try {
        const user = await getUserById(qrCodeResult);

        if (!user) return;
        setUser(user);

        return;
      } catch (error) {
        console.log(error);
        setError({
          error: true,
          message: error.response.data || "Erro ao buscar usuário",
        });
        return;
      }
    };

    fetchUser();
  }, [qrCodeResult]);

  console.log(formsData);

  return (
    <S.Container>
      {!qrCodeResult && (
        <QrReader
          key={qrCodeResult || "default"}
          constraints={{ facingMode: "environment" }}
          className="qr-reader"
          containerStyle={{
            width: "80%",
            height: "40%",
            borderRadius: "10px",
            minWidth: "300px",
            maxWidth: "500px",
            minHeight: "300px",
            maxHeight: "40%",
          }}
          onResult={handleResult}
          scanDelay={300}
          videoContainerStyle={{ width: "100%", height: "100%" }}
          videoId="video"
          videoStyle={{ width: "100%" }}
        />
      )}

      {qrCodeResult &&
        user &&
        formsData.map((form) => {
          return (
            <ContainerUserData
              dataUser={user || null}
              icon={form.icon}
              text={form.text}
            >
              <Container
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                height="fit-content"
                width="100%"
                bottom={user && !user.validated ? "-71px" : "-30px"}
                left="0"
                gap="0.5rem"
              >
                <>
                  {user && !user.validated && (
                    <Button
                      width="60%"
                      minWidth="40px"
                      onClick={async () => {
                        try {
                          await updateUser(id, true);
                          setUser(null);
                          setQrCodeResult(null);
                          window.location.reload();
                        } catch (err) {
                          setError({
                            error: true,
                            message: err.response.data || "Erro ao validar",
                          });
                        }
                      }}
                      text="CONFIRMAR ENTADA"
                    />
                  )}
                  <Button
                    width="60%"
                    minWidth="0"
                    onClick={() => {
                      setUser(null);
                      setQrCodeResult(null);
                      window.location.reload();
                    }}
                    backgroundColor={COLORS.dark}
                    border={`1px solid ${COLORS.light}`}
                    text="VALIDAR NOVO INGRESSO"
                  />
                </>
              </Container>
            </ContainerUserData>
          );
        })}
    </S.Container>
  );
}

export default Home;
