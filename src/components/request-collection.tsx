import { useState } from 'react';
import { ArrowLeft, MapPin, Package, Calendar, Clock } from 'lucide-react';
import type { CollectionRequest } from '../App';

interface RequestCollectionProps {
  onBack: () => void;
  onSubmit: (request: Omit<CollectionRequest, 'id' | 'status'>) => void;
}

export function RequestCollection({ onBack, onSubmit }: RequestCollectionProps) {
  const [formData, setFormData] = useState({
    address: '',
    plasticType: 'PET',
    quantity: '0-5kg',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 pt-12 pb-8 rounded-b-[40px]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        <h1 className="text-3xl mb-2">Solicitar Coleta</h1>
        <p className="text-green-100">Preencha os dados para que um catador possa aceitar sua solicitação</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-6 mt-6 space-y-5">
        {/* Address */}
        <div>
          <label className="flex items-center gap-2 text-gray-900 mb-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span>Endereço de coleta</span>
          </label>
          <input
            type="text"
            required
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            placeholder="Rua, número e bairro"
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Plastic Type */}
        <div>
          <label className="flex items-center gap-2 text-gray-900 mb-2">
            <Package className="w-4 h-4 text-green-600" />
            <span>Tipo de plástico</span>
          </label>
          <select
            value={formData.plasticType}
            onChange={(e) => setFormData({ ...formData, plasticType: e.target.value })}
            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
          >
            <option value="PET">PET - Garrafas e embalagens</option>
            <option value="PEAD">PEAD - Embalagens de limpeza</option>
            <option value="PVC">PVC - Tubos e conexões</option>
            <option value="PEBD">PEBD - Sacolas e filmes</option>
            <option value="PP">PP - Potes e tampas</option>
            <option value="PS">PS - Copos descartáveis</option>
            <option value="Misto">Misto - Vários tipos</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="flex items-center gap-2 text-gray-900 mb-2">
            <Package className="w-4 h-4 text-green-600" />
            <span>Quantidade estimada</span>
          </label>
          <div className="grid grid-cols-3 gap-3">
            {['0-5kg', '5-10kg', '10-20kg', '20-50kg', '50kg+', 'Muito volume'].map((qty) => (
              <button
                key={qty}
                type="button"
                onClick={() => setFormData({ ...formData, quantity: qty })}
                className={`py-3 rounded-xl border-2 transition-all ${
                  formData.quantity === qty
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 text-gray-700 hover:border-green-300'
                }`}
              >
                {qty}
              </button>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="flex items-center gap-2 text-gray-900 mb-2">
              <Calendar className="w-4 h-4 text-green-600" />
              <span>Data</span>
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-gray-900 mb-2">
              <Clock className="w-4 h-4 text-green-600" />
              <span>Horário</span>
            </label>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
          <p className="text-sm text-green-800">
            ℹ️ Após enviar sua solicitação, catadores cadastrados na região receberão a notificação e poderão aceitar a coleta.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-98"
        >
          Enviar Solicitação
        </button>
      </form>
    </div>
  );
}
