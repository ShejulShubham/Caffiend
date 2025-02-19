import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";

export default function Layout(props) {
    const { children } = props;

    const [showModal, setShowModal] = useState(false);

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee insatiates</p>
            </div>
            <button onClick={() => { setShowModal(true) }}>
                <p>Sign Up Free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p>
                <span className="text-gradient">Caffiend </span>
                was made by <a target="_blank" href="https://www.shejulshubham.github.io">
                    Shubham Shejul </a><br /> Using the <a target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> design library.
                <br />Check out the project on <a target="_blank" href="https://github.com/ShejulShubham/caffiend">GitHub</a>!</p>

        </footer>
    )
    return (
        <>
            {showModal && (
                <Modal handleCloseModal={() => { setShowModal(false) }}>
                    <Authentication />
                </Modal>
            )}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}