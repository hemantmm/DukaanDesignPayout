import React from 'react'

function Payments() {
  return (
    <>
    <div className='flex items-center justify-between'>
            <div className='text-xl font-medium'>Overview</div>
            <div className='flex items-center gap-2 pt-1 pb-1 pl-2 pr-2 rounded bg-white border border-solid border-stone-300 text-zinc-700'>
              <span>This Month</span>
                <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-chevron-down-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
          </div>

          <div className='mt-7 flex justify-between gap-6'>
            <div className='pt-3 pb-0 pr-0 text-white w-full flex flex-col gap-4 rounded-md bg-sky-700 h-auto'>
              <div className='flex gap-2 font-light items-center pt-0 pb-0 pr-5 pl-5'>
                <div className='text-lg font-normal'>Next Payout</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div className='flex justify-between items-center pb-0 pl-5 pr-5'>
               <div class="text-[27px] font-semibold">₹2,312.23</div>
                  <div class="flex gap-1 text-sm font-medium cursor-pointer">
                    <div class="underline">23 orders</div>
                      <svg height="22px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                        class="text-white text-lg" transform="rotate(-90)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </div>
              </div>

              <div class="pt-3 pb-3 pr-5 pl-5 flex justify-between items-center text-sm font-light rounded-lg bg-sky-800">
                <div class="text-lg font-normal">Next payout date:</div>
                <div>Today, 04:00PM</div>
              </div>
            </div>

            <div class="pt-3 pb-6 pr-5 pl-5 shadow bg-white p-4 rounded-lg w-full flex flex-col gap-4 relative h-fit">
              <div class="flex gap-2 items-center text-neutral-600">
                <div class="text-lg font-normal">Amount Pending</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-3xl font-medium">₹92,312.20</div>
                <div class="flex gap-1 text-base font-medium cursor-pointer text-sky-700">
                  <div class="underline">13 orders</div>
                    <svg height="22px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="3" stroke="currentColor"
                        class="text-sky-700 text-lg" transform="rotate(-90)">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
              </div>
            </div>

            <div class="pt-3 pb-6 pr-5 pl-5 shadow bg-white p-4 rounded-lg w-full flex flex-col gap-4 relative h-fit">
              <div class="flex gap-2 items-center text-neutral-600">
                <div class="text-lg font-normal">Amount Processed</div>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
              </div>
              <div class="flex justify-between items-center">
                <div class="text-3xl font-medium">₹23,92,312.19</div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Payments