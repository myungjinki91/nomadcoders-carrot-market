# Carrot Market Reloaded

# 1 ❤️ ANNOUNCEMENT

## 1.1 🚨 Read this First 🚨

## 1.2 Thank You!

## 1.3 🔔 NextJS Quiz 🔔

https://docs.google.com/forms/d/e/1FAIpQLSee9TXmr6qVsCMlrgO2lj0paJ5pXNKH9NSsPhZmah5d-VxmCA/viewscore?pli=1&viewscore=AE0zAgCMEFnFg55ttlgwlehrRNDYDg9RqoxZfTXiJF0yciQ1iOoxLg-NcJGTyRPn3Vtwwoc

# 2 INTRODUCTION

2월 6일 강의 녹화 시작

## 2.0 Welcome

유저에게 실제로 어떻게 보일지 만들어보는 강의

토이 프로젝트 말고, 실제 제품을 만들어보면 더 배우는게 많아요. 그리고 프레임워크가 이런 기능을 왜 제공하는지도 알 수 있게 되요.

Next.js도 불편한 것이 있어서 이걸 다른 프로그램을 사용해서 해결해 보기도 할거에요.

무엇이든 구현할 수 있다는 자신감!

## 2.1 Requirements

https://nomadocders.co/nextjs-for-beginners/

## 2.2 What Are We Using

- Next.js
- Prisma
- PlanetScale
- Vercel
- Cloudflare
  - Cloudflare Images
  - Cloudflare stream
  - Cloudflare workers

## 2.3 Learning Rate

배우는 시간은 선형입니다.

인증, 이미지까지는 오래 걸립니다. 그 이후는 쭉쭉 나갈겁니다.

## 2.4 How To Get Help

1. 댓글
   1. 작동, 개념 질문
2. Issues
   1. 뭔가 이상함, 에러2

## 2.5 Project Setup

Git Provider를 사용해야 합니다. 우리는 GitHub 사용!

https://nextjs.org/docs/app/api-reference/create-next-app

https://nextjs.org/docs/pages/api-reference/create-next-app

```bash
npx create-next-app@latest
```

TypeScript를 씁시다!

```
Yes Yes Yes No Yes No
```

# 3 TAILWIND

## 3.0 Introduction

디자이너 없이 멋진 CSS를 빠르게 만들고 싶다면 CSS Framework를 사용해야 합니다.

그 중 멋지고 멋진 Tailwind CSS를 배워봅시다.

Utility First는 짧은 class name이 엄청 많다.

Bootstrap, Foundation은 기본적인 UI를 제공해서 비슷비슷합니다. 하지만 Tailwind CSS는 아무것도 제공하지 않습니다.

직접 class를 만들려먼 class 이름도 고민해야하고, 값도 고민해야 합니다.

Tailwind CSS를 직접 만든 사람도, CSS와 Markup을 섞다니!!! 난리날 것을 알았지만, 그래도 한 번 써보라고 했다.

반응형, 다크모드 등등 다 준비되어 있습니다.

많은 회사들에서 사용합니다.

## 3.1 IntelliSense

간단한 것들 만들어봅시다.

Visual Studio Code Extension, Tailwind CSS IntelliSense 설치

그러면 이 Extension이 tailwind.config.ts를 확인

Auto complete: option + esc

## 3.2 Card Component

1 container + 4 row + each column

```tsx
export default function Home() {
  return (
    <main>
      <div>
        <div>
          <div>
            <span>In transit</span>
            <span>Coolblue</span>
          </div>
          <div />
        </div>
        <div>
          <span>Time</span>
          <span>9:30-10:30</span>
        </div>
        <div>
          <div />
          <div />
        </div>
        <div>
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span>Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

작업 후

```tsx
export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1">
              In transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full ">
            Today
          </span>
          <span>9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute rounded-full w-full h-2" />
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

## 3.3 Modifiers

modifier는 Style을 조건부로 적용할 수 있게 해줌

modifier는 시작을 항상 : 으로 합니다.

Dark Mode

hover over

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-600">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold -mb-1 dark:text-gray-300">
              In transit
            </span>
            <span className="text-4xl font-semibold dark:text-white">
              Coolblue
            </span>
          </div>
          <div className="size-12 rounded-full bg-orange-400" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase px-2.5 py-1.5 text-xs font-medium rounded-full transition hover:bg-green-500 hover:scale-125">
            Today
          </span>
          <span className="dark:text-gray-100">9:30-10:30</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute rounded-full w-full h-2" />
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300 ">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400 dark:text-gray-500">Delivered</span>
        </div>
      </div>
    </main>
  );
}
```

## 3.4 Tailwind Variables

ring, —tw-ring-offset-shadow, —tw-ring-shadow

가끔 ring처럼 여러 변수를 필요로하는 속성을 만나게 될 거에요.

bg-black에는 —tw-bg-opacity가 있는데요 bg-opacity를 설정하면 CSS는 바꾸지 않지만 변수를 설정할 수 있습니다.

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 focus:outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:text-red-600 placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium  outline-none">
          Search
        </button>
      </div>
    </main>
  );
}
```

## 3.5 Responsive Modifiers

다크모드 딸깍

Tailwind CSS는 모바일이 우선이다. 그래서 더 큰 화면에 사용하는 modifier가 존재.

Tailwind에서는 반대로 모바일부터 하고 데스크탑을 꾸밉니다.

https://tailwindcss.com/docs/container에 sm, md, lg, xl, 2xl에 대한 내용이 있습니다.

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow"
          type="text"
          placeholder="Search here..."
        />
        <button className="bg-black text-white py-2 rounded-full active:scale-90  transition-transform font-medium outline-none md:px-10 ">
          Search
        </button>
      </div>
    </main>
  );
}
```

## 3.6 Form Modifiers

- bg-gradient-to-tr from-cyan-500 to-purple-400
- https://tailwindcss.com/docs/gradient-color-stops
- invalid:
- https://tailwindcss.com/docs/hover-focus-and-other-states#invalid
- invalid:form: 도 가능합니다.
- peer는 부모에 선언, 자식에서 설정
- https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
- hidden
  - display: none

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block ">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium outline-none md:px-10 bg-black ">
          Log in
        </button>
      </div>
    </main>
  );
}
```

## 3.7 State Modifiers

\*: outline-none → 자식에 모두 적용!

https://tailwindcss.com/docs/hover-focus-and-other-states#styling-direct-children

has-[.peer]:bg-green-100 →

https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-descendants

has는 CSS의 가상 클래스

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div
        className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow
      has-[:invalid]:ring-red-100"
      >
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block ">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90  transition-transform font-medium  md:px-10 bg-black ">
          Log in
        </button>
      </div>
    </main>
  );
}
```

## 3.8 Lists and Animations

- odd:
- even:
- first:
- last:
- animation-bounce
- animation-spin 로딩에 사용됨
- animation-pulse 로딩에 사용됨, 스켈레톤 + double background
- empty:

```
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        {["Nico", "Me", "You", "Yourself", ""].map((person, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="size-10 bg-blue-400 rounded-full" />
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">
              {person}
            </span>
            <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full relative">
              <span className="z-10">{index}</span>
              <div className="size-6 bg-red-500 rounded-full absolute animate-ping " />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

```

## 3.9 Group Modifiers

지금까지는 자식의 상태가 바뀌면 부모 컨테이너를 바꾸는 걸 배워봤습니다.

이젠 부모의 state가 바뀌었을 때!!! 자식을 바꾸게 하는게 Group modifier

```tsx
<div className="group">
  <div className="group-hover: text-red-500"></div>
</div>
```

- group-hover
- group-require
- group-focus
- group-invalid

```tsx
export default function Home() {
  return (
    <main className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
        <div className="group flex flex-col">
          <input
            className="bg-gray-100 w-full"
            placeholder="Write your email"
          />
          <span className="group-focus-within:block hidden">
            Make sure it is a valid email...
          </span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
```

## 3.10 JIT

Tailwind CSS가 수만가지 CSS class를 준비해 둔 것이 아니라, 유저가 className을 작성하면 거기에 맞게 CSS를 생성해줍니다.

JIT compiler입니다.

arbitrary values, 리스트에 없는 애매한 값 추가할 때

```tsx
<div className="h-10" />
<div className="h-[3523.23px]" />
```

원하는 색상 추가

https://tailwindcss.com/docs/adding-custom-styles

```tsx
<button className="rounded-sexy-name mt-tomato">Submit</button>
```

```tsx
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        tomato: "120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      },
    },
  },
  plugins: [],
};
export default config;
```

## 3.11 Directives

https://tailwindcss.com/docs/functions-and-directives

우리가 className에 추가한 CSS는 utilities

base는 reset과 비슷

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

component는??

@apply는?? 분리된 컴포넌트를 위한 것.

```css
.btn {
  @apply w-full bg-black;
}
```

```html
<div className="btn" />
```

@layer는 base에 추가할때 사용

```html
@layer base { a { @apply text-blue-500; } }
```

@tailwind component는???

layer, base 등 base를 수정하기 위해 layer와 apply를 한 것들을 base는 내버려두고 component에서 해라~~

## 3.12 Plugins

component는 plugin을 위한 것

npm으로 남들이 만든 plugin을 받아서 사용할 수 있다.

ex) daisyUI, tailwind CSS Form

## 3.13 Conclusions

앞으로 만들어가면서 많이 사용할거라 금방 익숙해질 겁니다.

# 4 AUTHENTICATION UI

## 4.0 Home Screen

- 로그아웃 했을 때 페이지
- 로그인 페이지
- 회원가입 페이지
- SMS 인증 로그인 페이지

만들겁니다.

다크모드만 할 겁니다.

반응형 많이 안할겁니다.

제일 먼저 홈페이지부터 만듭시다.

- Tailwind CSS
  - underline-offset-4
  - \*:
  - my-auto, mx-auto

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  a {
    @apply text-orange-500;
  }
}
```

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
```

```tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl ">당근</h1>
        <h2 className="text-2xl">당근 마겟에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href="/create-account"
          className="w-full bg-orange-500 text-white text-lg font-medium py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors"
        >
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## 4.1 Create Account Screen

회원 가입 페이지 만듭시다.

- 인사말
- form을 사용한 가입
- SMS 가입

Tailwind CSS

- ring-1
- ring-2

굵기차이 입니다.

공통 부분 component로 옮기기

```css
@layer components {
  .primary-btn {
    @apply w-full bg-orange-500 text-white  font-medium  rounded-md text-center hover:bg-orange-400 transition-colors;
  }
}
```

h-1px은 없고 h-px는 있습니다.

```tsx
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
            type="text"
            placeholder="Username"
            required
          />
          <span className="text-red-500 font-medium">Input error</span>
        </div>
        <button className="primary-btn h-10">Create account</button>
      </form>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </div>
  );
}
```

아이콘도 받을 수 있습니다.

@heroicons/react

https://github.com/tailwindlabs/heroicons

## 4.2 Form Components

type이 필요하기 전까지 interface 쓰세요.

- disabled:bg-neutral-400
- disabled:text-neutral-300
- disabled:cursor-not-allowed

지금까지 JavaScript 사용한거 없습니다~~

- app/create-account/page.tsx

```tsx
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="text" placeholder="Username" required errors={[]} />
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

- components/form-btn.tsx

```tsx
interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? "로딩 중" : text}
    </button>
  );
}
```

- components/form-login.tsx

```tsx
interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
```

## 4.3 Log in Screen

import alias → @/components/form-btn

```json
    "paths": {
      "@/*": [
        "./*"
      ]
    }
```

GitHub svg icon

- https://www.svgrepo.com/svg/512317/github-142
- https://react-icons.github.io/react-icons/search/#q=github
- https://icons8.com/icons/set/github

회원가입 페이지를 복사해서 /login, /sms도 만들어봅시다.

CSS에 자신감을 가지세요!!!

- app/login/page.tsx

```tsx
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

- app/sms/page.tsx

