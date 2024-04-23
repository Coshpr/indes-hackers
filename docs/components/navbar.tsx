import { cn } from "@/lib/utils"

type PageProps = {
    className?: string
}

export default async function NavBar({ className }: PageProps) {
    return <header className={cn(className)}>
        header
    </header>
}