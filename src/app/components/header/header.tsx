import "./style.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <nav className="hedaer__routes">
        <Link href="/friends">друзья</Link>
        <Link href={"/"}>новости</Link>
      </nav>
    </header>
  );
};
