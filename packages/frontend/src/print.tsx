import { FaPrint } from "react-icons/fa6";

function Print() {
    function handlePrint() {
        window.print();
    }

    return (
        <div>
        <button onClick={handlePrint}>
        <FaPrint className="text-xl text-slate-500 hover:text-slate-700" />
        </button>
        </div>
    );
}

export default Print;
