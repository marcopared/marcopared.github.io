import { header, selfportraits, meta } from "/config";
import { ConvertBytes, ConvertNumber } from "/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function PictureCard({ userData, contributions }) {
 return (
  <div className="card border-b-black/15 shadow-code block w-full rounded-md border text-[15px] text-sm backdrop-blur-md transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-neutral-800 dark:bg-[#161617]/30">
    <img src={selfportraits.main.src} alt={selfportraits.main.alt} className="rounded-md w-full" />
  </div>
 );
}
