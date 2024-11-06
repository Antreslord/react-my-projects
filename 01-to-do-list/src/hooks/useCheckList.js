import { useState, useEffect } from "react";

export function useCheckList() {
    const [checkList, setCheckList] = useState(() => {
      const getCheckListFromLocalStorage = localStorage.getItem("checkList");

      return getCheckListFromLocalStorage
        ? JSON.parse(getCheckListFromLocalStorage)
        : {};
    });

    useEffect(() => {
      localStorage.setItem("checkList", JSON.stringify(checkList));
    }, [checkList]);

    return {checkList, setCheckList}
}