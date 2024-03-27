import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-start bg-slate-800 px-8 py-3 rounded-lg shadow-lg shadow-blue-500">
      <Link className="text-white font-bold" href={"/"}>
        <p className="p-2">HOME</p>
      </Link>
      <Link
        className="bg-white p2 text-slate-800 rounded-3xl"
        href={"/addTopic"}
      >
        <p className="p-2">Add Topic</p>
      </Link>
    </nav>
  );
}
