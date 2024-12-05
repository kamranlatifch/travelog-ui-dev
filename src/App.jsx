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
    <div className='lg:relative overflow-hidden'>
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

      <div className='hidden lg:flex xxl:hidden absolute  w-[406px] h-[406px] xl:w-[500px] xl:h-[500px] top-[1478px] xl:top-[847px] left-[946px] xl:left-[1351px] bg-[#FACD49] opacity-50 rounded-full shadow-2xl shadow-[#FACD49] backdrop-blur-[406px] blur-[150px] -z-10'></div>
      <div className='hidden  lg:flex  xl:hidden absolute overflow-hidden  w-[500px] h-[500px] -top-[223px]  -left-[356px] xl:left-[1351px] bg-[#FF5722] opacity-50 rounded-full shadow-2xl shadow-[#FACD49] backdrop-blur-[406px] blur-[150px] -z-10'></div>
    </div>
  );
}

export default App;
