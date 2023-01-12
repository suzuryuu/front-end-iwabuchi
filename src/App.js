import Header from './Header';
import Profile from './Profile';
import Edit  from './Edit';
import Home from './Home';
import Matching from './Matchinguser';
import Request from './Requestuser';
import Footer from './Footer';

function App() {
  return (
    
    <div className="App">
   
    <Header />  {/*ヘッダー */}

    {/* <Profile />プロフィール画面 */}
  
    <Edit />{/*プロフィール編集画面*/}

    {/* <Home />ホーム画面 */}

    {/* <Matching/>マッチングユーザ画面 */}

    {/* <Request/>リクエストユーザ画面 */}

    <Footer/>{/* フッター */}


    </div>
    
  );
}

export default App;
