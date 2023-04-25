<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewPaper extends Model
{
    use HasFactory;
    protected $table = "new";
    protected $timestamp = false;
}
