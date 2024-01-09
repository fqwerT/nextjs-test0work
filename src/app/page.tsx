
import { Footer } from "./components/footer/footer";

import { UsersList } from "./components/list/list";

import "./main.css";
export default function Home() {
  
  return (
    <div className="app">
      <div className="app__container">
      <UsersList/>
      </div>
    </div>
  );
}
