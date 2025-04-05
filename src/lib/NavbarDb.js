import { ArrowLeft, Home, ShoppingCart, Business, Person, Work, Article, Info } from '@mui/icons-material';

export  const navItems = [
    { title: "خانه", icon: <Home/>, to: "../", id: 7 },
    {
      title: "طراحی سایت",
      to:"../",
      icon: <ArrowLeft/>,
      id: 3,
      items: [
        { title: "طراحی سایت فروشگاهی", icon: <ShoppingCart/>, to: "../store", id: 4 },
        { title: "طراحی سایت شرکتی", icon:<Business/>, to: "../company", id: 5 },
        { title: "طراحی سایت رزومه ای", icon: <Person/>, to: "../resume", id: 6 },
      ],
    },
    { title: "نمونه کارها", icon: <Work/>, to: "../listportfolio", id: 1 },
    { title: "وبلاگ", icon: <Article/>, to: "../blogs", id: 2 },
    { title: "درباره‌ی ما", icon: <Info/>, to: "../AboutUs", id: 8 },
  ];