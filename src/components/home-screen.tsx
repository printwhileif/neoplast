import { Recycle, MapPin, Package, Leaf } from 'lucide-react';
import type { Screen } from '../App';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
  requestCount: number;
}

export function HomeScreen({ onNavigate, requestCount }: HomeScreenProps) {
  return (
    <div className="min-h-screen pb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 pt-12 pb-24 rounded-b-[40px]">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
            <Recycle className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl">Lico App</h1>
            <p className="text-green-100 text-sm">Reciclagem inteligente</p>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
          <div className="flex items-center gap-3">
            <Leaf className="w-6 h-6 text-green-200" />
            <div>
              <p className="text-sm text-green-100">Seu impacto ambiental</p>
              <p className="text-2xl">34kg de plástico reciclado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="px-6 -mt-16 space-y-4">
        <button
          onClick={() => onNavigate('request')}
          className="w-full bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all active:scale-98"
        >
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-2xl">
            <Package className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg text-gray-900">Solicitar Coleta</h3>
            <p className="text-sm text-gray-600">Um catador irá até você</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </button>

        <button
          onClick={() => onNavigate('points')}
          className="w-full bg-white rounded-3xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all active:scale-98"
        >
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl">
            <MapPin className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-lg text-gray-900">Pontos de Coleta</h3>
            <p className="text-sm text-gray-600">Entregue pessoalmente</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
        </button>

        {requestCount > 0 && (
          <button
            onClick={() => onNavigate('active-requests')}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-3xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-all active:scale-98"
          >
            <div className="bg-white/20 p-4 rounded-2xl">
              <Recycle className="w-7 h-7" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg">Minhas Solicitações</h3>
              <p className="text-sm text-green-100">{requestCount} {requestCount === 1 ? 'pedido ativo' : 'pedidos ativos'}</p>
            </div>
            <div className="bg-white text-green-600 px-3 py-1 rounded-full text-sm">
              {requestCount}
            </div>
          </button>
        )}
      </div>

      {/* Info Cards */}
      <div className="px-6 mt-8 space-y-4">
        <h2 className="text-lg text-gray-900">Como funciona</h2>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex gap-3">
            <div className="bg-green-100 p-2 rounded-xl h-fit">
              <Package className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Conexão direta</h3>
              <p className="text-sm text-gray-600">Catadores cadastrados recebem seu pedido e podem aceitar a coleta</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex gap-3">
            <div className="bg-blue-100 p-2 rounded-xl h-fit">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Pontos próximos</h3>
              <p className="text-sm text-gray-600">Encontre pontos oficiais e parceiros para entregar seus resíduos</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex gap-3">
            <div className="bg-emerald-100 p-2 rounded-xl h-fit">
              <Leaf className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-1">Impacto positivo</h3>
              <p className="text-sm text-gray-600">Promova a economia circular e ajude o meio ambiente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
