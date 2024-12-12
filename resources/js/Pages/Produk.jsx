import SecondaryButton from '@/Components/SecondaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Produk({ produk }) {
    // console.log(produk.data);

    const deleteData = (id) => {

        router.delete(route("produk.delete", { id: id }), {
            preserveScroll: true,
            onSuccess: (page) => {
                // console.log(page);

            },
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Produk
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className='p-5'>

                                <Link href={route('produk.tambah')} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Tambah</Link>

                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-2">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Nama
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Keterangan
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        produk.data.length ? (produk.data.map((item, i) => (
                                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={i}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.nama}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.stock}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.keterangan}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                                        href={route('produk.edit', { 'id': item.id })} >
                                                        Edit
                                                    </Link>
                                                    <SecondaryButton className="ms-4 red" onClick={() => {
                                                        deleteData(item.id);
                                                    }} >
                                                        Delete
                                                    </SecondaryButton>
                                                </td>
                                            </tr>
                                        ))
                                        ) : (
                                            <tr>
                                                <td className="px-6 py-4">
                                                    Tidak ada data
                                                </td>
                                            </tr>
                                        )
                                    }



                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
