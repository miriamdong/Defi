import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  return (
    <div>
      {user.name}
      <br />
      {user.projects}
      <br />
      {user.fav}
      <br />
      <img src={user.image} width="300" />
      <Link href="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default User;
