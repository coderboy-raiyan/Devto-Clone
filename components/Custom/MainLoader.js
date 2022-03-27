/* eslint-disable import/no-extraneous-dependencies */
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function MainLoader() {
    const user = useSelector((state) => state.user.user);
    const router = useRouter();
    const [color, setColor] = useState("#36D7B7");

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <HashLoader color={color} css={override} size={100} />;
            </div>
        </div>
    );
}

export default MainLoader;
