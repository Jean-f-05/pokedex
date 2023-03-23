import Theme from "./styles/theme";
import Navbar from './components/Navbar';

import Main from './pages/main';

function App() {
  return (
    <>
      <Theme>
        <Navbar />
        <Main />

      </Theme>
    </>
  );
}

export default App;
