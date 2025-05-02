import Card from "./_comp/Card";
import Sidebar from "./_comp/Sidebar";

function Listing() {
  return (
    <div className="pt-4">
      <h2>listing bish</h2>

      <div className="flex align-items-start gap-10">
        <div className="w-1/4">
          <Sidebar />
        </div>

        <div className="w-3/4">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Listing;
