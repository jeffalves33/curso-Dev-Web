<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/*o obj Route é quem cuida a parte de roteamente de toda aplicação.
 e nós definimos as rotas e os métodos atráves do método http:
 get
 post
 put
 patch
 delete
 options
*/
 
Route::get('/formulario', function(){
    return view('formulario');
});