```tsx
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="Phone number"
          required
          errors={[]}
        />
        <FormInput
          type="number"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Verify" />
      </form>
    </div>
  );
}
```

- components/social-login.tsx

```tsx
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/github/start"
        >
          <svg
            className="size-6"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Continue with Github</span>
        </Link>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href="/sms"
        >
          <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
```

# 5 SERVER ACTIONS

## 5.0 Route Handlers

로그인할 때 이전까지는 백엔드 API /api/login 을 이용해 로그인했었습니다. 지금도 가능하긴 하지만 다른 방법이 있습니다.

이런 방법을 API Route라고 합니다. 폴더 이름은 상관 없고 route.ts가 중요합니다.

route handler

그리고 NextRequest가 중요합니다.

이제 API Route를 사용하지 않아도 됩니다.

- app/login/page.tsx

```tsx
"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  const onClick = async () => {
    const response = await fetch("/www/users", {
      method: "POST",
      body: JSON.stringify({
        username: "nico",
        password: "1234",
      }),
    });
    console.log(await response.json());
  };
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
      </form>
      <span onClick={onClick}>
        <FormButton loading={false} text="Log in" />
      </span>
      <SocialLogin />
    </div>
  );
}
```

- www/users/route.tsx

```tsx
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  console.log("log the user in!!!");
  return Response.json(data);
}
```

## 5.1 Server Actions

formData: FormData!!!!

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations

https://developer.mozilla.org/en-US/docs/Web/API/FormData#instance_methods

`“use server”` 는 항상 최 상단에 있어야 합니다.

`<input />` 에는 name이 필요합니다.

`formData.get(”name”)`

```tsx
async function handleForm(formData: FormData) {
  "use server";
}
```

- app/login/page.tsx

```tsx
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  async function handleForm(formData: FormData) {
    "use server";
    console.log(formData.get("email"), formData.get("password"));
    console.log("i run in the server baby!");
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton loading={false} text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

- components/form-input.tsx

```tsx
interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
  name: string;
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
  name,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
```

## 5.2 useFormStatus

react-hook-form 사용 안해도 됨.

useMutation hook 안해도 됨

로딩 만드는데 필요한 form status

```tsx
import { useFormStatus } from "react-dom;";
```

- components/form-btn.tsx

```tsx
"use client";

import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
```

- app/login/page.tsx

```tsx
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function LogIn() {
  async function handleForm(formData: FormData) {
    "use server";
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("logged in!");
  }
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={handleForm} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

## 5.3 useFormState

- server action과 useFormState()의 조합
- useActionState()로 이름 바뀜

`const [state, formAction] = useActionState(fn, initialState, permalink?);`

이거 좀 어려움.

- app/login/page.tsx

```tsx
"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.errors ?? []}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

- app/login/actions.tsx

```tsx
"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["wrong password", "password too short"],
  };
}
```

# 6 VALIDATION

## 6.0 Introduction to Zod

if, if, if를 피하고 싶어요. Zod는 그걸 해결해줍니다.

유저는 믿을 수 없어요!

타입스크립트는 작성된 코드의 컴파일 시점에만 타입 검사를 하며, 이것은 오직 개발자를 위한 것입니다.

컴파일을 한 후 자바스크립트 런타임 환경에서는 타입스크립트가 아무런 힘을 쓰지 못합니다.

따라서 zod 와 같은 라이브러리의 도움을 받아서 예측 불가능한 런타임 환경에서도 타입 검사(유효성 검증)을 가능하게 합니다.

https://www.daleseo.com/zod-why-validation/

```tsx
"use server";

import { z } from "zod";

const usernameSchema = z.string().min(5).max(10);

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  usernameSchema.parse(data.username);
}
```

```tsx
"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
        />
        <FormInput name="email" type="email" placeholder="Email" required />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

## 6.1 Validation Errors

[Object Schema]

z.object() 로 오브젝트 스키마를 만들 수 있습니다.

예시: const User = z.object( { username: z.string() } );

[.parse]

data의 타입이 유효한지 검사하기 위해 .parse 메소드를 사용할 수 있습니다. 유효한 경우 데이터 전체 정보가 포함된 값이 반환됩니다. 유효하지 않은 경우, 에러가 발생합니다. 보통 try-catch 문으로 감싸서 사용한다고 합니다.

[.safeParse]

.parse를 사용할 때 타입이 유효하지 않은 경우 Zod가 에러를 발생시키는 것을 원하지 않는다면, .safeParse를 사용하면 됩니다.

데이터가 유효한 경우 true값의 success와 데이터 정보가 담긴 data를 반환합니다.

유효하지 않은 경우에는 false값의 success와 에러 정보가 담긴 error를 반환합니다.

예시 : stringSchema.safeParse(12); // => { success: false; error: ZodError }

```tsx
"use server";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(3).max(10),
  email: z.string().email(),
  password: z.string().min(10),
  confirm_password: z.string().min(10),
});

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
```

```tsx
"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors.username}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

## 6.2 Refinement

Zod에는 몇 가지 문자열 관련 유효성 검사가 포함되어 있습니다. https://zod.dev/?id=strings

문자열 스키마를 만들 때 몇 가지 오류 메시지를 지정할 수 있습니다.

```tsx
const name = z.string({
  required_error: "Name은 필수입니다.",
  invalid_type_error: "Name은 문자열이어야 합니다.",
});
```

유효성 검사 메서드를 사용할 때 추가 인수를 전달하여 사용자 지정 오류 메시지를 제공할 수 있습니다.

`z.string().min(5, { message: "5글자 이상 되어야합니다." });`

.refine 메서드를 통해 사용자 지정 유효성 검사를 할 수 있습니다. https://zod.dev/?id=refine

`z.string().refine((val) ⇒ val.length ≤ 255, {message: “255이하의 문자열이어야 합니다.”});`

.refine 은 2개의 인수를 받습니다.

1. 유효성 검사 함수

2. 몇가지 옵션

제공되는 옵션은 다음과 같습니다.

- message: 에러 메세지 지정
- path: 에러 경로 지정
- params: 에러시 메세지를 커스텀하기 위해 사용되는 객체

```tsx
"use server";
import { z } from "zod";

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .min(3, "Way too short!!!")
      .max(10, "That is too looooong!")
      .refine(
        (username) => !username.includes("potato"),
        "No potatoes allowed!"
      ),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      });
    }
  });
```

## 6.3 Transformation

// At least one uppercase letter, one lowercase letter, one number and one special character

```tsx
const passwordRegex = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).+$/
);
```

[.regax]

정규표현식으로 데이터 검증을 할 수 있습니다.

[.toLowerCase]

String 타입의 데이터를 모두 소문자로 변환해줍니다.

[.trim]

String 타입의 데이터에서 맨앞과 뒤에 붙은 공백을 제거해줍니다.

[.transform]

이 메서드를 이용하면 해당 데이터를 변환할 수 있습니다.

예시: `.transform((username) => `🔥 ${username} 🔥`)`

```tsx
"use server";
import { z } from "zod";

const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/
);

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .min(3, "Way too short!!!")
      //.max(10, "That is too looooong!")
      .trim()
      .toLowerCase()
      .transform((username) => `🔥 ${username}`)
      .refine(
        (username) => !username.includes("potato"),
        "No potatoes allowed!"
      ),
    email: z.string().email().toLowerCase(),
    password: z
      .string()
      .min(4)
      .regex(
        passwordRegex,
        "Passwords must contain at least one UPPERCASE, lowercase, number and special characters #?!@$%^&*-"
      ),
    confirm_password: z.string().min(4),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      });
    }
  });
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
```

## 6.4 Refactor

1. 인터섹션 타입을 이용하여 input 태그에 있는 기본 속성들을 props로 받을 수 있게 하였습니다.

2. 자바스크립트의 구조 분해 할당과 Spread 연산자를 이용하여 리팩토링을 하였습니다.

=> 이제 커스텀 Input 컴포넌트를 사용할 때 원래 input 태그에 있던 기본 속성을 자유롭게 지정할 수 있습니다.

```tsx
import { InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  console.log(rest);
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
```

## 6.5 Recap

[🔥 Super Recap 🔥]

1. input에 name을 넣어주어야 formData에서 get으로 해당 데이터 값을 가져올 수 있습니다.

2. safeParse는 스키마에 따라 데이터를 검사하고 변형시켜줍니다.

3. .refine으로 커스텀 validation을 만들 수 있습니다.

object자체에 refine을 해주면 객체 안에 있는 전체 데이터들을 대상으로 검증할 수 있습니다.

4. .transform으로 데이터를 변형시킬 수 있습니다.

5. safeParse는 parse와 다르게 검증에 실패해도 에러를 만들지 않습니다.

6. 에러 객체에 flatten 메서드를 사용하면 사용하기 쉽게 포맷팅됩니다.

7. 검증 성공시 원본 data를 사용하지 않고 result.data를 사용해야합니다.

## 6.6 Log In Validation

1. 상수 분리
2. Login validation

```tsx
"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function logIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    console.log(result.data);
  }
}
```

```tsx
"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { logIn } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(logIn, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
}
```

## 6.7 Coerce

- 값 변환: transform()
- 타입 강제 변환: coerce()

[Coerce]

Zod는 coerce를 이용하여 값의 타입을 강제할 수 있습니다.

모든 원시 타입이 지원되며, 아래와 같이 작동됩니다.

z.coerce.string(); // String(input)

z.coerce.number(); // Number(input)

z.coerce.boolean(); // Boolean(input)

z.coerce.bigint(); // BigInt(input)

z.coerce.date(); // new Date(input)

[Validator]

JavaScript의 validator 모듈은 문자열 검증 및 살균(sanitization)을 위한 라이브러리입니다. 이 라이브러리는 다양한 유형의 문자열 입력을 검증하거나 살균하는 데 사용할 수 있는 여러 함수를 제공합니다. 예를 들어, 이메일 주소가 유효한 형식인지, 문자열이 특정 형식(예: URL, 날짜)에 맞는지 확인할 수 있습니다. 또한, 입력으로부터 HTML 태그를 제거하는 등의 살균 작업도 수행할 수 있습니다.

```tsx
npm i validator
npm i @types/validator
```

validator문자열 유효성 검사 라이브러리

npm i validator

https://www.npmjs.com/package/validator

```tsx
"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

const tokenSchema = z.coerce.number().min(100000).max(999999);

export async function smsLogIn(prevState: any, formData: FormData) {
  console.log(formData.get("token"));
  console.log(tokenSchema.parse(formData.get("token")));
}
```

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogIn, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input name="phone" type="number" placeholder="Phone number" required />
        <Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
          min={100000}
          max={999999}
        />
        <Button text="Verify" />
      </form>
    </div>
  );
}
```

## 6.8 SMS Validation

Input에 key가 중요한 역할을 하나보다.

https://react.dev/learn/rendering-lists

```tsx
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format"
  );

const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
```

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { smsLogIn } from "./actions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogIn, initialState);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        {state.token ? (
          <Input
            key="token"
            name="token"
            type="number"
            placeholder="Verification code"
            required
            min={100000}
            max={999999}
          />
        ) : (
          <Input
            key="phone"
            name="phone"
            type="text"
            placeholder="Phone number"
            required
            errors={state.error?.formErrors}
          />
        )}
        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
```

# 7 PRISMA

## 7.0 Setup

Prisms는 DB

Prisma에게 Prisma Scheme Language로 내 데이터 구조를 설명해야 합니다.

그러면 Prisma는 SQL을 생성합니다.

Prisma Client, TypeScript, ORM

마이그레이션도 됌

Database Browser도 됨

Prisma는 통역사

차세대 Node.js 및 TypeScript ORM

https://www.prisma.io/orm

prisma 초기화

```bash
npx prisma init
```

## 7.1 Schemas

초기화 하면 아래 파일이 생성되는데 ORM을 추가해줍시다.

- prisma/schema.prisma

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id Int @id @default(autoincrement())
  username String @unique
  email String? @unique
  password String?
  phone String? @unique
  github_id String? @unique
  avatar String?
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}
```

