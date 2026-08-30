import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import RobotFaceButton from "@/components/RobotFaceButton/RobotFaceButton";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full max-w-full mx-auto px-4 py-4 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[993px]:px-3 min-[1200px]:max-w-[1144px] min-[1200px]:px-0 min-[1401px]:max-w-[1320px] min-[1401px]:px-3 flex flex-col flex-1">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <RobotFaceButton />
    </div>
  );
}
