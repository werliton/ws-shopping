import { Menu } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import clsx from 'clsx';

interface DropMenu {
    children: React.ReactNode;
    domain?: string;
}

const DropMenu = ({ children, domain }: DropMenu) => {
    return (
        <div className={domain}>
            {/* icon */}
            {children}
        </div>
    );
};

DropMenu.Title = ({ children }: DropMenu) => {
    return <p>{children}</p>;
};
DropMenu.SubTitle = DropMenu.Title;

const Shopping = () => {
    const { menus } = usePage<{ menus: Menu[] }>().props;

    return (
        <>
            <Head title="Shopping" />
            <header className="h-[250px] w-full bg-white text-black">
                <div id="banner" className="flex w-full bg-gray-200 px-2">
                    Anuncios no topo
                </div>
                <div id="miniheader" className="flex w-full justify-between border border-gray-300 bg-gray-200 px-2">
                    <p>acessibilidade e outros items</p>
                    <p>Favoritos</p>
                </div>

                <div id="search-bar" className="flex gap-8 px-7 py-5">
                    {/* imagem logo */}
                    <p className="text-3xl text-purple-900">Logo marca aqui</p>

                    <div className="mx-3 flex max-w-[500px] grow items-center justify-center rounded-md bg-gray-200 px-4">
                        <input type="search" name="search" className="w-full focus:outline-0" id="" placeholder="O que você procura hoje?" />
                        <p>Icon</p>
                    </div>

                    <DropMenu domain="location">
                        <DropMenu.Title>Informe sua</DropMenu.Title>
                        <DropMenu.SubTitle>Localização</DropMenu.SubTitle>
                    </DropMenu>

                    <DropMenu domain="user">
                        <DropMenu.Title>Olá, Entrar na</DropMenu.Title>
                        <DropMenu.SubTitle>Minha Conta</DropMenu.SubTitle>
                    </DropMenu>

                    <DropMenu domain="sacola">
                        <DropMenu.Title>Sua</DropMenu.Title>
                        <DropMenu.SubTitle>Sacola</DropMenu.SubTitle>
                    </DropMenu>
                </div>

                <nav className="p-8">
                    <ul className="no-scrolbar flex h-[35px] w-full justify-start gap-8 overflow-x-auto">
                        {menus.map((menu) => (
                            <li
                                key={menu.id}
                                className={clsx(
                                    'cursor-pointer border-b-pink-950 hover:border-b',
                                    menu.active ? 'flex items-center rounded-md bg-amber-600 px-2 text-white' : '',
                                )}
                            >
                                {menu.name}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Shopping;
