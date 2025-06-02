import { ReactNode } from "react";

export default function PersistentAuthLayout ({children}: {children: ReactNode}) {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {children}
        </div>
    );
}