import { ReactNode } from "react";
import Header from "./Header";

type Props = {
    children : ReactNode;
}

function DefaultLayout({ children } : Props) {
    return ( 
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;