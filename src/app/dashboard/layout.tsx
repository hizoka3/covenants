import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
       children,
   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={'flex'}> {/*flex*/}
            <div className={'min-w-40 w-40 py-4 border-r border-gray-100 shadow-xl h-screen'}>
                <Sidebar />
            </div>
            <div className={'p-4 w-full h-screen overflow-scroll'}>
                {children}
            </div>
        </div>
    );
}