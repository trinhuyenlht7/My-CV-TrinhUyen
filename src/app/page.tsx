"use client";

import Link from "next/link";
import Table from "./components/Table";
import useSWR from "swr";
import { Button } from "react-bootstrap";
import StacticBackdrop from "./components/create.modal";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  //fetch data by SWR
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isloading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!data) {
    return <div>Is Loading ...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex justify-content-between pb-3">
        <div>{data?.length}</div>
        <div>
          <StacticBackdrop></StacticBackdrop>
        </div>
      </div>
      <Table blogs={data} />
      <Link href={"./admin"}> Admin Page </Link>
    </div>
  );
}
