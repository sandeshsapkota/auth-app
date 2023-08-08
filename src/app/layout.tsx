"use client"
import '@/assets/sass/app.scss'
import {Provider} from "react-redux";
import store from "@/store/store";
import {ReactNode} from "react";

function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}>
                {children}
        </Provider>
        </body>
        </html>
    )
}

export default RootLayout;
