<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $games = DB::table("game")
                    ->orderBy("id_game","asc")
                    ->join("type", "game.type", "=", "type.id_type")
                    ->join("tag", "game.tag_id", "=", "tag.id_tag")
                    ->join("publisher", "game.publisher_id", "=", "publisher.id_publisher")
                    ->select("game.*","game.isDelete as game_isDelete","type.*", "type.isDelete as type_isDelete","publisher.publisher_name","tag.isApp")
                    ->where("game.isDelete",0)
                    ->where("type.isDelete",0)
                    ->where("tag.isDelete",0)
                    ->get();
        return $games;
    }

    public function paginationApp()
    {
        $games = DB::table("game")
                    ->orderBy("id_game","asc")
                    ->join("type", "game.type", "=", "type.id_type")
                    ->join("tag", "game.tag_id", "=", "tag.id_tag")
                    ->join("publisher", "game.publisher_id", "=", "publisher.id_publisher")
                    ->select("game.*","game.isDelete as game_isDelete","type.*", "type.isDelete as type_isDelete","publisher.publisher_name","tag.isApp")
                    ->where("game.isDelete",0)
                    ->where("type.isDelete",0)
                    ->where("tag.isDelete",0)
                    ->where("isApp",1)
                    ->paginate(2);
        return $games;
    }

    public function paginationGame()
    {
        $games = DB::table("game")
                    ->orderBy("id_game","asc")
                    ->join("type", "game.type", "=", "type.id_type")
                    ->join("tag", "game.tag_id", "=", "tag.id_tag")
                    ->join("publisher", "game.publisher_id", "=", "publisher.id_publisher")
                    ->select("game.*","game.isDelete as game_isDelete","type.*", "type.isDelete as type_isDelete","publisher.publisher_name","tag.isApp")
                    ->where("game.isDelete",0)
                    ->where("type.isDelete",0)
                    ->where("tag.isDelete",0)
                    ->where("isApp",0)
                    ->paginate(2);
        return $games;
    }

    public function getGameOfType(Request $request)
    {
        $id = $request->id;
        $games = DB::table("game")
                    ->orderBy("id_game","asc")
                    ->join("type", "game.type", "=", "type.id_type")
                    ->join("tag", "game.tag_id", "=", "tag.id_tag")
                    ->join("publisher", "game.publisher_id", "=", "publisher.id_publisher")
                    ->select("game.*","game.isDelete as game_isDelete","type.*", "type.isDelete as type_isDelete","publisher.publisher_name","tag.isApp")
                    ->where("game.isDelete",0)
                    ->where("type.isDelete",0)
                    ->where("tag.isDelete",0)
                    ->where("game.type",$id)
                    ->paginate(3);
        return $games;
        
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */ 
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
