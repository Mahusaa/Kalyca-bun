import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

// Site chrome for the main pages. Ad landing pages such as /ppdb-2027 sit outside
// this group because they render their own header and footer.
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
