"use client"
import Layout from "@/components/ui/layout";
import {useRef} from "react";

function Dashboard() {
    return (
        <Layout>
            <div className="container">
                <h3 className="font-bold text-2xl py-4">
                    Dashboard - should not bee seen by unauthenticated user !!
                </h3>
            </div>
        </Layout>
    )
}

export default Dashboard
