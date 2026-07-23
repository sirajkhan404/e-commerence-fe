import "./App.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Routes from "@/pages/Routes";
import { ConfigProvider } from 'antd';
import { useAuth } from "@/context/Auth";
import ScreenLoader from "@/components/ScreenLoader";

const App = () => {
  const { isAppLoading } = useAuth()
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" }, components: { Button: { controlOutline: 0 } } }}>
      {!isAppLoading ? <Routes /> : <ScreenLoader />}
    </ConfigProvider>
  )
}

export default App