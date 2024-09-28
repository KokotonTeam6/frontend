import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TestPage from "./pages/Test/testPage";
import RankPage from "./pages/Test/rankPage";
import NoteCard from "./pages/Test/Note/NoteCard";
import Mypage from "./pages/Test/Mypage/Mypage"; // 마이페이지 임포트
import Main from "./pages/Main/mainPage";
import SplashScreen from "./pages/SplashScreen/splashScreen";
import Login from "./pages/Login/login";
import LoginSecond from "./pages/Login/loginSecond";
import EmailGame from "./pages/EmailGame/EmailGame";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/rank" element={<RankPage />} />
          <Route path="/note" element={<NoteCard />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginSecond" element={<LoginSecond />} />
          <Route path="/email" element={<EmailGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
