import { HiHome } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import { TbCategoryFilled } from "react-icons/tb";

const Navbaritems = [
    {
        name: 'Home',
        url: '/',
        icon: <HiHome />,
        cName: 'nav-links'
    },
    {
        name: 'Categories',
        url: '/categories',
        icon: <TbCategoryFilled />,
        cName: 'nav-links'
    },
    {
        name: 'About',
        url: '/about',
        icon: <IoIosInformationCircle />,
        cName: 'nav-links'
    },
]

export default Navbaritems;