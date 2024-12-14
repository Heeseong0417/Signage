"use client"
import Header from "../components/navigation/header/header";
import "./global.css"
import type { NextPage } from "next";
import { Suspense, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Footer from "../components/navigation/footer/footer";

import {Provider , useDispatch, useSelector} from 'react-redux';
import store from "../tool/redux/store";
import { clearAuthData, setAuthData } from "../tool/redux/slice";
import LoadingOverlay from "../components/loading/LoadingOverlay";
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    return (
        <html lang="ko">
            <body>
            <LoadingOverlay />
            <Suspense fallback={<LoadingOverlay />}>
              {children}
            </Suspense>
    
  
            </body>
        </html>
    );
}