import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import FeaturedCourses from "@/components/featuredCourses";
import HeroSection from "@/components/herosection";
import Whychooseus from "@/components/whychooseus";
import UpcomingWebinars from "@/components/UpciomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <main className="min-h-screen bg-black/[0.96] antialiased  text-white " >
    <HeroSection  />
    <FeaturedCourses/>
    <Whychooseus/>
    <MusicSchoolTestimonials/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>

   
   </main>
   
   </>
  );
}
