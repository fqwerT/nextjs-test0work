"use client";
import { memo } from "react";
import { UserListItemProps } from "@/types/user";
import './style.css'
export const ListItem: React.FC<UserListItemProps> = 
  ({ name, username, address, phone, id }) => {
    return (
      <li id={String(id)} className="list__box__item" key={id}>
        <div className="item__block">{name}</div>
        <div className="item__block">{username}</div>
        <div className="item__block">{phone}</div>
        <div className="item__block">{address.city}</div>
      </li>
    );
  }

