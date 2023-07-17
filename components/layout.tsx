import {motion} from "framer-motion";
import Link from "next/link";

export const Layout = ({ children }) =>{
    return (
        <motion.main initial={{opacity: 0, y: 150}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, x:-150}}>
            <nav className="mx-auto max-w-xl">
                <ul className="flex gap-4">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
            {children}
        </motion.main>
)}