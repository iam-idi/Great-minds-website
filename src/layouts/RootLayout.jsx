import {Outlet} from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="bg-slate-900 w-screen h-screen">
        <Header />
        <main className="pt-24">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout;