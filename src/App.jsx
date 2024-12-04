import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Input,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@components';
import {
  Navbar,
  Hero,
  Clients,
  Services,
  TopDestinations,
  TravelPoint,
  KeyFeatures,
  Testimonials,
  Subscribe,
  Footer,
} from '@pages';

function App() {
  return (
    <div className='relative '>
      {/* <div class='hidden lg:flex xl:hidden w-[500px] h-[500px] absolute top-[-223px] left-[-356px] bg-[#FF5722] opacity-[0.2] backdrop-blur-[500px] rounded-full'></div> */}

      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <TopDestinations />
      <TravelPoint />
      <KeyFeatures />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
