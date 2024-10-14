
var carObj = [
    {carname: "hyundai", model: 2024, price: 2500000, seden: "suv"},
    {carname: "honda", model: 2022, price: 56000000, seden: "muv"},
    {carname: "mahindra", model: 2025, price: 22500000, seden: "xuv"},
]

// const carArr = ["hyundai", 2024, 2500000, "suv", true]

const insertElem = (
    <>
        <h2>Get All Car Details Below</h2>
        <table width={400} border={1} align="center">
            <thead>
                <tr>
                    <th>Car name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>seden</th>
                </tr>
            </thead>
            <tbody align="center">
                {
                    carObj.map((elem) => {
                        return<tr>
                            <td>{elem.carname}</td>
                            <td>{elem.model}</td>
                            <td>{elem.price}</td>
                            <td>{elem.seden}</td>
                        </tr>
                })
                }
            </tbody>
        </table>
    </>
);


ReactDOM.render(insertElem, document.getElementById("container"));
// createRoot(document.getElementById("container")).render(<insertElem/>);