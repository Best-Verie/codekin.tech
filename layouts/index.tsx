import Nav from '@/components/Nav'
// import Footer from '@/components/Footer'

const IndexLayout: React.FC = ({ children }): React.ReactElement => {
    return (
        <section className="max-h-screen max-w-full">
            <Nav />
            <div className=" w-2/3 m-auto relative">
                <main className=" flex justify-center content-start mt-20 mb-8 flex-col">
                    {children}
                </main>
                {/* <Footer /> */}
            </div>
        </section>
    )
}

export default IndexLayout
