import { useUserData } from "../../hooks/useUser";
import { User } from "../../utils/interfaces";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { IoWarningOutline } from "react-icons/io5";
import { ContainerUserData } from "../../components/modalUserData";
function Home() {
  const [id, setId] = useState("");
  const { getUserById } = useUserData();
  const [user, setUser] = useState<User | null>();
  const handleUser = async (id: string) => {
    const user = await getUserById(id);
    setUser(user);
  };

  const formsData = [
    {
      text: "IGRESSO VALIDADO COM SUCESSO",
      icon: <IoWarningOutline />,
      user,
    },
  ];

  // useEffect(() => {
  //   // const paramsId = new URLSearchParams(window.location.search).get("id");
  //   setId(id);
  //   const user = getUserById(id);
  //   if (!user) return console.log("user not found");
  //   setUser(user);
  // }, [id]);

  // dataUser: {
  //   name: string;
  //   email: string;
  //   cpf: string;
  //   phone: string;
  //   price: number;
  //   city: string;
  // }
  // [];

  return (
    <S.Container>
      <h3 style={{ color: "white" }}>{id}</h3>
      <h3 style={{ color: "white" }}>{user?.name}</h3>

      <QrReader
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
        onResult={async (result) => {
          if (!result) return;
          const _id = result.getText();
          setId(_id);
          const user = await getUserById(_id);
          if (!user) return console.log("user not found");
          setUser(user);
        }}
        scanDelay={300}
        videoContainerStyle={{ width: "100%", height: "100%" }}
        videoId="video"
        videoStyle={{ width: "100%" }}
      />
      {user &&
        formsData.map((form) => {
          return <ContainerUserData dataUser={user} icon={form.icon} />;
        })}
    </S.Container>
  );
}

export default Home;
