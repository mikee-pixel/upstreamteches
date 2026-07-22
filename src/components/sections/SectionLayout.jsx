const SectionLayout = ({children, class_name}) => {
    return(
        <section  className={`${class_name} homepage w-full flex justify-center`}>
            <div className={`inner-con w-full max-w-[1450px] flex justify-between flex-wrap px-5 md:px-10`}>
                {children}
            </div>
        </section>
    )
}

export default SectionLayout;