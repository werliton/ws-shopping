import { Skeleton } from '@/components/ui/skeleton';
import { User } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const CustomSkeleton = () => {
    return Array(5)
        .keys()
        .map((item) => <Skeleton key={item} className="size-4 h-5 w-[300px]" data-sidebar="menu-skeleton-icon" />);
};

const Arrocha = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { users } = usePage<{ users: User[] }>().props;

    useEffect(() => {
        const delay = async () => {
            await new Promise((resolve) => setTimeout(resolve, 300));
            setIsLoading(false);
        };

        delay();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <p>Testando o primeiro component com React e Laravel</p>
            <p className="border-b-2 border-b-white text-white opacity-85 hover:cursor-pointer hover:opacity-100">Boticário - criando belesuras</p>

            <h1>Lista de usuários</h1>

            <p>{users?.length === 0 && 'Nenhum usuário encontrado.'}</p>

            {isLoading && <CustomSkeleton />}

            {!isLoading && (
                <ul className="flex w-1/2 flex-wrap gap-2 rounded-lg bg-white p-4 text-center">
                    {users?.map((user) => (
                        <li key={user.id} className="bg-amber-100 p-1 text-black hover:cursor-pointer hover:font-bold">
                            {user.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Arrocha;
