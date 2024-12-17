<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{

    protected $fillable = [
        'last_name',
        'first_name',
        'email',
        'phone',
        'customer_type',
        'formation',
        'date',
        'hour',
    ];
}
