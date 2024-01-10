
import { UsersList } from "@/app/components/list/list";
import { Filters } from "../components/filters/filters";

export default function FriendsList() {
  return (
    <div className="app__container">
      <UsersList />
      <Filters/>
    </div>
  );
}
