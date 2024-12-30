export default function Footer() {
  return (
    <div
      className='relative flex mt-8 w-full border-t-1 border-divider flex-col'
      id='app-container'
    >
      <div className='flex items-center justify-center bg-white dark:bg-gray-950'>
        <footer className='flex w-full flex-col'>
          <div className='mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
            <div className='mt-4 md:order-1 md:mt-0'>
              <div className='flex items-center justify-center gap-3 md:justify-start'>
                <div className='flex items-center'>
                  <svg fill='none' height={72} viewBox='0 0 32 32' width={72}>
                    <path
                      clipRule='evenodd'
                      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
                      fill='CurrentColor'
                      fillRule='evenodd'
                    />
                  </svg>
                  <span className='text-medium font-medium'>Deep Cover</span>
                </div>
                <div
                  className='shrink-0 bg-divider border-none w-divider h-4'
                  role='separator'
                  data-orientation='vertical'
                  aria-orientation='vertical'
                />
                <div className='relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default bg-transparent h-7 text-small rounded-full border-none px-0 text-default-500'>
                  <span className='w-2 h-2 ml-1 rounded-full bg-success' />
                  <span className='flex-1 font-normal px-2'>
                    All systems operational
                  </span>
                </div>
              </div>
              <p className='text-center text-tiny text-default-400 md:text-start'>
                © 2024 Deep Cover Inc. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
