import { getData } from "@/actions/todoActions";
import { getAllUsers } from "@/actions/userActions";
import{ getUser} from "@/actions/userActions";
import Todos from "@/components/todos"; // Majuscule au nom du composant

import Image from "next/image";

export default async function Home() {
  // const users = await getAllUsers();
   //console.log(users);
  //const data = await getData(users[0].id);
  //const user = await getUser(users[0].id);

  //console.log(user);


  return (
    <main className="flex items-center justify-between">
      {/* <Todos todos={data} user={users[0]} />*/}
    </main>
  );
}
