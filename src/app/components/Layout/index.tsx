import React, { FC, ReactNode } from "react"
import Navbar from "../Navbar/Navbar";

interface Props {
    children?: ReactNode;
}

const Layout: FC<Props> = (props) => {
    const { children } = props;
    return (
        <div className="">
            <div className="gradient-bg"></div>
            <Navbar isHomePage={false} />
            {children}
        </div>
    )
}

export default Layout;