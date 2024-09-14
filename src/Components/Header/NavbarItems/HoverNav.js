import Link from "next/link";

export default function HoverNav({size, isSticky}) {
  const navChildren = [
    {
      title: "طراحی سایت فروشگاهی",
      icon: "icon-cart",
      to: '1',
      id: 1,
    },
    {
      title: "طراحی سایت شرکتی",
      icon: "icon-office",
      to: '2',
      id: 2,
    },
    {
      title: "طراحی سایت اختصاصی",
      icon: "icon-user-tie",
      to: '3',
      id: 3,
    },
  ];
  return (
    <li class={`relative group flex items-center gap-2 text-${size} xl:text-[17px] ${isSticky ? 'text-black' : ''}`}>
      طراحی سایت
      <ul class="absolute opacity-0 group-hover:opacity-100  text-black bg-white text-right top-10 right-0 mt-1 py-2 w-auto rounded-lg shadow-lg z-10 transition-opacity duration-400 ease-in">
        {navChildren.map((item) => (
          <li key={item.id} class="px-4 py-2 whitespace-nowrap flex xl:text-[17px] justify-end">
            <Link href={item.to}>
             <span class="pr-1">{item.title}</span>
             <span class={item.icon}></span>
            </Link>
          </li>
        ))}
      </ul>
      <span class="icon-circle-down opacity-80"></span>
    </li>
  );
}
