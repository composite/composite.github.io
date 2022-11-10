import type { PropsWithChildren } from "react";

export default function TopPrepare({ children }: PropsWithChildren) {
  return <div className="relative bg-gray-500 text-white flex justify-center items-center">
    { children }
    <div className="p-8 my-8 text-center bg-darken-400 z-10">
      <h3 className="text-5xl mb-4">언제든 준비되어 있습니다</h3>
      <p className="text-2xl">다양한 기술스택과 귀사의 맞는 기술로 여러분의 웹을 빛내 드립니다.</p>
    </div>
  </div>;
}
