import Routers from "@routes/Routers";
/* import components */
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
