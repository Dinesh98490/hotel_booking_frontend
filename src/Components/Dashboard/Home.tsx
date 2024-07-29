import OverView from "./HomeComponents/OverView"

function Home(){
    return(<>
        <OverView/>
        
        <div className="bg-card p-4 rounded mb-6">
          <h2 className="text-lg font-semibold mb-4">Rooms</h2>
          <div className="grid grid-cols-4 gap-4">
            
            <div className="bg-card p-4 rounded border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded">2 Deals</span>
                <img  alt="menu-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
              </div>
              <div className="mb-2">
                <span>Single sharing</span>
                <span className="block text-muted-foreground">2/30</span>
              </div>
              <div>
                <span className="text-primary text-xl font-bold">$ 568</span>
                <span className="text-muted-foreground">/day</span>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded">2 Deals</span>
                <img  alt="menu-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
              </div>
              <div className="mb-2">
                <span>Double sharing</span>
                <span className="block text-muted-foreground">2/35</span>
              </div>
              <div>
                <span className="text-primary text-xl font-bold">$ 1,068</span>
                <span className="text-muted-foreground">/day</span>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded">2 Deals</span>
                <img  alt="menu-icon" src="https://openui.fly.dev/openui/24x24.svg?text=⋮" />
              </div>
              <div className="mb-2">
                <span>Triple sharing</span>
                <span className="block text-muted-foreground">2/25</span>
              </div>
              <div>
                <span className="text-primary text-xl font-bold">$ 1,568</span>
                <span className="text-muted-foreground">/day</span>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded border border-border">
              <div className="flex justify-between items-center mb-2">
                <span className="bg-accent text-accent-foreground px-2 py-1 rounded">2 Deals</span>
               

              </div>
              <div className="mb-2">
                <span>VIP Suit</span>
                <span className="block text-muted-foreground">4/10</span>
              </div>
              <div>
                <span className="text-primary text-xl font-bold">$ 2,568</span>
                <span className="text-muted-foreground">/day</span>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="bg-card p-4 rounded">
          <h2 className="text-lg font-semibold mb-4">Room status</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Occupied rooms</span>
                <span>104</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Clean</span>
                <span>90</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Dirty</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>Inspected</span>
                <span>60</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Available rooms</span>
                <span>20</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Clean</span>
                <span>30</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Dirty</span>
                <span>19</span>
              </div>
              <div className="flex justify-between">
                <span>Inspected</span>
                <span>30</span>
              </div>
            </div>
          </div>
        </div>
    
    </>)
}
export default Home