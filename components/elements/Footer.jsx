import { footer } from "/config";
import Link from "next/link";

export function Footer() {
 return (
  <footer className="w-full px-4 py-10 md:px-8 lg:px-16">
   <div className="mx-auto pt-10">
    <div className="grid grid-cols-2 gap-9 md:grid-cols-6">
     <div className="col-span-3 flex flex-col justify-center">
      <div className="flex items-center space-x-5">
       <Link href="/" legacyBehavior>
        <p className="flex cursor-pointer items-center  text-2xl font-semibold">
         Igor Kowalczyk
         <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span> <span className="mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10">v{process.env.VERSION}</span>
        </p>
       </Link>
      </div>

      <p className="mt-3  text-gray-700 dark:text-gray-400">
       Created with ❤️ and ☕ in Poland using{" "}
       <Link href="https://nextjs.org" target={"_blank"}>
        Next.js
       </Link>
      </p>
      <br />
      <p className="mb-4  text-slate-600 opacity-50 dark:text-slate-400">A programmer without coffee is like a web browser without the Internet - it seemingly works but is it useful?</p>
     </div>
     {footer.categories.map((category, index) => (
      <div key={index} className="col-span-1 text-gray-700 dark:text-gray-400">
       <p className="mt-3  font-semibold text-gray-800 dark:text-white sm:mb-3 sm:mt-0 ">{category.title}</p>
       <div>
        {category.links.map((link, index) => (
         <Link key={index} href={link.href} target={link.target || "_self"} className="mt-2 block  duration-100 hover:text-gray-600 hover:underline motion-reduce:transition-none dark:hover:text-gray-300">
          {link.title}
         </Link>
        ))}
       </div>
      </div>
     ))}
    </div>
    <div className="mt-5 flex justify-end text-center  text-gray-700 dark:text-gray-400">
     {/* DO NOT TOUCH THE CODE BELOW! REMEMBER: YOU CAN ADD YOUR NAME AFTER MY NAME */}
     <p className="font-semibold">&copy; 2019 - {new Date().getFullYear()} Igor Kowalczyk, All rights reserved.</p>
    </div>
   </div>
  </footer>
 );
}
