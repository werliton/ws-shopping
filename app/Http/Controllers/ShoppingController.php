<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;

class ShoppingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menus = Menu::all();

        return Inertia::render('shopping', [
            'menus' => $menus
        ]);
    }
}
