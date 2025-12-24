import Card from "../Card/Card";

interface ServiceCardProps {
  id: string;
  serviceType: "hosting" | "vps";
  hardDisk: number;
  bandwidth: number;
  emailAccount?: number;
  addonDomain?: number;
  ram?: number;
  cpuCount?: number;
  onDelete?: (id: string) => void;
}

const ServiceCard = ({
  id,
  serviceType,
  hardDisk,
  bandwidth,
  emailAccount,
  addonDomain,
  ram,
  cpuCount,
  onDelete,
}: ServiceCardProps) => {
  const isHosting = serviceType === "hosting";

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold ${
              isHosting ? "bg-blue-500" : "bg-purple-500"
            }`}
          >
            {isHosting ? "H" : "V"}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {isHosting ? "Hosting" : "VPS"}
            </h3>
            <p className="text-sm text-gray-500">Service</p>
          </div>
        </div>
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">Hard Disk</span>
            <p className="font-medium text-gray-900">{hardDisk} GB</p>
          </div>
          <div>
            <span className="text-gray-500">Bandwidth</span>
            <p className="font-medium text-gray-900">{bandwidth} GB</p>
          </div>
          {isHosting ? (
            <>
              <div>
                <span className="text-gray-500">Email Accounts</span>
                <p className="font-medium text-gray-900">{emailAccount}</p>
              </div>
              <div>
                <span className="text-gray-500">Addon Domains</span>
                <p className="font-medium text-gray-900">{addonDomain}</p>
              </div>
            </>
          ) : (
            <>
              <div>
                <span className="text-gray-500">RAM</span>
                <p className="font-medium text-gray-900">{ram} GB</p>
              </div>
              <div>
                <span className="text-gray-500">CPU Cores</span>
                <p className="font-medium text-gray-900">{cpuCount}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
