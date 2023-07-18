import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


export const Layout = ({ children }) => {
    const router = useRouter();
    //fix le scoll jump
    useEffect(() => {
      if ("scrollRestoration" in history && history.scrollRestoration !== "manual") {
        history.scrollRestoration = "manual";
      }
    }, []);
  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        exit={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 bg-slate-300 z-40"
      ></motion.div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div>
          <nav
            className="w-full bg-slate-700 text-white"
            style={{
              position: "fixed",
            }}
          >
            <ul className="flex gap-4">
              <li>
                <Link scroll={false} href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link scroll={false} href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="pt-20">{children}</div>
        </motion.div>
      </motion.main>
    </>
  );
};
