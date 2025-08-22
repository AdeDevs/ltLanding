export default function HomePage() {
    return (
        <div className="home">
            <header className="hero">
                <div className="hero-text">
                    <h1><em>Y</em>our <span className="colored">Market,</span> <br /> <em>Y</em>our <span className="colored">Wallet,</span> <br /> <em>Y</em>our <span className="colored">People.</span></h1>
                    <p>With LauTalk, you can buy and sell items, send and receive money securely and stay connected with your community.</p>
                    <p id="simple">Simple. Social. Seamless.</p>
                    <form className="hero-srch">
                        <input type="text" placeholder="Want to make payment or purchase anything?" />
                        <button>Search</button>
                    </form>
                </div>
                <div className="hero-bg"></div>
            </header>
        </div>
    )
}