"use client";
import { useEffect, useState } from "react";
import cars from "./constants/cars.json";
import Card from "./components/Card";
import { CarItem } from "./type/CarItem";
import Link from "next/link";

export default function Home() {
  const [car, setCar] = useState<CarItem[]>([]);

  useEffect(() => {
    setCar(cars);
  }, []);

  return (
    <>
      <div className="flex justify-evenly p-10 mt-40 gap-5">
        {car.map((c, i) => {
          return (
            <Link href={`/${c.id}`}>
              <Card car={c} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
