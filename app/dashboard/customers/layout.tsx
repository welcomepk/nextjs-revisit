
export default function Layout({ children }: { children: React.ReactNode }) {
    return <div className="border border-slate-400 rounded-md p-5 bg-slate-100">
        <h2 className="text-center">Customers Layout</h2>

        <div>
            {children}
        </div>
    </div>
}