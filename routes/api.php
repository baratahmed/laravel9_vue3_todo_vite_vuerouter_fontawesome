<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('register',[AuthController::class,'register']);
// Route::post('login',[AuthController::class,'login']);
Route::controller(AuthController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
});

Route::get('items',[ItemController::class,'index']);
Route::prefix('/item')->group(function(){
    Route::post('/store',[ItemController::class,'store']);
    Route::put('/{id}',[ItemController::class,'update']);
    Route::delete('/{id}',[ItemController::class,'destroy']);
});