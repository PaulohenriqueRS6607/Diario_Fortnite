import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/0b75a56a-bd3c-4a1d-93d7-447a4991d96b.png';

export default function Header() {
    return (
        <>
            <header className="flex bg-indigo-700 h-[60px] w-full text-white font-[Blinker]">
                <div className="flex max-w-[90%] mx-auto w-full justify-between items-center">
                    <img
                        src={Logo}
                        alt="logo"
                        className="w-[80px] phone3:max-w-[10%] tablet1:w-[8%] desktop1:max-w-[5%] transition-colors duration-1000"
                    />
                    <nav>
                        <ul className="text-white-100 flex flex-row justify-between gap-[50px] max-w-[260px] mr-[70px]">
                            <li>
                                <Link to="/" className="text-white hover:underline">Início</Link>
                            </li>
                            <li>
                                <Link to="/loja" className="text-white hover:underline">Loja</Link>
                            </li>
                            <li>
                                <Link to="/Cosmeticos" className="text-white hover:underline">Cosmeticos</Link>
                            </li>
                            <li>
                                <Link to="/Diario" className="text-white hover:underline">Diário</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    );
}