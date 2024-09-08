import Link from "next/link";

export default function NavLinks({to, title, size, margin}) {
  return (
    <li class={`relative group md:text-black text-${size} xl:text-[17px] p-${margin}`}>
        <Link href={to} >{title}</Link>
    </li>
  )
}
