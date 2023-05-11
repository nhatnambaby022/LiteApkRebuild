<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewPaperController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\TypeController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\VersionController;
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

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix("new")->group(function (){
    Route::get("/",[NewPaperController::class,"index"]);
});
Route::prefix("game")->group(function (){
    Route::get("/",[GameController::class,"index"]);
    Route::get("/game",[GameController::class,"paginationGame"]);
    Route::get("/app",[GameController::class,"paginationApp"]);
    Route::get("/getGameOfType",[GameController::class,"getGameOfType"]);
    Route::get("/getGameOfTag",[GameController::class,"getGameOfTag"]);
});

Route::prefix("type")->group(function(){
    Route::get("/",[TypeController::class,"index"]);
});

Route::prefix("tag")->group(function(){
    Route::get("/",[TagController::class,"index"]);
});
Route::prefix("version")->group(function(){
    Route::get("/",[VersionController::class,"index"]);
});