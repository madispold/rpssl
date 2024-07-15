export const PlaySkeleton = () => (
  <div className='w-full'>
    <div className='animate-pulse py-4 grid gap-4 sm:grid-cols-[1fr_100px_1fr] grid-cols-1 justify-center'>
      <div className='mx-auto'>
        <div className='rounded-lg bg-slate-300 h-60 w-60 md:h-80 md:w-80'></div>
      </div>
      <div className='my-8'>
        <div className='bg-slate-300 rounded h-4 md:max-w-50 mb-2 text-center'></div>
        <div className='bg-slate-300 rounded h-4 md:max-w-50 text-center'></div>
      </div>
      <div className='mx-auto'>
        <div className='rounded-lg bg-slate-300 h-60 w-60 md:h-80 md:w-80'></div>
      </div>
    </div>
  </div>
);
