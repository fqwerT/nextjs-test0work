"use client";
import React, { useMemo } from "react";
import { UsersProps } from "@/interface/user";
import "./style.css";
import { useAppSelector, useAppDispatch } from "@/store.ts/store";
import { setUsers } from "@/store.ts/reducers/userReducers";
import { dataFetch } from "@/app/utils/dataFetch";
import { shallowEqual } from "react-redux";
import { ListItem } from "../listItem/listItem";
export const UsersList: React.FC = () => {
  const users = useAppSelector((state) => state.users.usersData, shallowEqual);
  const dispatch = useAppDispatch();

  const request = useMemo(() => {
    dataFetch({
      url: "https://jsonplaceholder.typicode.com/users",
      dispatch: dispatch,
      action: setUsers,
      type: "set state",
      revalidate: { status: true, delay: 120 },
    });
  }, []);

  return (
    <div className="list">
      <ul className="list__box">
        {users &&
          users.map((item: UsersProps) => (
            <ListItem
              key={item.id}
              name={item.name}
              username={item.username}
              phone={item.phone}
              address={item.address.city}
              id={item.id}
            />
          ))}
      </ul>
    </div>
  );
};
