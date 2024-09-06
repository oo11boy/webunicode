import Link from "next/link";

export default function NavLinks({to, title, size, margin}) {
  return (
    <li class={`relative group md:text-black text-${size} p-${margin}`}>
        <Link href={to} >{title}</Link>
    </li>
  )
}
