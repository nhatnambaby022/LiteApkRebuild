<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewPaperController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TypeController;
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

Route::prefix("new")->group(function (){
    Route::get("/",[NewPaperController::class,"index"]);

});
Route::prefix("game")->group(function (){
    Route::get("/",[GameController::class,"index"]);
    
});

Route::prefix("type")->group(function(){
    Route::get("/",[TypeController::class,"index"]);
});
