export default function Footer(){
    return(
        <footer className="bg-[#f5f5f5] text-black rounded-2xl p-3 text-center">
            {/* if not login or signup */}
            <section className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl">
                    Want to Become Number One ?
                </h1>
                <p>
                    Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun updates.
                </p>
                <div className="flex justify-center gap-3">
                    <input type="email" placeholder="Enter Your Email Address" className="bg-white p-3"/>
                    <button className="bg-black text-white p-1">
                        SIGN UP
                    </button>
                </div>
                <p>Note: You can opt-out at any time.</p>
            </section>
        </footer>
    )
}