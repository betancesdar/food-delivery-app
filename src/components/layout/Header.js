import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 semi-bold text-2xl">
        <Link
          className="font-semibold text-black text-4xl hover:text-primary italic"
          href=""
        >
          <span className="text-primary font-bold">AX</span>Delivery
        </Link>
        <Link href={""} className="hover:text-primary">
          Home
        </Link>
        <Link href={""} className="hover:text-primary">
          Menu
        </Link>
        <Link href={""} className="hover:text-primary">
          About
        </Link>
        <Link href={""} className="hover:text-primary">
          Contact
        </Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        <Link href={""}>Login</Link>
        <Link
          href={"/register"}
          className="bg-primary rounded-full text-white px-8 py-2 hover:bg-transparent hover:border hover:border-primary hover:text-primary hover:border"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
