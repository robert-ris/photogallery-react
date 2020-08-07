import React, { useState } from 'react';
import Title from './components/Title';
import UploadFrom from './components/UploadForm';
import ImageGrid from './components/ImageGrig';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadFrom />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