그리고 아래 명령을 입력하면 DB가 만들어집니다.

```bash
npx prisma migrate dev
add_user
```

## 7.2 Prisma Client

Prisma Client는 데이터에 맞춰 자동 생성되는 type-safe 쿼리 빌더입니다.

```bash
// Installation
npm install @prisma/client
```

Prisma는 schema.prisma를 보고 d.ts파일을 만들어줍니다.

- lib/db.ts

```tsx
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function test() {
  const users = await db.user.findMany({
    where: {
      username: {
        contains: "est",
      },
    },
  });
  console.log(users);
  //   const user = await db.user.create({
  //     data: {
  //       username: "test",
  //     },
  //   });
  //   console.log(user);
}

export default db;
```

// Importing Prisma Client

`import { PrismaClient } from '@prisma/client'`

`const prisma = new PrismaClient()`

https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/introduction

npx prisma migrate dev 커맨드를 실행하면 아래의 과정이 한번에 수행됩니다.

1. 데이터베이스 변경 사항을 확인하고, 수정되었거나 삭제된 부분을 찾습니다.

2. 새로운 변경 사항이 있다면, 그것을 시험해 볼 수 있는 별도의 데이터베이스에 먼저 적용합니다. (테스트 목적)

3. 데이터 모델에 변화가 있으면, 그에 맞는 새로운 마이그레이션을 만듭니다.

4. 모든 새로운 마이그레이션을 실제 데이터베이스에 적용하고, 이를 기록합니다.

5. 필요한 코드를 자동으로 생성합니다. (Prisma Client 등..)

더 자세한 내용은 아래 링크를 통해 공부하실 수 있습니다.

[migrate workflows 공식 문서]

https://www.prisma.io/docs/orm/prisma-migrate/workflows/development-and-production

[migrate workflows에 대해 한글로 정리된 블로그]

https://pyh.netlify.app/prisma/prisma_migrate/

## 7.3 Prisma Studio

Django admin같은 것

Prisma Studio

Prisma 프로젝트에서 데이터를 탐색하고 조작하는 가장 쉬운 방법입니다.

```bash
npx prisma studio
```

https://www.prisma.io/studio

Schema변경시 → prisma studio 종료 → migrate → 다시 실행

## 7.4 Relationships

User와 SMSToken을 연결하면서 Relation을 배울겁니다.

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id         Int        @id @default(autoincrement())
  username   String     @unique
  email      String?    @unique
  password   String?
  phone      String?    @unique
  github_id  String?    @unique
  avatar     String?
  created_at DateTime   @default(now())
  updated_at DateTime   @updatedAt
  SMSToken   SMSToken[]
}

model SMSToken {
  id         Int      @id @default(autoincrement())
  token      String   @unique
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  user       User     @relation(fields: [userId], references: [id])
  userId     Int
}

```

```tsx
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function test() {
  const token = await db.sMSToken.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(token);
}

export default db;
```

## 7.5 onDelete

User와 token이 관계맺고 있기 때문에 user를 지울 수 없습니다.

```
model SMSToken {
  id         Int      @id @default(autoincrement())
  token      String   @unique
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  userId     Int
}
```

onDelete를 정하는 것은 매우 중요합니다. 연관된 객체를 지우는게 꼭 필요한 일인지도 생각해봐야합니다.

# 8 AUTHENTICATION

## 8.1 Database Validation

z.refine(fn)에서 fn은 boolean을 reuturn해야 합니다.

db에 username과 email이 unique인지 확인하고 있으면 진행, 없으면 에러 발생.

함수로 분리하고, z.refine과 조합 가능

`const result = await formSchema.safeParseAsync(data);`

async, await에 유의

Boolean사용

- app/create-account/action.ts

```tsx
"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  // if (user) {
  //   return false;
  // } else {
  //   return true;
  // }
  return !Boolean(user);
};

const checkUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user) === false;
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .toLowerCase()
      .trim()
      // .transform((username) => `🔥 ${username} 🔥`)
      .refine(checkUsername, "No potatoes allowed!")
      .refine(checkUniqueUsername, "This username is already taken"),
    email: z
      .string()
      .email()
      .toLowerCase()
      .refine(
        checkUniqueEmail,
        "There is an account already registered with that email."
      ),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // hash password
    // save the user to db
    // log the user in
    // redirect "/home"
  }
}
```

## 8.2 Password Hashing

bcrypt

```tsx
npm i bcrypt
npm i -D @types/bcrypt
```

How To Safely Store A Password?

https://codahale.com/how-to-safely-store-a-password/

hashing, salting, rainbow

https://youtu.be/67UwxR3ts2E?si=2pqx4IUADxyAzoUj

hash function is one way

how many times do you want to hash? 12 times

```tsx
const hashedPassword = await bcrypt.hash(result.data.password, 12);
```

why do we select only id?

- app/create-account/action.ts

```tsx
export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    // log the user in
    // redirect "/home"
  }
}
```

## 8.3 Iron Session

Is user logged in or not?

쿠키는 모든 요청에 들어가서 누가 요청했는지 알 수 있어요

password: process.env.COOKIE_PASSWORD!

타입스크립트에게 이 값이 무조건 있다고 알려줄 수 있음

### app/create-account/action.ts

```
    const cookie = await getIronSession<typeof user>(cookies(), {
      cookieName: "delicious-karrot",
      password: process.env.COOKIE_PASSWORD!,
    });
    cookie.id = user.id;
    await cookie.save();
    redirect("/profile");
```

### tips

비밀번호 털렸다고? 암호화. 해시함수. 5분 설명.

https://www.youtube.com/watch?v=67UwxR3ts2E

세션 vs 토큰 vs 쿠키? 기초개념 잡아드림. 10분 순삭!

https://www.youtube.com/watch?v=tosLBcAX1vk

1password password generator

https://1password.com/password-generator/

For generating random 32 character-long password, you may just use terminal command as Next.js documentation introduced:

`openssl rand -base64 32`

https://nextjs.org/docs/app/building-your-application/authentication#1-generating-a-secret-key

### iron-session

```tsx
npm i iron-session
```

## 8.4 Recap

## 8.5 Email Log In

login session 구현

const result = await formSchema.spa(data); → safeParseAsync

zod와 bcrypt에서 두번 db접근

user!.id; → if you know that user exist!!!

- lib/sessions.ts

```tsx
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
  id?: number;
}

export default function getSession() {
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "delicious-karrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}
```

- app/login/action.ts

```tsx
"use server";

import bcrypt from "bcrypt";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  // if(user){
  //   return true
  // } else {
  //   return false
  // }
  return Boolean(user);
};

const formSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkEmailExists, "An account with this email does not exist."),
  password: z.string({
    required_error: "Password is required",
  }),
  // .min(PASSWORD_MIN_LENGTH),
  // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export async function logIn(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const result = await formSchema.spa(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const ok = await bcrypt.compare(
      result.data.password,
      user!.password ?? "xxxx"
    );
    if (ok) {
      const session = await getSession();
      session.id = user!.id;
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password."],
          email: [],
        },
      };
    }
  }
}
```

## 8.6 superRefine

지금은 회원가입하면 모든 검사를 다 하기 때문에 DB가 두 번 호출됩니다. 이걸 해결해봅시다.

위에서 막히면 아래는 검사 안하고 종료하게 만들고 싶어요

superRefine(callback)는 refine의 상세한 버전

callback(scheme, refinementCtx)

refinementCtx는 에러 묶음

https://zod.dev/ERROR_HANDLING?id=zodissue

| field   | type           | details                                                                                         |
| ------- | -------------- | ----------------------------------------------------------------------------------------------- | ------------------------------ |
| code    | z.ZodIssueCode | You can access this enum with z.ZodIssueCode. A full breakdown of the possible values is below. |
| path    | (string        | number)[]                                                                                       | e.g, ['addresses', 0, 'line1'] |
| message | string         | e.g. Invalid type. Expected string, received number.                                            |

abort early, https://zod.dev/?id=abort-early

```tsx
const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .toLowerCase()
      .trim()
      // .transform((username) => `🔥 ${username} 🔥`)
      .refine(checkUsername, "No potatoes allowed!"),
    email: z.string().email().toLowerCase(),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This username is already taken",
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This email is already taken",
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });
```

## 8.7 Log Out

로그아웃은 간단합니다. 세션을 획득하고, 세션을 없에버리면 됩니다.

로그아웃 버튼 만들 땐 form action을 사용하면 편리합니다

```tsx
<form action={}>
```

https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms

session이 없는데 메인 페이지로 접속하려고 하면 notFound()를 사용하면 유용합니다.

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";

async function getUser() {
  const session = await getSession();
  if (session.id) {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });
    if (user) {
      return user;
    }
  }
  notFound();
}

export default async function Profile() {
  const user = await getUser();
  const logOut = async () => {
    "use server";
    const session = await getSession();
    await session.destroy();
    redirect("/");
  };
  return (
    <div>
      <h1>Welcome! {user?.username}!</h1>
      <form action={logOut}>
        <button>Log out</button>
      </form>
    </div>
  );
}
```

## 8.8 Recap

세션에는 보통 id만 담지만, 역할도 담기도 합니다.

hashing과 encrypt는 다릅니다.

password는 hasing, cookie는 encrypt 그래야 decrypt가능

form에서 button, onclick을 사용하면 use client를 사용한다는 뜻입니다.

use server에서 하고싶다면 form action을 사용합시다.

## 8.9 Middleware

미들웨어란 코드와 코드 사이에서 실행되는 코드입니다.

/middleware.ts

/app

app과 같은 레벨에 위치해야 합니다.

미들웨어는 홈페이지 경로를 요청만 해도 7번 실행됩니다. favicon받을 때도 실행됩니다.

https://nextjs.org/docs/app/api-reference/file-conventions/middleware

- /middleware.ts

```tsx
import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  console.log(session);
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
```

## 8.10 Matcher

이전처럼 request를 이용해서 동작을 처리할 수도 있지만, config 를 사용할 수도 있습니다.

```tsx
export const config = {
  matcher: ['profile', '/about/:path*', '/dashboard/:path*'],
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"]
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logo.svg).*)"],
}
```

```tsx
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request);
}

export const Config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

## 8.12 Authentication Middleware

미들웨어에서 유저가 URL을 직접 입력할 때 어떻게 동작할지 결정할 수 있습니다.

```tsx
import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}

const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};

export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    if (!exists) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (exists) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}
```

리팩토링 코드입니다.

```tsx
const publicUrls = new Set(["/", "/login", "/sms", "/create-account"]);

export async function middleware(request: NextRequest) {
  const isPublicPath = publicUrls.has(request.nextUrl.pathname);
  const isLoggedIn = Boolean((await getSession()).id);

  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && isPublicPath) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
