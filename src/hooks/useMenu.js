import { useState, useEffect } from "react";

export const useMenu = () => {
    const [menu, setMenu] = useState("");

    useEffect(() => {
        if (menu != "hidden") {
        document.querySelector("#menu").classList.add("hidden");
        } else {
        document.querySelector("#menu").classList.remove("hidden");
        }
    }, [menu]);

    const showMenu = () => {
        setMenu(menu === "hidden" ? "" : "hidden");
    };

    return { showMenu }
}