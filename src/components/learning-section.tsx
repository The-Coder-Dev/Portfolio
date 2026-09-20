const LearningSection = () => {
    return (
        <section className="w-full h-fit bg-neutral-950 dark:bg-linear-br from-primary py-12 to-orange-400">
            <div className="max-w-350 mx-auto px-10">
                <div className="flex w-full flex-nowrap items-center justify-center gap-8">
                    <p className='text-sm text-neutral-50 dark:text-white font-bold whitespace-nowrap font-[manrope]'><span className='text-primary'>[</span> 02 Currently Learning <span className='text-primary'>]</span></p>
                    <div className="h-px w-full bg-neutral-50/10 dark:bg-neutral-200" />
                </div>

                <div className="flex gap-10 mt-12">
                    <div className="w-full">
                        <h1 className="text-5xl text-background dark:text-white font-[manrope] font-bold">Always sharpening <br /> the edge.</h1>
                    </div>

                    <div className="w-full h-full flex flex-col items-center justify-between gap-8 mt-10">
                        <div className="flex gap-10 items-center justify-between border-t border-muted-foreground/30 py-8">
                            <p className="text-primary font-[manrope] text-lg font-semibold">01</p>
                            <h2 className="text-background dark:text-white font-[manrope] text-md font-semibold">Applied AI system</h2>
                            <p className="text-muted-foreground font-[manrope] text-sm font-semibold">Agents, retrieval, evaluation, and dependable product patterns.</p>
                        </div>
                        <div className="flex gap-10 items-center justify-between border-t border-muted-foreground/30 py-8">
                            <p className="text-primary font-[manrope] text-lg font-semibold">02</p>
                            <h2 className="text-background dark:text-white font-[manrope] text-md font-semibold">Distriibuted Backends</h2>
                            <p className="text-muted-foreground font-[manrope] text-sm font-semibold">
                                Resilient architecture, observability, and performance at scale.</p>
                        </div>
                        <div className="flex gap-10 items-center justify-between border-t border-muted-foreground/30 py-8">
                            <p className="text-primary font-[manrope] text-lg font-semibold">03</p>
                            <h2 className="text-background dark:text-white font-[manrope] text-md font-semibold">Product Engineering</h2>
                            <p className="text-muted-foreground font-[manrope] text-sm font-semibold">Better decisions across design, code, and business outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearningSection