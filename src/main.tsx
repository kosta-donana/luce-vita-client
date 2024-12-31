import axios from 'axios';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

axios.defaults.timeout = 5000;

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

/**
 * root 요소의 크기를 visual viewport에 알맞게 변경하는 함수이다.
 */
function adjustRootDimensions(): void {
  // Visual viewport가 가로 방향 레이아웃을 구성하기에 적합한 너비와 종횡비 값을 가졌는지 확인하기
  const isLandscapeLayoutSuitable = (): boolean =>
    568 <= window.innerWidth && 0.81 < window.innerWidth / window.innerHeight;

  let w, h; // 각각 root 요소의 너비 값과 높이 값으로써 설정될 값들이다.
  if (isLandscapeLayoutSuitable()) {
    w = Math.max(390, Math.ceil(window.innerWidth * 0.3));
    h = Math.min(w * 2, window.innerHeight);
  } else {
    [w, h] = [window.innerWidth, window.innerHeight];
  }

  // html 요소의 폰트 크기(rem 단위의 기준)를 뷰포트 너비에 알맞게 변경하기
  document.documentElement.style.fontSize = Math.round(16 * Math.cbrt(w / 1440) * 100) / 100 + 'px';

  // root 요소의 너비 값과 높이 값 설정하기
  [rootEl.style.width, rootEl.style.height] = [`${w}px`, `${h}px`];
}

// 처음으로 root 요소의 크기를 조정하고 나서, root(: Root)에 리액트 요소를 렌더링하기
adjustRootDimensions();
root.render(<App />);

let timeoutId = 0;
/**
 * root 요소의 크기 변경이 잦은 시간 간격으로 수행되는 것을 방지하는 디바운싱(Debouncing) 함수이다.
 */
function debounceAdjustings(): void {
  if (timeoutId != 0) {
    window.clearTimeout(timeoutId);
  }
  timeoutId = window.setTimeout(adjustRootDimensions, 250);
}

// 화면 크기가 변경될 때
window.addEventListener('resize', debounceAdjustings);

// 화면 방향이 변경될 때
screen.orientation?.addEventListener('change', debounceAdjustings);
