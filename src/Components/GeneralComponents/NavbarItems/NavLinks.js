import Link from "next/link";

export default function NavLinks({to, title}) {
  return (
    <li class="relative group ">
        <Link href={to} >{title}</Link>
    </li>
  )
}