```

CSS가 적용되지 않을 경우, config, Config 오타 있는지 확인하고, 안되면 아래 코드를 추가합니다.

```tsx
if (request.nextUrl.pathname.startsWith("/_next")) {
  return NextResponse.next();
}
```

https://www.reddit.com/r/nextjs/comments/15gzjwm/nextjs_middleware_redirect_not_serving_css/

## 8.13 Recap

미들웨어에서 패키지는 실행하지 않습니다. 너무 무겁기 때문이죠!

```tsx
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
```

# 9 SOCIAL AUTHENTICATION

## 9.0 Introduction

옵션이라 넘어가도 좋습니다.

## 9.1 Github Authentication

OAuth흐름 이해!

route.ts는 요청만 할 수 있습니다.

URLSearchParams는 Node.js에서 제공

- app/github/start/route.ts

```tsx
export function GET() {
  const baseURL = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: "read:user,user:email",
    allow_signup: "true",
  };
  const formattedParams = new URLSearchParams(params).toString();
  const finalUrl = `${baseURL}?${formattedParams}`;
  return Response.redirect(finalUrl);
}
```

GitHub Authorizing OAuth apps

다른 사용자가 OAuth app에 권한을 부여하도록 설정할 수 있습니다.

https://docs.github.com/ko/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

## 9.2 Access Token

Access token 획득과정

위에서 받은 code로 다시 github에 요청

성공하면 access token획득

- app/github/complete/route.ts

```tsx
import { notFound } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return notFound();
  }
  const accessTokenParams = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    code,
  }).toString();
  const accessTokenURL = `https://github.com/login/oauth/access_token?${accessTokenParams}`;
  const accessTokenResponse = await fetch(accessTokenURL, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  });
  const accessTokenData = await accessTokenResponse.json();
  if ("error" in accessTokenData) {
    return new Response(null, {
      status: 400,
    });
  }
  return Response.json({ accessTokenData });
}
```

## 9.3 Github API

no-cache!!!!!!!!!!!!!!!

username이 중복일 경우 해결해야 합니다

액세스 토큰을 사용하여 API에 액세스

액세스 토큰을 사용하면 사용자를 대신하여 API에 요청할 수 있습니다.

- app/github/complete/route.ts

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  ...
  const userProfileResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: "no-cache",
  });
  const { id, avatar_url, login } = await userProfileResponse.json();
  const user = await db.user.findUnique({
    where: {
      github_id: id + "",
    },
    select: {
      id: true,
    },
  });
  if (user) {
    const session = await getSession();
    session.id = user.id;
    await session.save();
    return redirect("/profile");
  }
  const newUser = await db.user.create({
    data: {
      username: login,
      github_id: id + "",
      avatar: avatar_url,
    },
    select: {
      id: true,
    },
  });
  const session = await getSession();
  session.id = newUser.id;
  await session.save();
  return redirect("/profile");
}

```

```tsx
Authorization: Bearer OAUTH-TOKEN

GET https://api.github.com/user

curl -H "Authorization: Bearer OAUTH-TOKEN" https://api.github.com/user
```

https://docs.github.com/ko/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#3-use-the-access-token-to-access-the-api

## 9.4 Code Challenge

1. 로그인 시켜주는 함수 만들고 사용하기

2. Username이 중복되는 경우 에러 핸들링하기

3. Email 정보도 계정 생성에 활용하기

4. Request 파트와 Response 파트를 분리하기

## 9.5 SMS Token

https://www.twilio.com/en-us

핸드폰으로 로그인 할 때 가입되어 있지 않으면 가입시켜주기!

connectOrCreate()

```tsx
"use server";

import crypto from "crypto";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";
import db from "@/lib/db";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format"
  );

const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

async function getToken() {
  const token = crypto.randomInt(100000, 999999).toString();
  const exists = await db.sMSToken.findUnique({
    where: {
      token,
    },
    select: {
      id: true,
    },
  });
  if (exists) {
    return getToken();
  } else {
    return token;
  }
}

export async function smsLogIn(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      await db.sMSToken.deleteMany({
        where: {
          user: {
            phone: result.data,
          },
        },
      });
      const token = await getToken();
      await db.sMSToken.create({
        data: {
          token,
          user: {
            connectOrCreate: {
              where: {
                phone: result.data,
              },
              create: {
                username: crypto.randomBytes(10).toString("hex"),
                phone: result.data,
              },
            },
          },
        },
      });
      // send the token using twilio
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
```

# 10 PRODUCTS

## 10.0 Introduction

```
model Product {
  id Int @id @default(autoincrement())

  title       String
  price       Float
  photo       String
  description String
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt
  user        User     @relation(fields: [userId], references: [id])
  userId      Int
}

```

## 10.1 Tab Bar

Heroicons

https://heroicons.com/

layout이용, fixed이용해서 자유자재 CSS사용…

```tsx
"use client";

import {
  HomeIcon as SolidHomeIcon,
  NewspaperIcon as SolidNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as SolidChatIcon,
  VideoCameraIcon as SolidVideoCameraIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon as OutlineHomeIcon,
  NewspaperIcon as OutlineNewspaperIcon,
  ChatBubbleOvalLeftEllipsisIcon as OutlineChatIcon,
  VideoCameraIcon as OutlineVideoCameraIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full mx-auto max-w-screen-md grid grid-cols-5 border-neutral-600 border-t px-5 py-3 *:text-white">
      <Link href="/products" className="flex flex-col items-center gap-px">
        {pathname === "/products" ? (
          <SolidHomeIcon className="w-7 h-7" />
        ) : (
          <OutlineHomeIcon className="w-7 h-7" />
        )}
        <span>홈</span>
      </Link>
      <Link href="/life" className="flex flex-col items-center gap-px">
        {pathname === "/life" ? (
          <SolidNewspaperIcon className="w-7 h-7" />
        ) : (
          <OutlineNewspaperIcon className="w-7 h-7" />
        )}
        <span>동네생활</span>
      </Link>
      <Link href="/chat" className="flex flex-col items-center gap-px">
        {pathname === "/chat" ? (
          <SolidChatIcon className="w-7 h-7" />
        ) : (
          <OutlineChatIcon className="w-7 h-7" />
        )}
        <span>채팅</span>
      </Link>
      <Link href="/live" className="flex flex-col items-center gap-px">
        {pathname === "/live" ? (
          <SolidVideoCameraIcon className="w-7 h-7" />
        ) : (
          <OutlineVideoCameraIcon className="w-7 h-7" />
        )}
        <span>쇼핑</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-px">
        {pathname === "/profile" ? (
          <SolidUserIcon className="w-7 h-7" />
        ) : (
          <OutlineUserIcon className="w-7 h-7" />
        )}
        <span>나의 당근</span>
      </Link>
    </div>
  );
}
```

## 10.2 Skeletons

로딩창을 만들자.

pulse 대박…. CSS 어렵다.

- app/(tabs)/products/loading.tsx

```tsx
export default function Loading() {
  return (
    <div className="p-5 animate-pulse flex flex-col gap-5">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="*:rounded-md flex gap-5 ">
          <div className="size-28 bg-neutral-700" />
          <div className="flex flex-col gap-2 *:rounded-md">
            <div className="bg-neutral-700 h-5 w-40" />
            <div className="bg-neutral-700 h-5 w-20" />
            <div className="bg-neutral-700 h-5 w-10" />
          </div>
        </div>
      ))}
    </div>
  );
}
```

- app/(tabs)/products/page.tsx

```tsx
async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Products() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-white text-4xl">Products!</h1>
    </div>
  );
}
```

## 10.3 Product Component

/goguma.jpg

<img /> vs <Image />

Layout shift

lazy loading

srcset=””

<Image fill />은 absolute가 된다.

<Image quality />

## 10.4 Detail Skeleton

`number.toLocaleString(”ko-KR”);`

Unix epoch

```jsx
const formatter = new Intl.RelativeTimeFormat("ko");

return formatter.format(diff, "days");
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl

Product detail 페이지에서는 Tab bar가 없는게 더 보기 좋아요.

- lib/utils.ts

```tsx
export function formatToTimeAgo(date: string): string {
  const dayInMs = 1000 * 60 * 60 * 24;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / dayInMs);

  const formatter = new Intl.RelativeTimeFormat("ko");

  return formatter.format(diff, "days");
}

export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}
```

next.js에서 parameter를 제공

- app/products/[id]/page.tsx

```tsx
async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 60000));
}

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <span>Product detail of the product {id}</span>;
}
```

- app/products/[id]/loading.tsx

```tsx
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function Loading() {
  return (
    <div className="animate-pulse p-5 flex flex-col gap-5">
      <div className="aspect-square border-neutral-700 text-neutral-700 border-4 border-dashed rounded-md flex justify-center items-center">
        <PhotoIcon className="h-28" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="size-14 rounded-full bg-neutral-700" />
        <div className="flex flex-col gap-1">
          <div className="h-5 w-40 bg-neutral-700 rounded-md" />
          <div className="h-5 w-20 bg-neutral-700 rounded-md" />
        </div>
      </div>
      <div className="h-10 w-80 bg-neutral-700 rounded-md" />
    </div>
  );
}
```

## 10.5 Product Detail

Code Challenge: Delete product → Products page

CSS 쑈

- app/products/[id]/page.tsx

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToWon } from "@/lib/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

async function getProduct(id: number) {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return product;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  const isOwner = await getIsOwner(product.userId);
  return (
    <div>
      <div className="relative aspect-square">
        <Image fill src={product.photo} alt={product.title} />
      </div>
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
        <div className="size-10 rounded-full">
          {product.user.avatar !== null ? (
            <Image
              src={product.user.avatar}
              width={40}
              height={40}
              alt={product.user.username}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div className="fixed w-full bottom-0 left-0 p-5 pb-10 bg-neutral-800 flex justify-between items-center">
        <span className="font-semibold text-xl">
          {formatToWon(product.price)}원
        </span>
        {isOwner ? (
          <button className="bg-red-500 px-5 py-2.5 rounded-md text-white font-semibold">
            Delete product
          </button>
        ) : null}
        <Link
          className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold"
          href={``}
        >
          채팅하기
        </Link>
      </div>
    </div>
  );
}
```

## 10.6 Image Hostnames

NextJS의 Image는 이미지를 자동으로 최적화를 해 주어 성능을 향상시키고 빠른 로딩이 되도록 해 준다.

하지만 외부 호스트의 이미지(다른 사이트의 이미지 링크 등)를 불러올 때는 보안 상의 이유로 이 기능이 허용되지 않는다.

따라서 next.config.mjs에서 hostname들을 등록해 주어야 한다.

(nextConfig > images > remotePatterns > hostname)

Next.js는 외부 이미지를 최적화하는 기능을 갖고 있는데, 자원을 사용하기 때문에 도메인을 등록해야 합니다.

- next.config.mjs

```tsx
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
```

## 10.7 Pagination Actions

- className="object-cover”
- app/(tabs)/products/actions.ts

```tsx
"use server";

import db from "@/lib/db";

export async function getMoreProducts(page: number) {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    skip: 1,
    take: 1,
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}
```

## 10.8 Recap

아직도 이 API 모르셨다고요? 개발자 인생 꿀템 소개! JS로 무한 스크롤 구현하기 (feat: Intersection Observer)

https://www.youtube.com/watch?v=iZhq7I42uaI

- components/product-list.tsx

```tsx
"use client";

import { InitialProducts } from "@/app/(tabs)/products/page";
import ListProduct from "./list-product";
import { useState } from "react";
import { getMoreProducts } from "@/app/(tabs)/products/actions";

interface ProductListProps {
  initialProducts: InitialProducts;
}

export default function ProductList({ initialProducts }: ProductListProps) {
  const [products, setProducts] = useState(initialProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const onLoadMoreClick = async () => {
    setIsLoading(true);
    const newProducts = await getMoreProducts(page + 1);
    if (newProducts.length !== 0) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...newProducts]);
    } else {
      setIsLastPage(true);
    }
    setIsLoading(false);
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
      {isLastPage ? (
        "No more items"
      ) : (
        <button
          onClick={onLoadMoreClick}
          disabled={isLoading}
          className="text-sm font-semibold bg-orange-500 w-fit mx-auto px-3 py-2 rounded-md hover:opacity-90 active:scale-95"
        >
          {isLoading ? "로딩 중" : "Load more"}
        </button>
      )}
    </div>
  );
}
```

## 10.9 Infinite Scrolling

trigger를 바꿉시다. useRef사용

const trigger = useRef(1)는 rendering해도 내부 값이 바뀌지 않습니다. trigger안에 데이터를 저장하고 싶을 때 사용합니다.

HTMLSpanElement

IntersectionObserver

# 11 PRODUCT UPLOAD

## 11.0 Introduction

앞으로 11, 12, 13에서 배울 내용

- React Hook Form
- Server Action
- Intercepting Route
- Cache

이번에 할 것

- 상품 업로드 버튼 만들기
- 상품 업로드 페이지 만들기

인상적인 내용

