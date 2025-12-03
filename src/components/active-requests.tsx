import { ArrowLeft, Package, MapPin, Calendar, Clock, User, CheckCircle2, Loader2 } from 'lucide-react';
import type { CollectionRequest } from '../App';

interface ActiveRequestsProps {
  onBack: () => void;
  requests: CollectionRequest[];
}

export function ActiveRequests({ onBack, requests }: ActiveRequestsProps) {
  const getStatusInfo = (status: CollectionRequest['status']) => {
    switch (status) {
      case 'pending':
        return {
          icon: <Loader2 className="w-5 h-5 animate-spin" />,
          text: 'Aguardando catador',
          color: 'text-yellow-700',
          bg: 'bg-yellow-50',
          border: 'border-yellow-200'
        };
      case 'accepted':
        return {
          icon: <CheckCircle2 className="w-5 h-5" />,
          text: 'Aceito',
          color: 'text-green-700',
          bg: 'bg-green-50',
          border: 'border-green-200'
        };
      case 'completed':
        return {
          icon: <CheckCircle2 className="w-5 h-5" />,
          text: 'Concluído',
          color: 'text-gray-700',
          bg: 'bg-gray-50',
          border: 'border-gray-200'
        };
    }
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
        <h1 className="text-3xl mb-2">Minhas Solicitações</h1>
        <p className="text-green-100">Acompanhe o status das suas coletas</p>
      </div>

      {/* Requests List */}
      <div className="px-6 mt-6 space-y-4">
        {requests.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-600">Você ainda não tem solicitações</p>
          </div>
        ) : (
          requests.map((request) => {
            const statusInfo = getStatusInfo(request.status);
            return (
              <div
                key={request.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
              >
                {/* Status Badge */}
                <div className={`flex items-center gap-2 ${statusInfo.bg} ${statusInfo.border} border px-3 py-2 rounded-xl mb-4 w-fit`}>
                  <span className={statusInfo.color}>{statusInfo.icon}</span>
                  <span className={`text-sm ${statusInfo.color}`}>{statusInfo.text}</span>
                </div>

                {/* Request Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gray-600 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 mb-0.5">Endereço</p>
                      <p className="text-gray-900">{request.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">Tipo</p>
                        <p className="text-sm text-gray-900">{request.plasticType}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Package className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">Quantidade</p>
                        <p className="text-sm text-gray-900">{request.quantity}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">Data</p>
                        <p className="text-sm text-gray-900">
                          {new Date(request.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-600 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs text-gray-600 mb-0.5">Horário</p>
                        <p className="text-sm text-gray-900">{request.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collector Info */}
                {request.status === 'accepted' && request.collector && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-600 text-white p-2 rounded-full">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">Catador responsável</p>
                        <p className="text-gray-900">{request.collector}</p>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Contatar
                      </button>
                    </div>
                  </div>
                )}

                {request.status === 'pending' && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-800">
                      ⏳ Sua solicitação foi enviada para catadores próximos. Aguarde a confirmação.
                    </p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
