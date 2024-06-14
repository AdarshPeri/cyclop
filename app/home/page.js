import FirstSection from '../components/FirstSection';
import Footer from '../components/Footer';
import SecondSection from '../components/SecondSection';

export const metadata = {
  title: 'Home'
}

export default function Page() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <Footer />
    </>
  );
}
