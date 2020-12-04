import Link from "next/link";
import Router from "next/router";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion";
import constants from "./constants";

export default function Menu() {
  return (
    <motion.nav
      // layout
      // variants={constants.animation.menu}
      // key="mainmenu"
      // layoutId="mainmenu"
      // className="menu_right"
      // initial="initial"
      // animate="enter"
      // exit="exit"
    >
      <Link href="/" scroll={false} >
        <a className="menu_left">
          {/* <img src="../icons/back.svg"></img> */}
          <FiHome/>
        </a>
      </Link>

      <div className="menu_right">
        <Link href="/briefe" scroll={false} >
          <a>Briefe</a>
        </Link>
        <Link href="/themen" scroll={false} >
          <a>Themen</a>
        </Link>
        <Link href="/familie" scroll={false} >
          <a>Familie</a>
        </Link>
      </div>
    </motion.nav>
  );
}
