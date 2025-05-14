<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class ArrochaController extends Controller
{
    //
    public function index()
    {
        // $users = User::all();

        $users = Cache::remember('users.all', 60, function () {
            return User::all();
        });
        return $users;
        // dd($users);

        // return Inertia::render('arrocha', [
        //     'users' => $users
        // ]);
    }
}
