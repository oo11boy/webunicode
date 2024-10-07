import Link from "next/link";

export default function NavLinks({to, title, size, margin, isSticky, pathName, param}) {
  const isActive = (pathName === param)
  
  return (
    <li class={`relative group text-${size} xl:text-[17px] p-${margin} ${isActive ? 'text-red-500' : ''}`}>
        <Link href={to} prefetch={true} >{title}</Link>
    </li>
  )
}
