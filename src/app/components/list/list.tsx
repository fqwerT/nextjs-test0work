"use client";
import React, { useState } from "react";
import { UsersProps } from "@/interface/user";
import { Filters } from "../filters/filters";
import "./style.css";
import { useAppSelector } from "@/store.ts/store";
export const UsersList: React.FC = (): React.JSX.Element => {
  const users = useAppSelector((state) => state.users.usersData);


  return (
    <div className="list">
      <ul className="list__box">
        {users.map((item: UsersProps) => (
          <li key={item.id} id={String(item.id)} className="list__box__item">
            <div className="item__block">{item.name} </div>
            <div className="item__block">{item.number}</div>
            <div className="item__block">{item.age} лет </div>
          </li>
        ))}
      </ul>
      <Filters/>
    </div>
  );
};
