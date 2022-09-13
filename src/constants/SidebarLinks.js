import { FcTodoList } from "react-icons/fc";
import {MdCreate } from "react-icons/md";

const SidebarLinks = [
  { name: "Tasks", icon: MdCreate ,url:"/"},
  { name: "Create New Task", icon: FcTodoList ,url:"/create-task"},
];

export default SidebarLinks;