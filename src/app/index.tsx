import { useCallback, useEffect, useState } from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import '@wcj/dark-mode';
import styles from './index.module.less';

export default function App() {
  const [type, setType] = useState('encoder');
  const [handler, setHandler] = useState('');
  const [coder, setCoder] = useState('');

  const handlerFun = useCallback(() => {
    if (type === 'decoder') {
      setHandler(decodeURIComponent(coder));
    } else if (type === 'encoder') {
      console.log(encodeURIComponent(' sdfsdf sef'))
      setHandler(encodeURIComponent(coder));
    }
  }, [coder, type]);

  useEffect(() => {
    handlerFun()
  }, [handlerFun]);

  function handleChange(evn: React.ChangeEvent<HTMLInputElement>) {
    setType(evn.target.value);
  }
  return (
    <div className={styles.warpper}>
      <GitHubCorners
        size={52}
        href="https://github.com/jaywcjlove/url-encode"
      />
      <header>
        <div>URL Decoder/Encoder</div>
        <div className={styles.type}>
          <label>
            <input type="radio" onChange={handleChange} name="type" checked={type === 'decoder'} value="decoder" /> Decoder
          </label>
          <label>
            <input type="radio" onChange={handleChange} name="type" checked={type === 'encoder'} value="encoder" /> Encoder
          </label>
          <dark-mode permanent light="Light" dark="Dark"></dark-mode>
        </div>
      </header>
      <main>
        <textarea placeholder="Enter the code here." defaultValue={coder} onChange={(evn) => setCoder(evn.target.value)}></textarea>
        <textarea placeholder="Here is the processed result." readOnly defaultValue={handler}></textarea>
      </main>
    </div>
  )
}