- label htmlFor를 이용한 이미지를 클릭 시 업로드 기능
- Tailwind CSS, aspect-square
- Tailwind CSS, flex flex-col gap-5
- Tailwind CSS, text-neutral

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const onImageChange = () => {};
  return (
    <div>
      <form className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer"
        >
          <PhotoIcon className="w-20" />
          <div className="text-neutral-400 text-sm">사진을 추가해주세요.</div>
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
        <Input name="title" required placeholder="제목" type="text" />
        <Input name="price" type="number" required placeholder="가격" />
        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
```

## 11.1 Form Action

이번에 할 것

- 업로드 버튼 동작
- 사진 업로드 시 UI 수정

인상적인 내용

- @types/react, React.ChangeEvent, HTMLInputElement, FormData
- URL.createObjectURL()
- JavaScript는 절대 로컬 파일을 자동으로 가져올 수 없습니다. 반드시 유저가 허용해야 합니다.
- CSS, background-image
- Tailwind CSS, bg-center bg-cover
- HTML, formData와 name의 관계
- 이미지 업로드 시 두 번 비용을 사용하는 문제 추후 해결
- 이미지 용량 제한

```json
{
  photo: File {
    size: 17924,
    type: 'image/png',
    name: 'Screenshot 2024-07-15 at 6.43.04â\x80¯PM.png',
    lastModified: 1721036805804
  },
  title: '1',
  price: '1',
  description: '1'
}
```

코드

- app/products/add/page.tsx

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./actions";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  return (
    <div>
      <form action={uploadProduct} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
              </div>
            </>
          ) : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
        <Input name="title" required placeholder="제목" type="text" />
        <Input name="price" type="number" required placeholder="가격" />
        <Input
          name="description"
          type="text"
          required
          placeholder="자세한 설명"
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
```

## 11.2 Product Upload

이번에 할 것

- zod Schema 생성 required
- photo가 파일이 맞다면 이미지 저장
- 서버에서 formData검증
- DB에 file 저장
- useFormState 사용

인상적인 내용

- 파일을 파일시스템에 저장하는 것은 좋은 방법이 아니니, 임시 방편으로 사용
- file.arrayBuffer()
- fs.appendFile()
- Buffer.from()
- react-dom, useFormState()

코드

- app/products/add/action.ts

```tsx
"use server";

import { z } from "zod";
import fs from "fs/promises";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";

const productSchema = z.object({
  photo: z.string({
    required_error: "Photo is required",
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.coerce.number({
    required_error: "Price is required",
  }),
});

export async function uploadProduct(_: any, formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };
  if (data.photo instanceof File) {
    const photoData = await data.photo.arrayBuffer();
    await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData));
    data.photo = `/${data.photo.name}`;
  }
  const result = productSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const session = await getSession();
    if (session.id) {
      const product = await db.product.create({
        data: {
          title: result.data.title,
          description: result.data.description,
          price: result.data.price,
          photo: result.data.photo,
          user: {
            connect: {
              id: session.id,
            },
          },
        },
        select: {
          id: true,
        },
      });
      redirect(`/products/${product.id}`);
      //redirect("/products")
    }
  }
}
```

## 11.3 Images Setup

이번에 할 것

- Cloudflare Images

인상적인 내용

- 서버가 여러개가 되면 파일시스템 저장은 좋지 않다.
- Vercel, Cloudflare page같은 serverless로 배포한다고 한다면, 코드를 배포할 때마다 새로운 서버가 생성되고 이전 파일들은 사라짐
- 코드가 포함된 서버는 확장과 복제가 가능해야 하며 시작과 종료도 가능해야 함.
- Vercel을 사용하면 파일이 업로드 다운로드 모두 비용이 청구됨!
- User → Server → CF
- User → Server → CF(Upload URL) → User → CF → Upload URL
- Cloudflare image 이미지 변형 가능

팁

Cloudflare Image Optimization

https://developers.cloudflare.com/images

## 11.4 Upload URLs

이번에 할 것

- 유저가 사진을 선택하면 Upload URL을 받아오기

인상적인 내용

- 유저가 Form action전에 Input으로 이미지를 선택하면 Upload URL을 받아오자.

코드

- app/products/add/actions.ts

```tsx
export async function getUploadUrl() {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_APIKEY}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
```

팁

https://developers.cloudflare.com/images/upload-images/direct-creator-upload/#request-a-one-time-upload-url

https://api.cloudflare.com/client/v4/accounts/ACCOUNT_ID/images/v2/direct_upload

## 11.5 Image Upload

이번에 할 것

- intercept action

인상적인 내용

- Cloudflare Image 사용
- malformed URL
- variant

코드

- app/products/add/page.tsx

```tsx
export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [photoId, setImageId] = useState("");
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setImageId(id);
    }
  };
  const interceptAction = async (_: any, formData: FormData) => {
    const file = formData.get("photo");
    if (!file) {
      return;
    }
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });
    console.log(await response.text());
    if (response.status !== 200) {
      return;
    }
    const photoUrl = `https://imagedelivery.net/u_qCG_VCNid3SXaUDHw-5Q/${photoId}`;
    formData.set("photo", photoUrl);
    return uploadProduct(_, formData);
  };
  const [state, action] = useFormState(interceptAction, null);
  return (
```

## 11.6 Variants

이번에 할 것

- Cloudflare image variant
- Cloudflare image flex varient

인상적인 내용

코드

```tsx
src={`${photo}/width=100,height=100`}
```

팁

https://developers.cloudflare.com/images/transform-images/transform-via-url/

## 11.8 RHF Refactor

이번에 할 것

- React Hook Form
- @hookform/resolvers

인상적인 내용

- React Hook Form은 이제 필수가 아닙니다~ Next.js 최신버전을 사용하면 zod로 해결 가능합니다.
- resolver는 react hook form이 validation할 때 외부 라이브러리를 사용할 경우 연결해주는 프로그램
- zod를 프론트엔드와 백엔드 두 곳에서 동시에 사용하기!

코드

- app/products/add/page.tsx

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { getUploadUrl, uploadProduct } from "./actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductType, productSchema } from "./schema";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductType>({
    resolver: zodResolver(productSchema),
  });
  const onImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
    setFile(file);
    const { success, result } = await getUploadUrl();
    if (success) {
      const { id, uploadURL } = result;
      setUploadUrl(uploadURL);
      setValue(
        "photo",
        `https://imagedelivery.net/aSbksvJjax-AUC7qVnaC4A/${id}`
      );
    }
  };
  const onSubmit = handleSubmit(async (data: ProductType) => {
    if (!file) {
      return;
    }
    const cloudflareForm = new FormData();
    cloudflareForm.append("file", file);
    const response = await fetch(uploadUrl, {
      method: "post",
      body: cloudflareForm,
    });
    if (response.status !== 200) {
      return;
    }
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("price", data.price + "");
    formData.append("description", data.description);
    formData.append("photo", data.photo);
    return uploadProduct(formData);
  });
  const onValid = async () => {
    await onSubmit();
  };
  console.log(register("title"));
  return (
    <div>
      <form action={onValid} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
                {errors.photo?.message}
              </div>
            </>
          ) : null}
        </label>
        <input
          onChange={onImageChange}
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          className="hidden"
        />
        <Input
          required
          placeholder="제목"
          type="text"
          {...register("title")}
          errors={[errors.title?.message ?? ""]}
        />
        <Input
          type="number"
          required
          placeholder="가격"
          {...register("price")}
          errors={[errors.price?.message ?? ""]}
        />
        <Input
          type="text"
          required
          placeholder="자세한 설명"
          {...register("description")}
          errors={[errors.description?.message ?? ""]}
        />
        <Button text="작성 완료" />
      </form>
    </div>
  );
}
```

팁

React Hook Form

https://react-hook-form.com

```tsx
ㄹnpm i react-hook-form @hookform/resolvers
```

https://www.npmjs.com/package/@hookform/resolvers

## 11.9 Recap

이번에 할 것

- Input 수정
  - React, forwardRef
  - React, ForwardedRef
- React Hook Form, setError

인상적인 내용

```tsx
export type ProductType = z.infer<typeof productSchema>;
```

# 12 MODALS

## 12.0 Introduction

이번에 할 것

- 두 개의 멋진 기능을 사용해서 NextJS에서 모달 구현

인상적인 내용

- 모달이란 팝업과 비슷하다. 그런데 URL이 바뀜!
- 기능 2개
  - Parallel Routes
  - Intercepting Routes

## 12.1 Intercepting Routes

이번에 할 것

- app/(tabs)/home/(..)products/[id]/page.tsx

인상적인 내용

Intercepting Routes

- app/(tabs)/home/(..)products/[id]/page.tsx 가 app/products/[id]/page.tsx를 intercept하지만, 새로고침하면 후자로 감

(.) to match segments on the same level

(..) to match segments one level above

(..)(..) to match segments two levels above

(...) to match segments from the root app directory

팁

Intercepting Routes

https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

## 12.2 Intercepting Recap

이번에 할 것

- Intercepting Routes test
  - app/(tabs)/home/(.)recent/page.tsx
  - app/(tabs)/home/recent/page.tsx

인상적인 내용

- 파일 시스템이 아니라, URL segment로 생각해야 합니다.

팁

intercept route

https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

## 12.3 Parallel Routes

이번에 할 것

- Parallel Routes

인상적인 내용

- Parallel Route는 @로 시작해야 함
- Layout에서 함께 렌더링. 그런데 왜 필요해?
  - 컴포넌트로 분리해도 되지만, 로딩 스켈레톤에 쓰이기도함

팁

Parallel Routes

https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

## 12.4 Default Routes

이번에 할 것

- default.tsx

인상적인 내용

- app/page.js는 app/@children/page.js와 같다.

팁

https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs

## 12.5 Modal Route

이번에 할 것

- 실제 Modal만들 예정! CSS는 빼고

인상적인 내용

- 진짜 되네????
- 디렉토리 구조가 중요!!!

## 12.6 Recap

이번에 할 것

인상적인 내용

- 새로고침하면 모두 렌더링하지만, <Link>로 이동하면 children만 렌더링 됨

```tsx
/home
  -> (..)products/[id]
  -> (..)profile
  -> (.)recent
  /recent
/profile
/products/[id]
```

- slot이란 @이 붙은 폴더이며 이게 있으면 Layout은 props를 더 받음.

## 12.7 Modal UI

이번에 할 것

- 코드챌린지
  - loading skeleton
  - 컴포넌트 분리
  - 모달에서 사진 보기

인상적인 내용

- <button>은 use client를 사용해야하니까, 컴포넌트로 분리!
- useRouter()
- use client는 async 컴포넌트를 사용할 수 없음

코드

- app/(tabs)/home/@modal/(...)products/[id]/page.tsx

```tsx
"use client";

import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Modal({ params }: { params: { id: string } }) {
  const router = useRouter();
  const onCloseClick = () => {
    router.back();
  };
  return (
    <div className="absolute w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-60 left-0 top-0">
      <button
        onClick={onCloseClick}
        className="absolute right-5 top-5 text-neutral-200"
      >
        <XMarkIcon className="size-10" />
      </button>
      <div className="max-w-screen-sm h-1/2  flex justify-center w-full">
        <div className="aspect-square  bg-neutral-700 text-neutral-200  rounded-md flex justify-center items-center">
          <PhotoIcon className="h-28" />
        </div>
      </div>
    </div>
  );
}
```

# 13 CACHING

## 13.0 Introduction

인상적인 내용

- 캐싱은 매우 중요!
- Next.js에서 fetch는 caching됨.
- 데이터베이스 response도 캐싱해보자. 데이터베이스를 매번 접근하면 안됨
- generateMetadata
- 데이터베이스를 여러 군데에서 접근할 것이고 같은 정보를 여러 번 줄 상황이 자주 생김

## 13.1 nextCache

이번에 할 것

- 캐싱 처음 사용해보기

인상적인 내용

```tsx
import { getUser } from './data';
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id) => getUser(id),
  ['my-app-user']
);

export default async function Component({ userID }) {
  const user = await getCachedUser(userID);
  ...
}
```

```tsx
const data = unstable_cache(fetchData, keyParts, options)();
```

```
import { unstable_cache as nextCache } from "next/cache";

