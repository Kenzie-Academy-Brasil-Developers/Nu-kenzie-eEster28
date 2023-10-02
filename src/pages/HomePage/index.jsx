import { useState } from "react";
import { Header } from "../../component/Header";
import { FinanceSection } from "../../component/Sections/FinanceSection";
import { FormSection } from "../../component/Sections/FormSection";
import { TotalValueSection } from "../../component/Sections/TotalValueSection";


export const HomePage = () => {

  const [listFinances, setListFinances] = useState([])

  const addFinance = ({ description, price, typeValue }) => {
    const id = crypto.randomUUID()
    const newFinance = { description, price, typeValue, id }

    setListFinances([...listFinances, newFinance])
    console.log(listFinances)
  }

  const removeFinance = (id) => {
    const listFiltered = listFinances.filter((finance) => {
      if (finance.id !== id) {
        return finance
      }
    })
    setListFinances(listFiltered)
  }


  return (
    <>
      <Header />
      <main>
        <div>
          <FormSection addFinance={addFinance} />
          {listFinances.length > 0 && <TotalValueSection listFinance={listFinances} />}
        </div>
        <FinanceSection listFinances={listFinances} removeFinance={removeFinance} />
      </main>
    </>
  );
};