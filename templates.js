function getFruits(responseAsJson) {
    return `
    <table>
        <tr>
            <th>Name:</th>
            <td> ${responseAsJson.name}</td>
        </tr>
        <tr>
            <td>ID:</td>
            <td>${responseAsJson.id}</td>
        </tr>
        <tr>
            <td>Proteine:</td>
            <td>${responseAsJson.nutritions['protein']}</td>
        </tr>
        <tr>
            <td>Kalorien:</td>
            <td>${responseAsJson.nutritions['calories']}</td>
        </tr>
    </table>
    `
}