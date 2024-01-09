"use client";

import { useAppSelector } from "@/store.ts/store";

export const FilterResult = () => {
  const data = useAppSelector((state) => state.users.dataToChange);

  return data?.map((item) => (
    <section key={item.id} id={String(item.id)} className="list__box__item">
      <div className="item__block">{item.name} </div>
      <div className="item__block">{item.number}</div>
      <div className="item__block">{item.age} лет </div>
    </section>
  ));
};
