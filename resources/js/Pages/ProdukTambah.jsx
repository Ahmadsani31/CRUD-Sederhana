import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm } from '@inertiajs/react';

export default function ProdukTambah({ produk }) {
    // console.log(produk.data);
    const { data, setData, post, processing, errors, reset } = useForm({
        nama: '',
        stock: '',
        keterangan: '',
    });

    // console.log(data);


    const submit = (e) => {
        e.preventDefault();

        post(route('produk.store'), {
            onFinish: () => {
                // router.visit(route('produk'));
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
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
                            <form onSubmit={submit}>
                                <div className='mb-3'>
                                    <InputLabel htmlFor="nama" value="Nama" />

                                    <TextInput
                                        id="nama"
                                        name="nama"
                                        value={data.nama}
                                        className="mt-1 block w-full"
                                        autoComplete="nama"
                                        isFocused={true}
                                        onChange={(e) => setData('nama', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='mb-3'>
                                    <InputLabel htmlFor="stock" value="Stock" />

                                    <TextInput
                                        id="stock"
                                        type="number"
                                        name="stock"
                                        value={data.stock}
                                        className="mt-1 block w-full"
                                        autoComplete="stock"
                                        isFocused={true}
                                        onChange={(e) => setData('stock', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </div>
                                <div className='mb-3'>
                                    <InputLabel htmlFor="keterangan" value="keterangan" />

                                    <TextInput
                                        id="keterangan"
                                        name="keterangan"
                                        value={data.keterangan}
                                        className="mt-1 block w-full"
                                        autoComplete="keterangan"
                                        isFocused={true}
                                        onChange={(e) => setData('keterangan', e.target.value)}
                                        required
                                    />

                                    <InputError message={errors.keterangan} className="mt-2" />
                                </div>

                                <div className="mt-4 flex items-center justify-end">
                                    <PrimaryButton className="ms-4" disabled={processing}>
                                        Simpan
                                    </PrimaryButton>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
