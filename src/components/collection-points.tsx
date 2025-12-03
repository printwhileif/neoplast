import { ArrowLeft, MapPin, Navigation, Clock, Phone, Star } from 'lucide-react';

interface CollectionPointsProps {
  onBack: () => void;
}

const mockPoints = [
  {
    id: '1',
    name: 'EcoPonto Centro',
    address: 'Av. Principal, 456 - Centro',
    distance: '1.2 km',
    hours: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
    phone: '(xx)xxxxxxxxx',
    rating: 4.8,
    types: ['PET', 'PEAD', 'PP']
  },
  {
    id: '2',
    name: 'Cooperativa Verde Vida',
    address: 'Rua da Esperança, 789 - Jardim das Flores',
    distance: '2.5 km',
    hours: 'Seg-Sex: 7h-17h',
    phone: '(xx)xxxxxxxxx',
    rating: 4.9,
    types: ['Todos os tipos']
  },
  {
    id: '3',
    name: 'Ponto de Coleta Municipal',
    address: 'Praça da Sustentabilidade, 100',
    distance: '3.1 km',
    hours: 'Ter-Dom: 9h-16h',
    phone: '(xx)xxxxxxxxx',
    rating: 4.5,
    types: ['PET', 'PEBD', 'PS', 'Misto']
  },
  {
    id: '4',
    name: 'Recicla+ Parceiro',
    address: 'Rua Ambiental, 234 - Vila Nova',
    distance: '4.0 km',
    hours: 'Seg-Sáb: 8h-19h',
    phone: '(xx)xxxxxxxxx',
    rating: 4.7,
    types: ['PET', 'PEAD', 'PVC', 'PP']
  }
];

export function CollectionPoints({ onBack }: CollectionPointsProps) {
  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 pt-12 pb-8 rounded-b-[40px]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        <h1 className="text-3xl mb-2">Pontos de Coleta</h1>
        <p className="text-blue-100">Encontre o local mais próximo para entregar seu plástico</p>
      </div>

      {/* Search/Filter Bar */}
      <div className="px-6 mt-6 mb-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-3">
          <Navigation className="w-5 h-5 text-blue-600" />
          <div className="flex-1">
            <p className="text-sm text-gray-600">Ordenado por distância</p>
            <p className="text-xs text-gray-500">São Paulo, SP</p>
          </div>
          <button className="text-blue-600 text-sm">Filtrar</button>
        </div>
      </div>

      {/* Points List */}
      <div className="px-6 space-y-4">
        {mockPoints.map((point) => (
          <div
            key={point.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg text-gray-900 mb-1">{point.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{point.address}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-gray-900">{point.rating}</span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700">{point.distance} de distância</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-gray-700">{point.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{point.phone}</span>
              </div>
            </div>

            {/* Accepted Types */}
            <div className="mb-4">
              <p className="text-xs text-gray-600 mb-2">Tipos aceitos:</p>
              <div className="flex flex-wrap gap-2">
                {point.types.map((type) => (
                  <span
                    key={type}
                    className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Ver no Mapa
              </button>
              <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                Ligar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="px-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <p className="text-sm text-blue-800">
            💡 Dica: Entre em contato antes de ir para confirmar horários e tipos de plástico aceitos.
          </p>
        </div>
      </div>
    </div>
  );
}
