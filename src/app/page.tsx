import Link from "next/link";
import Table from "./components/Table";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Table />

      <Link href={"./admin"}> Admin Page </Link>
    </div>
  );
}
