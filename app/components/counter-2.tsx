"use client";

import { useAtomValue } from "jotai";
import { countAtom } from "../config/atoms";

export default function Counter2() {
  const count = useAtomValue(countAtom);

  return <div>Count 값 : {count}</div>;
}
