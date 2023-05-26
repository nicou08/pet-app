import "@/styles/global.css";
import Headerrr from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Petgarious",
  description: "Discover pet information and share your pet stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Headerrr />
          <div className="">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
