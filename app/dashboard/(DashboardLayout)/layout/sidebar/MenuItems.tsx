import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },

  {
    id: uniqueId(),
    title: "Users",
    icon: IconLayoutDashboard,
    href: "/dashboard/users",
  },
  {
    navlabel: true,
    subheader: "UTILITIES",
  },
  {
    id: uniqueId(),
    title: "Courses",
    icon: IconTypography,
    href: "/dashboard/courses",
  },
  {
    id: uniqueId(),
    title: "Categories",
    icon: IconTypography,
    href: "/dashboard/categories",
  },
  {
    id: uniqueId(),
    title: "Applications",
    icon: IconTypography,
    href: "/dashboard/applications",
  },

  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
];

export default Menuitems;
