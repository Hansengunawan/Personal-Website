import { FaBolt } from "react-icons/fa";
import { HiFolder } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";

export default function Highlights() {
  return (
    <div className="mt-2">
      <div className="
        flex flex-col md:flex-row
        items-center justify-between
        gap-4 md:gap-0
        bg-white/70 backdrop-blur-lg
        rounded-2xl shadow-md
        px-1 py-3
      ">
        
        {/* ITEM 1 */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <FaBolt className="text-yellow-400 text-2xl" />
          <div>
            <p className="font-bold text-lg">3+</p>
            <p className="text-sm text-gray-600">Tahun Pengalaman Bekerja</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-300"></div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <HiFolder className="text-purple-500 text-2xl" />
          <div>
            <p className="font-bold text-lg">10+</p>
            <p className="text-sm text-gray-600">Proyek Diselesaikan</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-10 bg-gray-300"></div>

        {/* ITEM 3 */}
        <div className="flex items-center gap-3 flex-1 justify-center">
          <FaDatabase className="text-orange-400 text-2xl" />
          <div>
            <p className="font-bold text-lg">1000+</p>
            <p className="text-sm text-gray-600">Data Diproses</p>
          </div>
        </div>

      </div>
    </div>
  );
}