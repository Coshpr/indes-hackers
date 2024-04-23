'use client'

import { key_items, show_collections, collections, topics } from "@/content/search/varients"
import { cn } from "@/lib/utils"
import { useState } from "react"


const show_key_item = (key: string) => {
    const data = key_items[key]
    return <div className="flex flex-row">
        <div>key</div>
        <div>
            <p>{data.title}</p>
            <p> ***** </p>
        </div>

    </div>
}


export default function SearchContent() {

    const [collection, setCollection] = useState<string>(show_collections[0])

    return <div>

        <section>
            <ul className={cn(
                " flex flex-row gap-4 text-xl font-bold justify-center items-center",
            )}>
                {show_collections.map((item, idx) => {
                    return <li key={idx} onClick={() => {
                        setCollection(item)
                        console.log(collection)
                    }} className={cn(collection == item ? 'text-orange-600' : "")}>
                        { key_items[item]['title']}
                    </li>
                })}
            </ul>
        </section>

        <section>
            {collections[collection].map((topic, idx) => {
                return <div key={idx}>
                    <p className="my-4"> 
                        { key_items[topic]['title']}
                    </p>
                    <div className="grid grid-cols-6 gap-4">
                        {
                            topics[topic].map((link, link_idx) => {
                                return <div key={link_idx} className="border p-4 round-sm">  {show_key_item(link)}</div>
                            })
                        }
                    </div>

                </div>

            })}
        </section>
    </div>
}