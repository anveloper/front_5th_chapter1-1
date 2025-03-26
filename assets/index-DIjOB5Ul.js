(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();const o={MAIN:"/",LOGIN:"/login",LOGOUT:"/logout",PROFILE:"/profile",ERROR:"/error"},v={PAGE_PUSH:"page-push"},u={LOGIN_FORM:"login-form",PROFILE_FORM:"profile-form"},m=()=>`
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
  `,x=()=>`
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
  `,b=({children:t})=>`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${t}
      </div>
    </div>
  `,p=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `,f=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
  `,r={get:t=>JSON.parse(localStorage.getItem(t)),set:(t,e)=>localStorage.setItem(t,JSON.stringify(e)),remove:t=>localStorage.removeItem(t),isLogon:()=>!!r.get("user"),setUser:t=>r.set("user",t),login:t=>r.set("user",{username:t,email:"",bio:""}),logout:()=>r.remove("user"),sync:()=>{}},g=({url:t})=>{const e=a=>a===t?"text-blue-600 font-bold":"text-gray-600";return`
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="${e(o.MAIN)}">홈</a></li>
        ${r.isLogon()?`
            <li><a href="/profile" class="${e(o.PROFILE)}">프로필</a></li>
            <li><a href="/logout" id="logout" class="text-gray-600">로그아웃</a></li>
          `:`
            <li><a href="/login" id="login-link" class="${e(o.LOGIN)}">로그인</a></li>
            `}
      </ul>
    </nav>
  `},h=()=>(r.isLogon(),b({children:[f(),g({url:o.MAIN}),y(),p()].join("")})),y=()=>`
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
`,w=()=>{r.isLogon();const t=r.get("user"),e=`
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
              value="${(t==null?void 0:t.username)||""}"
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
              value="${(t==null?void 0:t.email)||""}"
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
            >${(t==null?void 0:t.bio)||""}</textarea>
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
  `;return b({children:[f(),g({url:o.PROFILE}),e,p()].join("")})},L={[o.MAIN]:h,[o.LOGIN]:x,[o.PROFILE]:w,[o.ERROR]:m},i=(t,e=!1)=>{history[e?"replaceState":"pushState"](null,null,t),d()},d=()=>{const t=document.querySelector("#root"),{pathname:e}=location,n=r.isLogon();if(e===o.PROFILE&&!n)return i(o.LOGIN,!0);if(e===o.LOGIN&&n)return i(o.MAIN,!0);const a=L[e]||m;t.innerHTML=a(),O()},O=()=>{const t=document.querySelector("#root");t.addEventListener("submit",e=>{if(e.preventDefault(),e.target.id===u.LOGIN_FORM){const a=new FormData(e.target).get("username")||"";r.login(a),i(o.MAIN)}else if(e.target.id===u.PROFILE_FORM){const n=new FormData(e.target),a=n.get("username")||"",s=n.get("email")||"",l=n.get("bio")||"";r.setUser({username:a,email:s,bio:l})}}),t.addEventListener("click",e=>{if(e.target.tagName==="A"){if(e.preventDefault(),e.target.pathname===o.LOGOUT){r.logout(),i(o.LOGIN);return}i(e.target.pathname)}}),t.addEventListener(v.PAGE_PUSH,e=>{e.detail.url&&i(e.detail.url)})};window.addEventListener("popstate",d);d();d();