const getCachedProducts = nextCache(getInitialProducts, ["home-products"]);
```

- home-products에 데이터가 없으면 getInitialProducts 실행, 있으면 메모리에 저장된 값 사용
- caching할지 말지도 구체적으로 지정할 수 있습니다
- cache를 만료시키거나 시간 지나면 새로고침 할 수도 있습니다.

팁

unstable_cache

https://nextjs.org/docs/app/api-reference/functions/unstable_cache

개발 모드 && 브라우저의 개발자 도구를 open한 상태라면 unstable_cache가 캐싱 된 데이터를 반환하지 않고 db에 접근하는 함수를 매번 실행합니다!

## 13.2 revalidate

이번에 할 것

- revalidate, 갱신

인상적인 내용

- 데이터베이스 쿼리는 비싸다
- revalidate를 설정했다고 60초마다 호출하지 않는다!
- 만료시간에 해당하는 내용

코드

```tsx
const getCachedProducts = nextCache(getInitialProducts, ["home-products"], {
  revalidate: 60,
});
```

팁

- [\*\*Incremental Static Regeneration (ISR)](https://vercel.com/docs/incremental-static-regeneration)과 비슷?\*\*

## 13.3 revalidatePath

이번에 할 것

- revalidatePath() 버튼 만들기

인상적인 내용

- /home과 연결되어있는 모든 데이터 새로고침해줘~ 가장 쉽다
- 그러나 모든 cache가 새로고침되기 때문에 선택할 수 없다.

코드

- app/(tabs)/home/page.tsx

```tsx
export default async function Products() {
  const initialProducts = await getCachedProducts();
  const revalidate = async () => {
    "use server";
    revalidatePath("/home");
  };
  return (
    <div>
      <ProductList initialProducts={initialProducts} />
      <form action={revalidate}>
        <button>Revalidate</button>
      </form>
      <Link
        href="/products/add"
        className="bg-orange-500 flex items-center justify-center text-white size-16 rounded-full fixed bottom-24 right-8 hover:bg-orange-400 transition-colors"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  );
}
```

팁

```tsx
It is not a related to this section, However suddenly I just wondering...!

I can't found any section for SSG and ISR.

And according to my memory past course(NextJS 12 course) has sections for SSG and ISR.

And Im not sure but I think SSR and ISR is so powerful and important feature in NextJS.

So the reason why I can not found any section for SSG and ISR in this course is we can pretend kinda SSR and ISR by "Server Action" with "Unstable Cached" ??

If yes, how can I implement !?
```

```tsx
@jh0152park SSR === Server Side Rendering. To make the page be rendered in the server side you can just add `export const dynamic = "force-dynamic;` to your page. (we learn about this later in this section).

ISR === Incremental Static Regeneration.

For this you can export `export const revalidate = 60` to re validate the page, you can combine that with `generateStaticParams` and `dynamicParams` and you are good to go.

```

## 13.4 revalidateTag

이번에 할 것

- revalidateTag()

인상적인 내용

- 상세페이지에서 caching을 두개를 하는데, 한개만 된다!
- nextCache는 알아서 param을 callback에 전달합니다.
- tags는 유일하지 않아도 됩니다!

코드

- app/products/[id]/page.tsx

```tsx
const getCachedProduct = nextCache(getProduct, ["product-detail"], {
  tags: ["product-detail", "xxxx"],
});

async function getProductTitle(id: number) {
  console.log("title");
  const product = await db.product.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
    },
  });
  return product;
}

const getCachedProductTitle = nextCache(getProductTitle, ["product-title"], {
  tags: ["product-title", "xxxx"],
});

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getCachedProductTitle(Number(params.id));
  return {
    title: product?.title,
  };
}

const revalidate = async () => {
  "use server";
  revalidateTag("xxxx");
};
```

## 13.5 fetch Cache

이번에 할 것

인상적인 내용

- Next.js를 사용하면 데이터베이스를 사용하지 않고 API서버를 통해서 데이터를 받아옵니다. 이때 fetch는 쿠키나 헤더를 사용하지 않으면 자동으로 cache됩니다.
- fetch에 revalidate, tag를 설정할 수도 있습니다.
- 대부분은 Next.js를 사용할 때 외부 API를 사용하지 우리처럼 Prisma를 사용해서 db를 만들지 않습니다~

코드

- app/products/[id]/page.tsx

```tsx
async function getProduct(id: number) {
  fetch("https://api.com", {
    next: {
      revalidate: 60,
      tags: ["hello"],
    },
  });
}

const getCachedProduct = nextCache(getProduct, ["product-detail"], {
  revalidate: 60,
  tags: ["product-detail", "hello"],
});
```

## 13.6 Production Cache

이번에 할 것

- Next.js가 어떻게 caching하는지 배우는 시간

인상적인 내용

- Next.js는 어떻게 build할까?
  - npm run build
  - npm run start vs npm run dev
- static과 dynamic의 차이
  - 이 페이지는 누가 보는지에 따라 내용이 달라지나요? 네→ dynamic, 아니요 → static
- /home 페이지는 DB를 접근하는데도 dynamic이 아니라 static이네요?
  - DB를 사용하지만 쿠키, 헤더를 사용하지 않음
  - 보는 사람에 따라 내용이 바뀌지 않음
  - 초기 DB, API접근은 한번만 합니다. 바뀌면 그제서야 합니다.
- /profile 페이지는 dynamic이네요?

## 13.7 Route Segment Config

이번에 할 것

- customization

인상적인 내용

- route segment config
  - const dynamic = “auto”, 최대한 많이 캐싱함
  - const dynamic = “force-dynamic”, dynamic렌더링을 강제로 실행
- 아주 멋진기능인 revalidate
  - production에서 해야함!!!
  - 아주 많이 사용!!!

코드

- app/(tabs)/home/page.tsx

```tsx
// export const dynamic = "force-dynamic"
export const revalidate = 60;
```

팁

음.. 그러면 dev mode에서 nextCache로 만든거를 실제로 production으로 build할때에는 cache를 다시 돌려놔야 하는건가요? 아니면 cache를 써도 되고 저렇게 써도 되고 둘다 가능한 건가요?

개발 모드에서는 static 페이지를 만드는 작업이 없었기 때문에 home이 다이나믹 페이지처럼 작동합니다. 그래서 nextCache를 넣어줫던 것이고. 빌드 후 home 페이지가 다이나믹으로 할지 static으로 할지는 강의처럼 본인이 정하셔서 만약 다이나믹으로 했는데 데이터 불러오는 작업을 cache하고 싶으시다면 그때 nextCache를 적용하시면 됩니다.

Route Segment Config

https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

## 13.8 Recap part One

인상적인 내용

- Next.js에서만 fetch의 두 번째 인자로 next옵션을 줄 수 있습니다.
- POST, Cookie, DB접근을 한다면 Cache를 고려해야 합니다.
- fetch를 사용한 자동 cache와 nextCache의 차이점

## 13.9 Recap part Two

인상적인 내용

- 전체 프로젝트 관점에서 캐싱
- Server Side Rendering을 무서워 할 필요가 없다. <Suspense>를 사용하면 좋다.
- 모든 것을 Static으로 만들 필요가 없다. <Suspense>를 사용하면 되니까
- 기본은 최대한 많이 caching하는 것

## 13.10 generateStaticParams

이번에 할 것

- generateStaticParams

인상적인 내용

- id가 뭐가 올지 안다면 미리 rendering해달라고 할 수 있다!
- cookie를 사용하면 prerender를 사용할 수 없다.
- SSG
- 책임감 있게 사용해야 합니다. DB에 10000개 있다면…?!

코드

팁

generateStaticParams

https://nextjs.org/docs/app/api-reference/functions/generate-static-params

## 13.11 dynamicParams

이번에 할 것

- generateStaticParams으로 prerendering했는데, 새로 product를 추가했다면….?

인상적인 내용

- 새로운 아이템을 추가하면 자동으로 처음만 DB에 접근하고 이후에는 pre generated html을 응답합니다.

```tsx
export const dynamicParams = true;
```

- 아래는 왜 사용할까요?

```tsx
export const dynamicParams = false;
```

- 가~~~ 끔 사용한다고 합니다.

팁

```tsx
Insane🔥🔥🔥
I really really love this section.

Honestly I dont know well about SSG, ISR yet cuz I almost sleeping when I watchced NextJS 12 version course However I fell like can pretend SSG, ISR with Route Segment Configs and generateStaticParams.

I really really love this section!

Thanks a lot and congratulation again to being father!! 🎉
```

## 13.12 Code Challenge

이번에 할 것

- /home과 제품 업로드를 연결 caching
  - 하고싶은 caching 전략을 정하고 제품 업로 server action과 연결해주자.
  - 제품 디테일 페이지와도 해주자
- 제품 편집 페이지 만들기
  - 편집 중 새로고침 했을 때

팁

- https://github.com/devgony/carrot-market/commit/05efa740940d8982d3bea88270286bd52b60e3f3
- https://github.com/daehyeong2/carrot-market/commit/ae8755178e270e8c519647a9618ab6314d1e34a4

# 14 OPTIMISTIC UPDATES

## 14.0 Introduction

이번에 할 것

- 모델 생성

인상적인 내용

- useOptimistic()
- mutation
- 실제로 빠르진 않더라도 빠르게 보이는 방법을 배울 것임.
- composite Id
  - like는 유저가 포스트에 1개만 누를 수 있음
  - @@id(name: "id", [userId, postId])

코드

- prisma/schema.prisma

```
model Post {
  id          Int       @id @default(autoincrement())
  title       String
  description String?
  views       Int       @default(0)
  created_at  DateTime  @default(now())
  updated_at  DateTime  @updatedAt
  user        User      @relation(fields: [userId], references: [id])
  userId      Int
  Comment     Comment[]
  Like        Like[]
}

model Comment {
  id         Int      @id @default(autoincrement())
  payload    String
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  user       User     @relation(fields: [userId], references: [id])
  post       Post     @relation(fields: [postId], references: [id])
  userId     Int
  postId     Int
}

model Like {
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
  user       User     @relation(fields: [userId], references: [id])
  post       Post     @relation(fields: [postId], references: [id])
  userId     Int
  postId     Int

  @@id(name: "id", [userId, postId])
}

```

## 14.1 See Posts

이번에 할 것

- 동네생활 loading.tsx
-

인상적인 내용

- relation count
  - https://www.prisma.io/docs/orm/prisma-client/queries/aggregation-grouping-summarizing#filter-the-relation-count

코드

- app/(tabs)/life/page.tsx

```tsx
import db from "@/lib/db";
import { formatToTimeAgo } from "@/lib/utils";
import {
  ChatBubbleBottomCenterIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

async function getPosts() {
  const posts = await db.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      views: true,
      created_at: true,
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
  });
  return posts;
}

export const metadata = {
  title: "동네생활",
};

export default async function Life() {
  const posts = await getPosts();
  return (
    <div className="p-5 flex flex-col">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/posts/${post.id}`}
          className="pb-5 mb-5 border-b border-neutral-500 text-neutral-400 flex  flex-col gap-2 last:pb-0 last:border-b-0"
        >
          <h2 className="text-white text-lg font-semibold">{post.title}</h2>
          <p>{post.description}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex gap-4 items-center">
              <span>{formatToTimeAgo(post.created_at.toString())}</span>
              <span>·</span>
              <span>조회 {post.views}</span>
            </div>
            <div className="flex gap-4 items-center *:flex *:gap-1 *:items-center">
              <span>
                <HandThumbUpIcon className="size-4" />
                {post._count.likes}
              </span>
              <span>
                <ChatBubbleBottomCenterIcon className="size-4" />
                {post._count.comments}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
```

## 14.2 Likes and Dislikes

이번에 할 것

- 좋아요, 좋아요 취소
- 게시물 상세 페이지

인상적인 내용

- 조회수 증가를 위해 findUnique로 받아온 것을 update하거나, update사용
- update는 찾지 못하면 에러 발생
- 새로고침하는게 짜증나니 아주 나쁜 해결책인 revalidatePath를 사용!

코드

- app/posts/[id]/page.tsx

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id: number) {
  try {
    const post = await db.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
      },
    });
    return post;
  } catch (e) {
    return null;
  }
}

