"use client";
import React from "react";
import SessionData from "@/app/api/main/helper/sessionData";
import { useEffect } from "react";
const UserPage = () => {
    useEffect(() => {
        const fetchData = async () => {
            const session = await SessionData();
            console.log("Session data on client side:", session);
        };
        fetchData();
    }, []);
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold mb-4">User Page</h1>
            <p>Welcome to the user dashboard. Here you can view and manage your bookings.</p>
        </main>
    );
};

export default UserPage;