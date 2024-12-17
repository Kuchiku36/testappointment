<?php

namespace App\Http\Controllers;

use App\Models\Submission;
use Illuminate\Http\Request;


class SubmissionController extends Controller
{
    public function store(Request $request)
    {
        // Validation des données
        $validated = $request->validate([
            'lastName' => 'required|string|max:255',
            'firstName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'customerType' => 'required|boolean',
            'formation' => 'required|string',
            'date' => 'required|date',
            'hour' => 'required|date_format:H:i',
        ]);

        // Sauvegarde dans la base de données
        Submission::create([
            'last_name' => $validated['lastName'],
            'first_name' => $validated['firstName'],
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'customer_type' => $validated['customerType'],
            'formation' => $validated['formation'],
            'date' => $validated['date'],
            'hour' => $validated['hour'],
        ]);

        return response()->json(['message' => 'Soumission réussie.'], 201);
    }
}
