
export default function Hero() {
    return (
        <>
            <h1>Coffee Tracking for Coffee <abbr title="An enthusiasts or devotee">Fiends!</abbr></h1>
            <div className="benefits-list">
                <h3 className="font-bolder">Try <span className="text-gradient"> Caffiend </span>and start...</h3>
                <p><i className="fa-solid fa-check"></i> Tracking every Coffee</p>
                <p><i className="fa-solid fa-check"></i> Measuring your blood caffeine levels</p>
                <p><i className="fa-solid fa-check"></i> Costing and Quantifying your addiction</p>
            </div>
            <div className="card info-card">
                <div>
                    <i className="fa-solid fa-info"></i>
                    <h3>Did you know...</h3>
                </div>
                <h5>That caffeine&apos;s half-life is about 5 hours?</h5>
                <p>This means that after 5 hours half the caffeine you consumed is still in your system, keeping you alert longer! So if you drink a cup of coffee with 200mg of caffeine, 5 hours, later, you&apos;ll still have about 100mg of caffeine in your system</p>
            </div>
        </>
    )
}