import { COLORS } from "../../theme/colors";
import { Container, Figcaption } from "../../theme/layout";
import { User } from "../../utils/interfaces";

interface IContainerUserDataProps {
  dataUser: User;
  icon: React.ReactNode;
}

export const ContainerUserData: React.FC<IContainerUserDataProps> = ({
  dataUser,
  icon,
}) => {
  const labelsForms = [
    {
      label: "Nome",
      value: dataUser.name,
    },
    {
      label: "Email",
      value: dataUser.email,
    },
    {
      label: "CPF",
      value: dataUser.cpf,
    },
    {
      label: "Telefone",
      value: dataUser.phone,
    },
    {
      label: "Preço",
      value: dataUser.price,
    },
    {
      label: "Cidade",
      value: dataUser.city,
    },
  ];
  return (
    <Container
      position="relative"
      display="flex"
      width="80%"
      height="60%"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      borderRadius="16px"
      minHeight="450px"
      backgroundColor={COLORS.light}
    >
      {labelsForms.map((user) => {
        return (
          <Container
            width="80%"
            height="auto"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            backgroundColor={COLORS.light}
            borderBottom="1px dashed black"
          >
            <Figcaption color={COLORS.dark}>{user.label}</Figcaption>
            <h3>{user.value}</h3>
          </Container>
        );
      })}
      {icon}
    </Container>
  );
};
