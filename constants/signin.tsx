import {
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import signInSingleItemProps from "../types";

export const signin: signInSingleItemProps[] = [
  {
    title: "Sign in with Google",
    href: "#",
    icon: <AiFillGoogleCircle />,
    color: "white",
  },
  {
    title: "Sign in with Facebook",
    href: "#",
    icon: <AiFillFacebook />,
    color: "facebook",
  },
  {
    title: "Sign in with LinkedIn",
    href: "#",
    icon: <AiFillLinkedin />,
    color: "linkedin",
  },
];
