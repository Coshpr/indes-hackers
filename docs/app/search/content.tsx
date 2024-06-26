'use client'

import { Icons } from "@/components/icons"
import { key_items, show_collections, collections, topics } from "@/content/search/varients"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const show_key_item = (key: string) => {
    const data = key_items[key]
    return <Link href={data.url ? data.url : '#'} className="flex h-[80px] w-full flex-col justify-between rounded-md p-4" target="_blank">

        {/* <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
            <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
        </svg> */}
        
        <Icons.logo />
        
        <div className="space-y-2">
            <h3 className="font-bold">{data.title}</h3>
            <p className="text-sm text-muted-foreground truncate hover:text-clip ">
                {data.description ? data.description : "null"}
            </p>
        </div>


    </Link>
}


export default function SearchContent() {

    const [collection, setCollection] = useState<string>(show_collections[0])

    return <div className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"  >

        <section className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <ul className={cn(
                " flex flex-row gap-4 font-bold justify-center items-center\
                leading-[1.1] sm:text-xl md:text-3xl first-letter:leading-normal text-muted-foreground  sm:leading-7",
            )}>
                {show_collections.map((item, idx) => {
                    return <li key={idx} onClick={() => {
                        setCollection(item)
                        console.log(collection)
                    }} className={cn(collection == item ? 'text-orange-600' : "")}>
                        {key_items[item]['title']}
                    </li>
                })}
            </ul>


            {/* <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                根据用户和使用分类
            </p> */}
        </section>

        <section>
            {collections[collection].map((topic, idx) => {
                return <div key={idx} >
                    <p className="my-6 md:max-w-[64rem] mx-auto font-heading text-2xl font-bold">
                        {key_items[topic]['title']}
                    </p>

                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                        {
                            topics[topic].map((link, link_idx) => {
                                return <div key={link_idx} className="w-full overflow-hidden rounded-lg border bg-background p-2">  {show_key_item(link)}</div>
                            })
                        }
                    </div>

                </div>

            })}
        </section>
    </div>
}