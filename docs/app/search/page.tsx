
import Link from "next/link"
import SearchContent from "./content"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function Search() {

  return <>

    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span> Coshpr Fast #links</span>
        </h1>
      </div>
    </section>

    <SearchContent />

  </>

}