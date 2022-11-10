import type { PropsWithChildren } from "react";

export default function TopPrepare({ children }: PropsWithChildren) {
  return <div className="relative bg-gray-500 text-white flex justify-center items-center">
    { children }
    <div className="p-8 my-8 text-center bg-darken-400 z-10">
      <h3 className="text-6xl mb-4">언제든 준비되어 있습니다</h3>
      <p className="text-xl">상주, 재택, 사이드 프로젝트까지 다양한 경험으로 귀사의 새로운 웹 경험을 선사합니다.</p>
    </div>
  </div>;
}
