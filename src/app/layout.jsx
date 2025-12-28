import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

// Add metadata export
export const metadata = {
  title: "Dev Story",
  description: "Your app description",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* navbar */}
        <header>
          <Navbar></Navbar>
        </header>

        {/* main content */}

        <main>{children}</main>

        {/* footer */}
      </body>
    </html>
  );
};

export default RootLayout;
