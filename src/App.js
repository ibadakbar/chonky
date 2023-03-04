

// import Weather from './Component/Weather'
import BasicTabs from "./tab";
import { FullFileBrowser } from 'chonky';

function App() {
  const files = [
    { id: 'lht', name: 'Projects', isDir: true },
    {
      id: 'mcd',
      name: 'chonky-sphere-v2.png',
      thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
    },
  ]
  const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true }]
  return (
    <div style={{ height: 300 }}>
      <FullFileBrowser files={files} folderChain={folderChain} />
    </div>
  )

}
export default App;
