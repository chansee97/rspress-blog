// 定制 404 页面
export default function () {
  return <div className="m-auto mt-50 p-16 sm:p-8 sm:pt-24 sm:pb-40 text-center flex-center flex-col">
    <p className="text-6xl font-semibold">404</p>
    <h1 className="leading-5 pt-3 text-xl font-bold">PAGE NOT FOUND</h1>
    <div className="mt-6 mx-auto mb-4.5 w-16 bg-gray-light-1 h-[1px]"></div>
    <div className="pt-5">
      <a className="py-2 px-4 rounded-2xl inline-block border-solid border-brand text-brand font-medium hover:border-brand-dark hover:text-brand-dark transition-colors duration-300" href="/" aria-label="go to home">Take me home</a>
    </div>
  </div>;
}