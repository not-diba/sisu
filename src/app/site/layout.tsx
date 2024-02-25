import {Navigation} from "@/components/site/navigation";

const layout = ({children}: { children: React.ReactNode }) => {
    return (
        <main className="h-full w-full">
            <div
                className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
            <Navigation/>
            {children}
        </main>

    )
}
export default layout