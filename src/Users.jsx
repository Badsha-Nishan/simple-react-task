import { use } from "react";
import User from "./User";

export default function Users({ users }) {
  const users1 = use(users);
  return (
    <div>
      {users1.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
