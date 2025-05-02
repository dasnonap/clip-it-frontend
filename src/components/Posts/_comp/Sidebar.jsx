function Sidebar({}) {
  return (
    <div className="grid gap-6">
      <div className="pb-3 border-b">
        <a href="ass" className="block w-100">
          Assetto Corsa
        </a>
      </div>

      <div className="pb-3 border-b">
        <a href="csgo" className="block w-100">
          Cs go
        </a>
      </div>

      <div className="pb-3 border-b">
        <a href="cringe" className="block w-100">
          Cringe
        </a>
      </div>

      <div className="pb-3 border-b">
        <a href="funny" className="block w-100">
          Funny
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
