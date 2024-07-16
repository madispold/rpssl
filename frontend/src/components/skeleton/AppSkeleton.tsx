export const AppSkeleton = () => (
  <div className='py-4 w-full'>
    <div className='animate-pulse flex flex-col'>
      <div className='w-[148px] bg-slate-300 rounded h-6 py-2'></div>
      <div className='w-[148px] bg-slate-300 rounded h-4 mt-4 py-2'></div>
      <div className='flex items-center text-center gap-4 flex-wrap mt-4'>
        <div className='min-w-[80px] flex-1 w-[200px] bg-slate-300 rounded h-6'></div>
        <div className='min-w-[80px] flex-1 w-[200px] bg-slate-300 rounded h-6'></div>
        <div className='min-w-[80px] flex-1 w-[200px] bg-slate-300 rounded h-6'></div>
        <div className='min-w-[80px] flex-1 w-[200px] bg-slate-300 rounded h-6'></div>
        <div className='min-w-[80px] flex-1 w-[200px] bg-slate-300 rounded h-6'></div>
      </div>
      <div className='w-full flex justify-between mt-6'>
        <div className='w-[80px] bg-slate-300 rounded h-6'></div>
        <div className='w-[80px] bg-slate-300 rounded h-6'></div>
      </div>
      <div className='flex md:flex-row flex-col items-center mt-2'>
        <div className='flex-1 my-2'>
          <div className='mx-auto w-[60px] bg-slate-300 rounded h-6'></div>
        </div>
        <div className='flex-1 my-2'>
          <div className='mx-auto w-[124px] bg-slate-300 rounded h-6 m-2'></div>
        </div>
        <div className='flex-1 my-2'>
          <div className='mx-auto w-[60px] bg-slate-300 rounded h-6'></div>
        </div>
      </div>
      <div className='w-full flex justify-center mt-2'>
        <div className='w-[124px] bg-slate-300 rounded h-6'></div>
      </div>
    </div>
  </div>
);
