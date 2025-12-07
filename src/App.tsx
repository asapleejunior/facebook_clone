import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Rightbar from './components/Layout/Rightbar'
import Feed from './components/Feed/Feed'
import DemoBanner from './components/DemoBanner'

function App() {
  return (
    <div className="min-h-screen bg-facebook-gray">
      <DemoBanner />
      <Navbar />
      <div className="flex justify-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default App
