import React from 'react'

const ProjectSection = () => {
  return (
    <section className='w-full min-h-screen bg-background dark:bg-neutral-950 py-10 lg:py-30 '>
        <div className="w-full h-full flex flex-col max-w-350 mx-auto items-start justify-center px-10">
            {/* Header Section */}
            <div className="flex w-full flex-nowrap items-center justify-center gap-8">
                <p className=' font-bold whitespace-nowrap font-[manrope]'><span className='text-primary'>[</span> 01 Projects <span className='text-primary'>]</span></p>
            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
            </div>

            {/* Projects Section */}
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 gap-7 mt-10'>
                <div className='w-full h-100 bg-neutral-300 rounded-2xl border-black dark:border-white p-10'>
                    <p>Projects</p>
                </div>
                <div className='w-full h-100 bg-neutral-300 rounded-2xl border-black dark:border-white p-10'>
                    <p>Projects</p>
                </div>
                <div className='w-full h-100 bg-neutral-300 rounded-2xl border-black dark:border-white p-10'>
                    <p>Projects</p>
                </div>
                <div className='w-full h-100 bg-neutral-300 rounded-2xl border-black dark:border-white p-10'>
                    <p>Projects</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectSection