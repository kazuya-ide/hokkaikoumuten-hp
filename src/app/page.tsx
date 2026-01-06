import Hero from './components/Hero';
import Concept from './components/Concept';
import Service from './components/Service';
import RapidMission from './components/RapidMission';
import Entry from './components/Entry';
export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Service />
      <RapidMission/>
      <Entry/>
    </main>
  );
}
