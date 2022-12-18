import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-end sm:flex-row p-8 h-auto bg-slate-900">
      <ul className=" space-x-10 flex gap-20 m-5">
        <Link href="/">
          <li className="text-lg  cursor-pointer hover:text-green-600">
            Home
          </li>
        </Link>
        <Link href="/projects">
          <li className="cursor-pointer hover:text-green-300">Projects </li>
        </Link>
        <Link href="/contact">
          <li className="cursor-pointer hover:text-green-600">Contact </li>
        </Link>
        <Link href="/">
          <li className="cursor-pointer hover:text-green-600">Resume </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
