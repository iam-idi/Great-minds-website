import {Outlet} from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="bg-slate-900 w-screen min-h-screen">
        <Header />
        <main className="pt-24 px-2 sm:px-16 md:px-24 lg:px-36">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout;