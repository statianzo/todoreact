import { useReducer } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

import { todoReducer } from "./reducer";

import "./app.css";

export function App({route}) {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <>
            <Header dispatch={dispatch} />
            <Main todos={todos} dispatch={dispatch} route={route} />
            <Footer todos={todos} dispatch={dispatch} route={route} />
        </>
    );
}
