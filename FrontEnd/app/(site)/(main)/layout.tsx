import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RobotFaceButton from "@/components/RobotFaceButton/RobotFaceButton";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-4 flex flex-1 flex-col py-4 md:mx-6 lg:mx-20">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <RobotFaceButton />
    </div>
  );
}
