import eba from "../assets/phone.jpg"

export default function TestPage() {
    // const items = ["HP Victus", "PS5 Controller", "iPhone 16", "PS5 Game", "HP Victus", "PS5 Controller", "iPhone 16", "PS5 Game"]
    const test = [eba]
    const items = [
        {id: 1, name: "HP Victus", image: eba},
        {id: 2, name: "PS5 Controller", image: eba},
        {id: 3, name: "iPhone 16", image: eba},
        {id: 4, name: "PS5 Game", image: eba},
    ]
    return (
        <div>
            <h1>hello world</h1>
            {/* <div>
                {items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div> */}
            <div>
                {test.map((item, index) => (
                    <img key={index} src={item}></img>
                ))}
            </div>
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <img src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}