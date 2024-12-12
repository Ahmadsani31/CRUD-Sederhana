<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProdukRequest;
use App\Models\Produk;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPSTORM_META\type;

class ProdukController extends Controller
{
    public function index()
    {
        $produk = Produk::paginate(5);

        return Inertia::render('Produk',compact('produk'));
    }

    public function create()
    {
        return Inertia::render('ProdukTambah');
    }

    public function edit($id)
    {
        try {
            $produk = Produk::findOrFail($id);
            return Inertia::render('ProdukEdit',compact('produk'));
        } catch (\Exception $err) {
            return redirect()->back()->with(['param' => false, 'message' => $err->getMessage()]);
        }
    }

    public function store(ProdukRequest $request)
    {
        Produk::create($request->all());
        return redirect()->route('produk');
        // return Inertia::render('ProdukCreate');
    }

    public function update(ProdukRequest $request,$id)
    {
        try {
           $produk = Produk::findOrFail($id);
           $produk->update($request->all());
           return redirect()->route('produk');
        } catch (\Throwable $err) {
            return redirect()->back()->with(['param' => false, 'message' => $err->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $data = Produk::findOrFail($id);
            $data->delete();
            return redirect()->back()->with(['param' => true, 'message' => 'Data Berhasil Delete']);
        } catch (\Exception $err) {
            return redirect()->back()->with(['param' => false, 'message' => $err->getMessage()]);
        }
    }
}