async function getIsLiked(postId: number) {
  const session = await getSession();
  const like = await db.like.findUnique({
    where: {
      id: {
        postId,
        userId: session.id!,
      },
    },
  });
  return Boolean(like);
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }
  const likePost = async () => {
    "use server";
    const session = await getSession();
    try {
      await db.like.create({
        data: {
          postId: id,
          userId: session.id!,
        },
      });
      revalidatePath(`/post/${id}`);
    } catch (e) {}
  };
  const dislikePost = async () => {
    "use server";
    try {
      const session = await getSession();
      await db.like.delete({
        where: {
          id: {
            postId: id,
            userId: session.id!,
          },
        },
      });
      revalidatePath(`/post/${id}`);
    } catch (e) {}
  };
  const isLiked = await getIsLiked(id);
  return (
    <div className="p-5 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Image
          width={28}
          height={28}
          className="size-7 rounded-full"
          src={post.user.avatar!}
          alt={post.user.username}
        />
        <div>
          <span className="text-sm font-semibold">{post.user.username}</span>
          <div className="text-xs">
            <span>{formatToTimeAgo(post.created_at.toString())}</span>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="mb-5">{post.description}</p>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <EyeIcon className="size-5" />
          <span>조회 {post.views}</span>
        </div>
        <form action={isLiked ? dislikePost : likePost}>
          <button
            className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2 hover:bg-neutral-800 transition-colors`}
          >
            <HandThumbUpIcon className="size-5" />
            <span>공감하기 ({post._count.likes})</span>
          </button>
        </form>
      </div>
    </div>
  );
}
```

## 14.3 Cache Tags

이번에 할 것

- 좋아요 꾸미기

인상적인 내용

- customId를 tag에 넣는 트릭
- unstable_cache와 cookies()를 함께 사용할 수 없다.
- 좋아요를 눌렀는데, 서버가 작업이 오래 걸려서 좋아요 반응이 오래 걸린다면??? → useOptimistic()

코드

- app/posts/[id]/page.tsx

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineHandThumbUpIcon } from "@heroicons/react/24/outline";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getPost(id: number) {
  try {
    const post = await db.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return post;
  } catch (e) {
    return null;
  }
}

const getCachedPost = nextCache(getPost, ["post-detail"], {
  tags: ["post-detail"],
  revalidate: 60,
});

async function getLikeStatus(postId: number, userId: number) {
  // const session = await getSession();
  const isLiked = await db.like.findUnique({
    where: {
      id: {
        postId,
        userId: userId,
      },
    },
  });
  const likeCount = await db.like.count({
    where: {
      postId,
    },
  });
  return {
    likeCount,
    isLiked: Boolean(isLiked),
  };
}

async function getCachedLikeStatus(postId: number) {
  const session = await getSession();
  const userId = session.id;
  const cachedOperation = nextCache(getLikeStatus, ["product-like-status"], {
    tags: [`like-status-${postId}`],
  });
  return cachedOperation(postId, userId!);
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const post = await getCachedPost(id);
  if (!post) {
    return notFound();
  }
  const likePost = async () => {
    "use server";
    await new Promise((r) => setTimeout(r, 5000));
    const session = await getSession();
    try {
      await db.like.create({
        data: {
          postId: id,
          userId: session.id!,
        },
      });
      revalidateTag(`like-status-${id}`);
    } catch (e) {}
  };
  const dislikePost = async () => {
    "use server";
    try {
      const session = await getSession();
      await db.like.delete({
        where: {
          id: {
            postId: id,
            userId: session.id!,
          },
        },
      });
      revalidateTag(`like-status-${id}`);
    } catch (e) {}
  };
  const { likeCount, isLiked } = await getCachedLikeStatus(id);
  return (
    <div className="p-5 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Image
          width={28}
          height={28}
          className="size-7 rounded-full"
          src={post.user.avatar!}
          alt={post.user.username}
        />
        <div>
          <span className="text-sm font-semibold">{post.user.username}</span>
          <div className="text-xs">
            <span>{formatToTimeAgo(post.created_at.toString())}</span>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="mb-5">{post.description}</p>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <EyeIcon className="size-5" />
          <span>조회 {post.views}</span>
        </div>
        <form action={isLiked ? dislikePost : likePost}>
          <button
            className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2  transition-colors ${
              isLiked
                ? "bg-orange-500 text-white border-orange-500"
                : "hover:bg-neutral-800"
            }`}
          >
            {isLiked ? (
              <HandThumbUpIcon className="size-5" />
            ) : (
              <OutlineHandThumbUpIcon className="size-5" />
            )}
            {isLiked ? (
              <span> {likeCount}</span>
            ) : (
              <span>공감하기 ({likeCount})</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
```

## 14.4 useOptimistic

### 이번에 할 것

- React useOptimistic 사용
- action, button 분리

### 인상적인 내용

- 유저가 데이터를 보내주면 거기에 맞게 데이터베이스를 수정하는 것이 mutation
  - 두 가지 옵션
    - 백엔드가 끝날 때까지 기다리기
    - like, dislike는 중요하지 않아서 굳이 다 끝날 때까지 기다릴 필요 없이 optimistic response를 주자
      - 성공한 것처럼 UI를 변경
        - 엄청 많이 사용함!!!

```tsx
[optimisticState, addOptimistic] = useOptimistic(state, updateFn);
```

state: 기존 state

optimisticState: 임시로 보여줄 state

addOptimistic: 시간이 좀 걸리는 action trigger

updateFn: ???

### 코드

- app/posts/[id]/page.tsx

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { formatToTimeAgo } from "@/lib/utils";
import { EyeIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineHandThumbUpIcon } from "@heroicons/react/24/outline";
import { unstable_cache as nextCache, revalidateTag } from "next/cache";
import Image from "next/image";
import { notFound } from "next/navigation";
import LikeButton from "@/components/like-button";

async function getPost(id: number) {
  try {
    const post = await db.post.update({
      where: {
        id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
    return post;
  } catch (e) {
    return null;
  }
}

const getCachedPost = nextCache(getPost, ["post-detail"], {
  tags: ["post-detail"],
  revalidate: 60,
});

async function getLikeStatus(postId: number, userId: number) {
  // const session = await getSession();
  const isLiked = await db.like.findUnique({
    where: {
      id: {
        postId,
        userId: userId,
      },
    },
  });
  const likeCount = await db.like.count({
    where: {
      postId,
    },
  });
  return {
    likeCount,
    isLiked: Boolean(isLiked),
  };
}

async function getCachedLikeStatus(postId: number) {
  const session = await getSession();
  const userId = session.id;
  const cachedOperation = nextCache(getLikeStatus, ["product-like-status"], {
    tags: [`like-status-${postId}`],
  });
  return cachedOperation(postId, userId!);
}

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const post = await getCachedPost(id);
  if (!post) {
    return notFound();
  }
  const { likeCount, isLiked } = await getCachedLikeStatus(id);
  return (
    <div className="p-5 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Image
          width={28}
          height={28}
          className="size-7 rounded-full"
          src={post.user.avatar!}
          alt={post.user.username}
        />
        <div>
          <span className="text-sm font-semibold">{post.user.username}</span>
          <div className="text-xs">
            <span>{formatToTimeAgo(post.created_at.toString())}</span>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-semibold">{post.title}</h2>
      <p className="mb-5">{post.description}</p>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <EyeIcon className="size-5" />
          <span>조회 {post.views}</span>
        </div>
        <LikeButton isLiked={isLiked} likeCount={likeCount} postId={id} />
      </div>
    </div>
  );
}
```

- app/posts/[id]/actions.ts

```tsx
"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidateTag } from "next/cache";

export async function likePost(postId: number) {
  await new Promise((r) => setTimeout(r, 10000));
  const session = await getSession();
  try {
    await db.like.create({
      data: {
        postId,
        userId: session.id!,
      },
    });
    revalidateTag(`like-status-${postId}`);
  } catch (e) {}
}

export async function dislikePost(postId: number) {
  await new Promise((r) => setTimeout(r, 10000));
  try {
    const session = await getSession();
    await db.like.delete({
      where: {
        id: {
          postId,
          userId: session.id!,
        },
      },
    });
    revalidateTag(`like-status-${postId}`);
  } catch (e) {}
}
```

- components/like-button.tsx

```tsx
"use client";

import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as OutlineHandThumbUpIcon } from "@heroicons/react/24/outline";
import { useOptimistic } from "react";
import { dislikePost, likePost } from "@/app/posts/[id]/actions";

interface LikeButtonProps {
  isLiked: boolean;
  likeCount: number;
  postId: number;
}

export default function LikeButton({
  isLiked,
  likeCount,
  postId,
}: LikeButtonProps) {
  const [state, reducerFn] = useOptimistic(
    { isLiked, likeCount },
    (previousState, payload) => ({
      isLiked: !previousState.isLiked,
      likeCount: previousState.isLiked
        ? previousState.likeCount - 1
        : previousState.likeCount + 1,
    })
  );
  const onClick = async () => {
    reducerFn(undefined);
    if (isLiked) {
      await dislikePost(postId);
    } else {
      await likePost(postId);
    }
  };
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 text-neutral-400 text-sm border border-neutral-400 rounded-full p-2  transition-colors ${
        state.isLiked
          ? "bg-orange-500 text-white border-orange-500"
          : "hover:bg-neutral-800"
      }`}
    >
      {state.isLiked ? (
        <HandThumbUpIcon className="size-5" />
      ) : (
        <OutlineHandThumbUpIcon className="size-5" />
      )}
      {state.isLiked ? (
        <span> {state.likeCount}</span>
      ) : (
        <span>공감하기 ({state.likeCount})</span>
      )}
    </button>
  );
}
```

# 15 REALTIME CHAT

## 15.0 Introduction

### 인상적인 내용

- supabase보다 cloudflare가 더 좋음

## 15.1 Models

### 이번에 할 것

- chatRoom, message 모델 만들기

### 인상적인 내용

- cuid

### 코드

- prisma/schema.prisma

```
model ChatRoom {
  id    String @id @default(cuid())
  users User[]

  created_at DateTime  @default(now())
  updated_at DateTime  @updatedAt
  Message    Message[]
}

model Message {
  id      Int    @id @default(autoincrement())
  payload String

  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  room       ChatRoom @relation(fields: [chatRoomId], references: [id])
  user       User     @relation(fields: [userId], references: [id])
  chatRoomId String
  userId     Int
}

```

### 팁

CUID

https://www.prisma.io/docs/orm/reference/prisma-schema-reference#cuid

https://github.com/paralleldrive/cuid

https://github.com/paralleldrive/cuid2

## 15.2 Chat Room

### 이번에 할 것

- chat 페이지 만들기
- chat 버튼 구현

### 인상적인 내용

- use server를 사용한다면 파일로 분리하자

## 15.3 Messages

### 이번에 할 것

- 메시지 컴포넌트 만들기
- 초기 메시지 전달

### 인상적인 내용

- UI 작업 미쳤다~

### 코드

- app/chats/[id]/page.tsx

```tsx
import ChatMessagesList from "@/components/chat-messages-list";
import db from "@/lib/db";
import getSession from "@/lib/session";
import { Prisma } from "@prisma/client";
import { notFound } from "next/navigation";

async function getRoom(id: string) {
  const room = await db.chatRoom.findUnique({
    where: {
      id,
    },
    include: {
      users: {
        select: { id: true },
      },
    },
  });
  if (room) {
    const session = await getSession();
    const canSee = Boolean(room.users.find((user) => user.id === session.id!));
    if (!canSee) {
      return null;
    }
  }
  return room;
}

async function getMessages(chatRoomId: string) {
  const messages = await db.message.findMany({
    where: {
      chatRoomId,
    },
    select: {
      id: true,
      payload: true,
      created_at: true,
      userId: true,
      user: {
        select: {
          avatar: true,
          username: true,
        },
      },
    },
  });
  return messages;
}

export type InitialChatMessages = Prisma.PromiseReturnType<typeof getMessages>;

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const room = await getRoom(params.id);
  if (!room) {
    return notFound();
  }
  const initialMessages = await getMessages(params.id);
  const session = await getSession();
  return (
    <ChatMessagesList userId={session.id!} initialMessages={initialMessages} />
  );
}
```

- components/chat-messages-list.tsx

```tsx
"use client";

import { InitialChatMessages } from "@/app/chats/[id]/page";
import { formatToTimeAgo } from "@/lib/utils";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRef, useState } from "react";

interface ChatMessageListProps {
  initialMessages: InitialChatMessages;
  userId: number;
}
export default function ChatMessagesList({
  initialMessages,
  userId,
}: ChatMessageListProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setMessage(value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(message);
    setMessage("");
  };
  return (
    <div className="p-5 flex flex-col gap-5 min-h-screen justify-end">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex gap-2 items-start ${
            message.userId === userId ? "justify-end" : ""
          }`}
        >
          {message.userId === userId ? null : (
            <Image
              src={message.user.avatar!}
              alt={message.user.username}
              width={50}
              height={50}
              className="size-8 rounded-full"
            />
          )}
          <div
            className={`flex flex-col gap-1 ${
              message.userId === userId ? "items-end" : ""
            }`}
          >
            <span
              className={`${
                message.userId === userId ? "bg-neutral-500" : "bg-orange-500"
              } p-2.5 rounded-md`}
            >
              {message.payload}
            </span>
            <span className="text-xs">
              {formatToTimeAgo(message.created_at.toString())}
            </span>
          </div>
        </div>
      ))}
      <form className="flex relative" onSubmit={onSubmit}>
        <input
          required
          onChange={onChange}
          value={message}
          className="bg-transparent rounded-full w-full h-10 focus:outline-none px-5 ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-neutral-50 border-none placeholder:text-neutral-400"
          type="text"
          name="message"
          placeholder="Write a message..."
        />
        <button className="absolute right-0">
          <ArrowUpCircleIcon className="size-10 text-orange-500 transition-colors hover:text-orange-300" />
        </button>
      </form>
    </div>
  );
}
```

## 15.4 Realtime Channel

### 이번에 할 것

- 메시지 입력 기능 추가
- 가짜 메시지 출력
- supabase

### 인상적인 내용

- https://supabase.com/docs/guides/realtime/broadcast

### 코드

- components/input.tsx

```tsx
const onSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  setMessages((prevMsgs) => [
    ...prevMsgs,
    {
      id: Date.now(),
      payload: message,
      created_at: new Date(),
      userId,
      user: {
        username: "string",
        avatar: "xxx",
      },
    },
  ]);
  setMessage("");
};
useEffect(() => {
  const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
  console.log(client);
  const channel = client.channel(`room-${chatRoomId}`);
  channel.on("broadcast", { event: "message" }, (payload) => {
    console.log(payload);
  });
}, [chatRoomId]);
```

### 팁

채팅방 만들고 주소 저장해 놔야 합니다 ~! 뒤로 가기 했다가 누르면 채팅방 채팅방 추가로 만들어 져서 메세지 사라 집니다

---

저도 똑같이 그래서 chatRoom에 productId를 넣어버렸어요. 생성하기 전에 이 product에 user id, session id 같이 있는 chatRoom이 있으면 생성하지 않고 거기로 이동시키는 방식으로~!

## 15.5 Supabase Broadcast

### 이번에 할 것

- supabase subscribe

### 인상적인 내용

- useRef는 아주 유용합니다! 컴포넌트 내에서 여러 함수에서 변수를 사용하고 싶다면 useRef
- channel.send
- channel.on
- channel.subscribe

### 코드

```tsx
const channel = useRef<RealtimeChannel>();
```

### 팁

Multiple GoTrueClient instances detected in the same browser context

- -->

인스턴스 중복에 의한 문제.

const client = createClient 를 함수 밖에 선언 하면 됩니다.

## 15.6 Realtime Messages

### 이번에 할 것

- 메시지에 유저이름과 아바타도 보내기
- 소켓으로 받은 메시지 state 반영

### 인상적인 내용

- 챌린지
  - getUserProfile 캐싱

### 코드

- app/chats/[id]/page.tsx

```tsx
async function getUserProfile() {
  const session = await getSession();
  const user = await db.user.findUnique({
    where: {
      id: session.id!,
    },
    select: {
      username: true,
      avatar: true,
    },
  });
  return user;
}

