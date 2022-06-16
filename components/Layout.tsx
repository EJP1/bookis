import React, { ReactNode } from "react";
import { Box } from "react-feather";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="flex space-x-2 items-center p-6 text-lg font-bold border-b-2 border-gray-100">
        <Box strokeWidth={1} fill="rgb(2 132 199)" stroke="white" />
        <span>LostBox</span>
      </nav>
    </header>
    <div className="pt-6">{children}</div>
    {/* <footer>
      <hr />
    </footer> */}
  </div>
);

export default Layout;
