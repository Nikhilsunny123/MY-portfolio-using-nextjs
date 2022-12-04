import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-end sm:flex-row p-8 h-auto bg-slate-900">
      <ul className=" space-x-10 flex gap-20 ">
        <li className="text-lg  cursor-pointer hover:text-green-600">Home </li>
        <Link href="/projects">
          <li className="cursor-pointer hover:text-green-600">Projects </li>
        </Link>
        <li className="cursor-pointer hover:text-green-600">Contact </li>
        <li className="cursor-pointer hover:text-green-600">Resume </li>
      </ul>
    </header>
  );
}

export default Header;