export type InitialChatMessages = Prisma.PromiseReturnType<typeof getMessages>;

export default async function ChatRoom({ params }: { params: { id: string } }) {
  const room = await getRoom(params.id);
  if (!room) {
    return notFound();
  }
  const initialMessages = await getMessages(params.id);
  const session = await getSession();
  const user = await getUserProfile();
  if (!user) {
    return notFound();
  }
  return (
    <ChatMessagesList
      chatRoomId={params.id}
      userId={session.id!}
      username={user.username}
      avatar={user.avatar!}
      initialMessages={initialMessages}
    />
  );
}
```

- components/chat-messages-list.tsx

```tsx
const onSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  setMessages((prevMsgs) => [
    ...prevMsgs,
    {
      id: Date.now(),
      payload: message,
      created_at: new Date(),
      userId,
      user: {
        username: "string",
        avatar: "xxx",
      },
    },
  ]);
  channel.current?.send({
    type: "broadcast",
    event: "message",
    payload: {
      id: Date.now(),
      payload: message,
      created_at: new Date(),
      userId,
      user: {
        username,
        avatar,
      },
    },
  });
  setMessage("");
};
useEffect(() => {
  const client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
  channel.current = client.channel(`room-${chatRoomId}`);
  channel.current
    .on("broadcast", { event: "message" }, (payload) => {
      setMessages((prevMsgs) => [...prevMsgs, payload.payload]);
    })
    .subscribe();
  return () => {
    channel.current?.unsubscribe();
  };
}, [chatRoomId]);
```

## 15.7 Code Challenge

### 이번에 할 것

- 새로고침하면 사라는 것을 해결
- 챌린지
  - 채팅 탭 구현
    - 모든 채팅방 리스트 보여주기
    - 내가 대화하고 있는 채팅방과 아바타 그리고 최신 메시지 보여주기
  - 읽지 않은 채팅방이 어느 것인지
  - 읽은 채팅방은 어떤 것이고

### 인상적인 내용

### 코드

- app/chats/action.ts

```tsx
"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";

export async function saveMessage(payload: string, chatRoomId: string) {
  const session = await getSession();
  await db.message.create({
    data: {
      payload,
      chatRoomId,
      userId: session.id!,
    },
    select: {
      id: true,
    },
  });
}
```

# 16 LIVE STREAMING

## 16.0 Introduction

### 이번에 할 것

### 인상적인 내용

- Cloudflare Stream
- 트위치 유튜브를 너무 쉽게 만들 수 있어요
- https://developers.cloudflare.com/stream/stream-live
- $6 필요

## 16.1 Live Input

### 이번에 할 것

- Cloudflare stream 사용
- OBS 스트리밍 서비스

### 인상적인 내용

https://developers.cloudflare.com/stream/get-started/

https://developers.cloudflare.com/stream/stream-live/start-stream-live/

### 코드

- app/streams/add/page.tsx

```tsx
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { useFormState } from "react-dom";
import { startStream } from "./action";

export default function AddStream() {
  const [state, action] = useFormState(startStream, null);
  return (
    <form className="p-5 flex flex-col gap-2" action={action}>
      <Input
        name="title"
        required
        placeholder="Title or your stream."
        errors={state?.formErrors}
      />
      <Button text="Start streaming" />
    </form>
  );
}
```

- app/streams/add/action.ts

```tsx
"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const title = z.string();

export async function startStream(_: any, formData: FormData) {
  const results = title.safeParse(formData.get("title"));
  if (!results.success) {
    return results.error.flatten();
  }
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/stream/live_inputs`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
      },
      body: JSON.stringify({
        meta: {
          name: results.data,
        },
        recording: {
          mode: "automatic",
        },
      }),
    }
  );
  const data = await response.json();
  const session = await getSession();
  const stream = await db.liveStream.create({
    data: {
      title: results.data,
      stream_id: data.result.uid,
      stream_key: data.result.rtmps.streamKey,
      userId: session.id!,
    },
    select: {
      id: true,
    },
  });
  redirect(`/streams/${stream.id}`);
}
```

## 16.2 Live Streaming

### 이번에 할 것

- 방송 상세 페이지

### 인상적인 내용

- Tailwind CSS, aspect-video
- Cloudflare는 Stream URL과 SecretKey를 제공하고 OBS를 사용해서 방송

### 코드

- app/streams/[id]/page.tsx

```tsx
import db from "@/lib/db";
import getSession from "@/lib/session";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getStream(id: number) {
  const stream = await db.liveStream.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      stream_key: true,
      stream_id: true,
      userId: true,
      user: {
        select: {
          avatar: true,
          username: true,
        },
      },
    },
  });
  return stream;
}

export default async function StreamDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const stream = await getStream(id);
  if (!stream) {
    return notFound();
  }
  const session = await getSession();
  return (
    <div className="p-10">
      <div className="relative aspect-video">
        <iframe
          src={`https://${process.env.CLOUDFLARE_DOMAIN}/dc98714ad120275903d1c681fa987fbc/iframe`}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          className="w-full h-full rounded-md"
        ></iframe>
      </div>
      <div className="p-5 flex items-center gap-3 border-b border-neutral-700">
        <div className="size-10 overflow-hidden rounded-full">
          {stream.user.avatar !== null ? (
            <Image
              src={stream.user.avatar}
              width={40}
              height={40}
              alt={stream.user.username}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{stream.user.username}</h3>
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">{stream.title}</h1>
      </div>
      {stream.userId === session.id! ? (
        <div className="bg-yellow-200 text-black p-5 rounded-md">
          <div className="flex gap-2">
            <span className="font-semibold">Stream URL:</span>
            <span>rtmps://live.cloudflare.com:443/live/</span>
          </div>
          <div className="flex  flex-wrap">
            <span className="font-semibold">Secret Key:</span>
            <span>{stream.stream_key}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
```

# 17 NEXTJS EXTRAS

## 17.0 Introduction

### 인상적인 내용

- 모두 다른 내용임
- 니코는 프레임워크를 사용하면 프레임워크가 지원하는 기능을 최대한 활용하려고 노력함

## 17.1 Fonts

### 이번에 할 것

- 구글 폰트 로컬 폰트

### 인상적인 내용

https://nextjs.org/docs/app/building-your-application/optimizing/fonts

https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css

### 코드

- tailwind.config.ts

```tsx
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--roboto-text)",
        rubick: "var(--rubick-text)",
        metallica: "var(--metallica-text)",
      },
      margin: {
        tomato: "120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
```

- app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Roboto, Rubik_Scribble } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--roboto-text",
});

const rubick = Rubik_Scribble({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  variable: "--rubick-text",
});

const metallica = localFont({
  src: "./metallica.ttf",
  variable: "--metallica-text",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Karrot Market",
    default: "Karrot Market",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rubick.variable} ${metallica.variable} bg-neutral-900 text-white max-w-screen-sm mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
```

- app/extras/page.tsx

```tsx
export default function Extras() {
  return (
    <div className="flex flex-col gap-3 py-10">
      <h1 className="text-6xl font-metallica">Extras!</h1>
      <h2 className="font-roboto">So much more to learn!</h2>
    </div>
  );
}
```

## 17.2 Private Folders

### 이번에 할 것

- Private Folders

### 팁

Private Folders

Private 폴더는 폴더 앞에 밑줄(\_folderName)을 붙여 생성할 수 있습니다.

https://nextjs.org/docs/app/building-your-application/routing/colocation#private-folders
