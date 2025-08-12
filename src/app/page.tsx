import AboutSection from "@/components/About";
import Portfolio from "@/components/Portofolio";
import WelcomeScreen from "@/components/WelcomeScreen";
import ClientWrapper from "@/components/ClientWrapper";
export default function Home() {
  return (
      <div>
        <ClientWrapper>
          <WelcomeScreen/>
          <AboutSection/>
          <Portfolio/>      
        </ClientWrapper>


      </div>
    
  );
}
