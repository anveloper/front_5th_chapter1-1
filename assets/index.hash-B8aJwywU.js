(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const s={MAIN:"/",LOGIN:"/login",LOGOUT:"/logout",PROFILE:"/profile",ERROR:"/error"},u={PAGE_PUSH:"page-push"},p={LOGIN_FORM:"login-form",PROFILE_FORM:"profile-form"},f=()=>({template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}),w=()=>({template:`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" name="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
          </div>
          <div class="mb-6">
            <input type="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded" required>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `}),g=({children:e})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${e}
      </div>
    </div>
  `,v=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,h=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  `,L=()=>{const e=()=>{try{return JSON.parse(localStorage.getItem("user"))||{}}catch{return{}}},t={};return{isLogon:()=>!!e().username,get:a=>a?(t==null?void 0:t[a])||void 0:t,set:a=>(Object.entries(a).forEach(([c,y])=>t[c]=y),t),sync:()=>{["user","users"].forEach(a=>{try{const c=JSON.stringify(localStorage.getItem(a));t[a]=c||null}catch{t[a]=void 0}})}}},i=globalThis.store||L();globalThis.store=i;const x=({url:e})=>{const t=l=>l===e?"text-blue-600 font-bold":"text-gray-600";return`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${t(s.MAIN)}">홈</a></li>
        ${i.isLogon()?`
            <li><a href="/profile" class="${t(s.PROFILE)}">프로필</a></li>
            <li><a href="/logout" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" id="login-link" class="${t(s.LOGIN)}">로그인</a></li>
            `}
      </ul>
    </nav>
  `},E=()=>(i.get("username"),{template:g({children:[h(),x({url:s.MAIN}),O(),v()].join("")})}),O=()=>`
  <main class="p-4">
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
    </div>

    <div class="space-y-4">

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">홍길동</p>
            <p class="text-sm text-gray-500">5분 전</p>
          </div>
        </div>
        <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">김철수</p>
            <p class="text-sm text-gray-500">15분 전</p>
          </div>
        </div>
        <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">이영희</p>
            <p class="text-sm text-gray-500">30분 전</p>
          </div>
        </div>
        <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">박민수</p>
            <p class="text-sm text-gray-500">1시간 전</p>
          </div>
        </div>
        <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4">
        <div class="flex items-center mb-2">
          <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">정수연</p>
            <p class="text-sm text-gray-500">2시간 전</p>
          </div>
        </div>
        <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
        <div class="mt-2 flex justify-between text-gray-500">
          <button>좋아요</button>
          <button>댓글</button>
          <button>공유</button>
        </div>
      </div>
    </div>
  </main>
`,I=()=>{i.get("username");const e=i.get(),t=`
    <main class="p-4">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 text-sm font-bold mb-2"
              >사용자 이름</label
            >
            <input
              type="text"
              id="username"
              name="username"
              value="${(e==null?void 0:e.username)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block text-gray-700 text-sm font-bold mb-2"
              >이메일</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${(e==null?void 0:e.email)||""}"
              class="w-full p-2 border rounded"
            />
          </div>
          <div class="mb-6">
            <label
              for="bio"
              class="block text-gray-700 text-sm font-bold mb-2"
              >자기소개</label
            >
            <textarea
              id="bio"
              name="bio"
              rows="4"
              class="w-full p-2 border rounded"
            >${(e==null?void 0:e.bio)||""}</textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </main>
  `;return{template:g({children:[h(),x({url:s.PROFILE}),t,v()].join("")})}},b="/front_5th_chapter1-1",d="#",P=e=>{e.preventDefault();let t=e.target.getAttribute("href");t===s.LOGOUT?(localStorage.removeItem("user"),t=s.MAIN):t===s.LOGIN&&i.get("username")&&(t=s.MAIN);const n={detail:{url:t},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(u.PAGE_PUSH,n))},N=()=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",P)})},S={[s.PROFILE]:I,[s.LOGIN]:w,[s.MAIN]:E,[s.ERROR]:f},m=e=>{var l;e.preventDefault();let t=((l=e.detail)==null?void 0:l.url)||location.hash||s.MAIN;const n=i.isLogon();t=t.replace(d,""),!n&&t===s.PROFILE&&(t=s.LOGIN),n&&t===s.LOGIN&&(t=s.MAIN),t.includes(d)||(t=d+t),t.includes(b)&&(t=t.replace(b,"")),location.hash=t,A(t)},A=e=>{const t=e.replace(b,"").replace(d,""),n=(S[t]||f)(),l=document.querySelector("#root");l.innerHTML=n.template,N()};document.addEventListener(u.PAGE_PUSH,m);document.addEventListener("submit",e=>{if(e.preventDefault(),e.target.id===p.LOGIN_FORM){const l={username:new FormData(e.target).get("username")||"",email:"",bio:""};localStorage.setItem("user",JSON.stringify(l)),i.set(l);const r={detail:{url:s.MAIN},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(u.PAGE_PUSH,r))}else if(e.target.id===p.PROFILE_FORM){const t=new FormData(e.target),n={username:t.get("username")||"",email:t.get("email")||"",bio:t.get("bio")||""};localStorage.setItem("user",JSON.stringify(n)),i.set(n);const o={detail:{url:s.PROFILE},bubbles:!0,cancelable:!0};document.dispatchEvent(new CustomEvent(u.PAGE_PUSH,o))}});window.addEventListener("storage",i.sync());window.addEventListener("hashchange",m);window.addEventListener("popstate",m);window.addEventListener("DOMContentLoaded",m);
