export default function Page() {
  return (
    <div>
      <button popoverTarget="mypopover" className="p-4 bg-blue-50">
        Toggle the popover
      </button>
      <div id="mypopover" popover="manual" className="bg-yellow-200">
        Popover content
      </div>
    </div>
  );
}
