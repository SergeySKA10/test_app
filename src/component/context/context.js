import { createContext } from "react";

const dataContext = createContext({
    mail: "context@example.com",
    text: 'context text',
    forceChangeMail: () => {}
});

export default dataContext;