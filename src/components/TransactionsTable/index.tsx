import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data =>console.log(response.data))
    },[]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>website</td>
            <td className="deposit">R$10000</td>
            <td>Deselvolvimento</td>
            <td>20/02/2022</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> -R$1200</td>
            <td>Casa</td>
            <td>25/02/2022</td>
          </tr>

         
        </tbody>
      </table>
    </Container>
  );
}
