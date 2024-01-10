"use client";

import { memo } from "react";
import { UserListItemProps } from "@/interface/user";
import './style.css'
export const ListItem: React.FC<UserListItemProps> = memo(
  ({ name, username, address, phone, id }) => {
    return (
      <section id={String(id)} className="list__box__item">
        <div className="item__block">{name}</div>
        <div className="item__block">{username}</div>
        <div className="item__block">{phone}</div>
        <div className="item__block">{address.city}</div>
      </section>
    );
  }
);
