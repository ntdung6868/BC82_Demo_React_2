import React from "react";
import { useSelector } from "react-redux";

const DemoRedux = () => {
    // hooks
    const dataRedux = useSelector((state) => {
        // chonj reducer caaanf laasy duwx lieeuj
        return state.userSlice;
    });
    console.log("dataRedux", dataRedux);
    return (
        <div>
            <p>
                {dataRedux.nguoiDung.hoTen} {dataRedux.nguoiDung.tuoi}
            </p>
        </div>
    );
};

export default DemoRedux;
