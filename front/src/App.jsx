import HeroBanner from './components/HeroBanner/HeroBanner';
import DressCodePremium from './components/DressCodePremium/DressCodePremium';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <HeroBanner />
      {/* <CountdownPremium /> */}
      {/* <Timeline /> */}
      <DressCodePremium />
      {/* <PhotosCouple /> */}
      {/* <MessagePersonnel /> */}
      <Footer />
    </div>
  );
}

export default App;
