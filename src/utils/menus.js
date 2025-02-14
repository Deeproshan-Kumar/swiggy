import { FaHome } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineHelpOutline } from "react-icons/md";

const menus = [
  {
    id: "1",
    name: "Home",
    path: "/",
    icon: <FaHome />,
    isNew: false,
  },
  {
    id: "2",
    name: "About",
    path: "/about",
    icon: <FiInfo/>,
    isNew: false,
  },
  {
    id: "3",
    name: "Offers",
    path: "/offers-near-me",
    icon: <BiSolidOffer />,
    isNew: true,
  },
  {
    id: "4",
    name: "Help",
    path: "/help",
    icon: <MdOutlineHelpOutline />,
    isNew: false,
  },
  {
    id: "5",
    name: "Cart",
    path: "/cart",
    isNew: false,
  },
];

export default menus;