import { COLORS } from "../../theme/colors";
import { Container, Figcaption } from "../../theme/layout";
import { User } from "../../utils/interfaces";

interface IContainerUserDataProps {
  dataUser: User | null;
  icon: React.ReactNode;
  text: string;
  children: React.ReactNode;
}

export const ContainerUserData: React.FC<IContainerUserDataProps> = ({
  dataUser,
  icon,
  text,
  children,
}) => {
  const labelsForms = [
    {
      label: "Evento",
      value: dataUser?.product?.eventName || "Não informado",
    },
    {
      label: "Nome",
      value: dataUser?.name || "Não informado",
    },
    {
      label: "Email",
      value: dataUser?.email || "Não informado",
    },
    {
      label: "CPF",
      value: dataUser?.cpf || "Não informado",
    },
    {
      label: "Telefone",
      value: dataUser?.phone || "Não informado",
    },
    {
      label: "Preço",
      value: dataUser?.product?.price || "Não informado",
    },
    {
      label: "Cidade",
      value: dataUser?.product?.address || "Não informado",
    },
    {
      label: "Data do evento",
      value: "09/12/2023",
    },
    {
      label: "Tipo do ingresso",
      value: dataUser?.product?.offerName || "Não informado",
    },
    {
      label: "Data da compra",
      value: dataUser?.product?.createdAt || "Não informado",
    },
  ];

  console.log(
    "🚀 ~ file: index.tsx ~ line 96 ~ ContainerUserData ~ labelsForms",
    labelsForms
  );

  return (
    <Container
      position="relative"
      display="flex"
      width="80%"
      height="fit-content"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      borderRadius="16px"
      minHeight="450px"
      minWidth="300px"
      backgroundColor={COLORS.light}
      padding="2rem"
    >
      {labelsForms.map((user) => {
        return (
          <Container
            width="100%"
            height="auto"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            backgroundColor={COLORS.light}
            borderBottom={`1px dashed ${COLORS.grayDot}`}
            padding="5px"
          >
            <Figcaption color={COLORS.dark} fontSize="12px">
              {user.label}
            </Figcaption>
            <h3
              style={{
                fontSize: "14px",
              }}
            >
              {user.value}
            </h3>
          </Container>
        );
      })}
      <Container
        display="flex"
        width="100%"
        height="auto"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="1rem"
      >
        {icon}
        <Figcaption color={COLORS.dark} fontSize="12px">
          {text}
        </Figcaption>
      </Container>
      {children}
    </Container>
  );
};
