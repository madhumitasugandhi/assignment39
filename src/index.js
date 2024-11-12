import { createRoot } from "react-dom/client";

import GreetingGM,{Greetingbless, Greetingbye} from "./app";

const root = createRoot(document.getElementById("root"));

root.render(<>

    <h1>Hii Madhumita</h1>
    <GreetingGM/><br/>
    <Greetingbless/>
    <Greetingbye/>
</>)