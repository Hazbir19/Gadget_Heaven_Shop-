import { useEffect } from "react";

const UseTitleHook = (title) => {
  useEffect(() => {
    document.title = `${title} | Gadget Heaven`;
  }, [title]);
};
export default UseTitleHook;
