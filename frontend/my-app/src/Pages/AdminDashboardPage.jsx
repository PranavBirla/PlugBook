import React, { useEffect, useState } from "react";

import API from "../api/axios";

import Sidebar from "../Components/admin/Sidebar";
import Topbar from "../Components/admin/Topbar";
import HeroSection from "../Components/admin/HeroSection";
import StatsGrid from "../Components/admin/StatsGrid";
import AnalyticsSection from "../Components/admin/AnalyticsSection";
import LiveFeed from "../Components/admin/LiveFeed";
import StationGrid from "../Components/admin/StationGrid";

const AdminDashboard = () => {

    const [dashboard, setDashboard] = useState(null);

    const [recentBookings, setRecentBookings] = useState([]);

    const [stationAnalytics, setStationAnalytics] = useState([]);

    const [bookingsTrend, setBookingsTrend] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const [
                    dashboardRes,
                    bookingsRes,
                    analyticsRes,
                    trendRes
                ] = await Promise.all([

                    API.get("/api/admin/dashboard"),

                    API.get("/api/admin/recent-bookings"),

                    API.get("/api/admin/station-analytics"),

                    API.get("/api/admin/bookings-trend")

                ]);

                setDashboard(dashboardRes.data);

                setRecentBookings(bookingsRes.data);

                setStationAnalytics(analyticsRes.data);

                setBookingsTrend(trendRes.data);

            } catch (err) {

                console.log(err);

            } finally {

                setLoading(false);

            }

        };

        fetchDashboard();

    }, []);

    if (loading || !dashboard) {

        return (
            <div className="min-h-screen bg-black flex items-center justify-center text-white">
                Loading...
            </div>
        );

    }

    return (

        <div className="relative min-h-screen overflow-hidden bg-black/[0.05]">

            {/* BACKGROUND */}

            <div className="fixed inset-0 -z-20">

                <img
                    src="/background1.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/75" />

                <div className="absolute inset-0 bg-[#895CE7]/10" />

            </div>

            <div className="absolute top-0 left-0 w-full h-[500px] bg-[#895CE7]/10 blur-[140px] -z-10" />

            <Sidebar />

            <div className="relative z-10 lg:pl-[130px] px-4 md:px-8 py-8 md:py-10 max-w-[1800px] mx-auto">

                <Topbar />

                <HeroSection dashboard={dashboard} />

                <StatsGrid dashboard={dashboard} />

                <AnalyticsSection
                    bookingsTrend={bookingsTrend}
                    dashboard={dashboard}
                />

                <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-6 mt-8">

                    <LiveFeed recentBookings={recentBookings} />

                    <StationGrid stationAnalytics={stationAnalytics} />

                </div>

            </div>

        </div>

    );

};

export default AdminDashboard;