import AvailableCourses from "@/components/AvailableCourses";
import Instructors from "@/components/Instructors";
import MoreAboutCourse from "@/components/MoreAboutCourse";
import QuotesSection from "@/components/QuotesSection";
import TopSection from "@/components/TopSection";
 import UpCommingWebinar from "@/components/UpCommingWebinar";
 import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-while/[0.02]"> 
    <TopSection/> 
    <AvailableCourses/>
    <MoreAboutCourse/>
    <QuotesSection/>
    <UpCommingWebinar/>
    <Instructors/>
    <Footer/>
    </main>
    
  );
}
