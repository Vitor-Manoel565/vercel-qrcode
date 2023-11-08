import { useEffect, useState, useMemo } from "react";
import { useUserData } from "../../hooks/useUser";
import { Container } from "../home/styles";
import { toast } from "react-toastify";
import { User } from "../../utils/interfaces";
import * as S from "./styles";
import { GrFormClose, GrFormCheckmark } from "react-icons/gr";
import { Button } from "../../components/Button";

export default function Painel() {
  const { users, removeUser } = useUserData();
  //   const [users, setUsers] = useState<User[] | null>(null);
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!search) return users;

    return users?.filter((user) => {
      if (user?.cpf?.includes(search)) return true;
    });
  }, [search, users]);

  return (
    <S.ContainerTableResponsive>
      <h1>Painel</h1>
      <S.InputSearch
        placeholder="Pesquisar por CPF:"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <S.Table>
        {
          <S.Tr>
            <S.Th>Nome</S.Th>
            <S.Th>Email</S.Th>
            <S.Th>Validado</S.Th>
            <S.Th>OfferId</S.Th>
            <S.Th>Tipo de ingresso</S.Th>
            <S.Th>CPF</S.Th>
            <S.Th>Edit</S.Th>
          </S.Tr>
        }
        {filteredUsers?.map((user) => {
          return (
            <S.Tr key={user.cpf}>
              <S.Td>{user.name}</S.Td>
              <S.Td>{user.email}</S.Td>
              <S.Td>{user.product?.validated ? "Sim" : "Não"}</S.Td>
              <S.Td>{user.product?.offerId}</S.Td>
              <S.Td>{user.product?.offerName}</S.Td>
              <S.Td>{user.cpf}</S.Td>
              <S.Td>
                <Button
                  onClick={async () => {
                    await removeUser(user.cpf);
                  }}
                  text="X"
                  color="red"
                  backgroundColor="transparent"
                  width="50px"
                  minWidth="50px"
                  fontSize="1.2rem"
                />
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Table>
    </S.ContainerTableResponsive>
  );
}
