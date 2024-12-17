// resources/js/App.jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        customerType: false, // false pour particulier, true pour professionnel
        formation: '',
        date: '',
        hour: '',
    });

    // Gestion des changements de formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation basique des champs requis
        if (!formData.lastName || !formData.firstName || !formData.email || !formData.phone) {
            alert('Veuillez remplir tous les champs requis.');
            return;
        }

        try {
            // Envoi des données vers l'API Laravel
            await axios.post('/api/submissions', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            alert('Soumission réussie');
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la soumission');
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Nom :</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Prénom :</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email :</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Téléphone :</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input
                            type="checkbox"
                            name="customerType"
                            checked={formData.customerType}
                            onChange={handleChange}
                        />
                        Professionnel ?
                    </label>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Formation :</label>
                    <select
                        name="formation"
                        value={formData.formation}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    >
                        <option value="">Sélectionnez une formation</option>
                        <option value="ia starter">IA Starter</option>
                        <option value="ia performer">IA Performer</option>
                        <option value="ia master">IA Master</option>
                    </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Date :</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Heure :</label>
                    <input
                        type="time"
                        name="hour"
                        value={formData.hour}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', margin: '5px 0' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Envoyer
                </button>
            </form>
        </div>
    );
}

export default App;
