import React, { FC, ReactNode } from "react"

interface Props {
    title: string;
}

const Header: FC<Props> = (props) => {
    const { title } = props;
    return (
        <div>
            <h1 className='beyonderFont text-5xl'>
                {title}
            </h1>
        </div>
    )
}

export default Header