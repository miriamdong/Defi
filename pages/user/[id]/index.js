import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import  Nav  from '/components/dashboard/Nav';

const User = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    user_id: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`https://defidapp.herokuapp.com/users/${router.query.id}`).then((response) => {
      setUser(response.data[0]);
    });
  }, []);

  console.log(router.query.id);

  return (
    <div>
      <Nav />
    </div>
  );
};

export default User;
