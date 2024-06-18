import FullPageNav from './components/FullPageNav';
import Landing from './components/Landing';
import Navigation from './components/Navigation';

export default function Page() {
  return (
    <main>
      <div className='min-h-screen flex flex-col items-center gap-8'>
        <Navigation />
        <FullPageNav />
        <Landing />
      </div>
    </main>
  );
}
