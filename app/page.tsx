import Image from "next/image";
import Counter from "./components/counter";
import Counter2 from "./components/counter-2";

export default function Home() {
  return (
    <div>
      <Counter />
      <Counter2 />
    </div>
  );
}
