import { Outlet } from "react-router-dom";

export default function WebLayout() {
    return(
        <div>
            <h1>Layout</h1>
            <Outlet></Outlet>
        </div>
    )
};
