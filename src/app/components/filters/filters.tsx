"use client";

import { FilterResult } from "../filterResult/filterResult";
import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store.ts/store";
import { filterByname } from "@/store.ts/reducers/userReducers";

import "./style.css";

export const Filters: React.FC = ({}): React.JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      <article className="filters">
        {/* <section className="filters__block">
          <input
            onChange={(e) => setAgeFrom(e.target.value)}
            placeholder="возраст от"
            className="filters__input age"
          />
          <input
            onChange={(e) => setAgeTo(e.target.value)}
            placeholder="возраст до"
            className="filters__input age"
          />
        </section> */}
        {
          <section className="filters__block">
            <input
              onChange={(e) => dispatch(filterByname(e.target.value))}
              placeholder="имя"
              className="filters__input"
            />
          </section>
        }
        {/* <button
          onClick={() => dispatch(filterUsersAge({ from: ageFrom, to: ageTo }))}
          className="filters__button"
        >
          Применить
        </button> */}
      </article>
    </>
  );
};
