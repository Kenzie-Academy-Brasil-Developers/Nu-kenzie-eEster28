import { useState } from "react";
import { Header } from "../../component/Header";
import { FinanceSection } from "../../component/Sections/FinanceSection";
import { FormSection } from "../../component/Sections/FormSection";


export const HomePage = () => {

  const [listFinances, setListFinances]= useState([])

  const addFinance = ({description, price, typeValue}) => {
    const id= crypto.randomUUID()
    const newFinance = {description, price, typeValue ,id}

    setListFinances([...listFinances, newFinance])
    console.log(listFinances)
  }

  const removeFinance = (id) => {
    const listFiltered = listFinances.filter((finance) => {
      if(finance.id !== id){
        return finance
      }
    })
    setListFinances(listFiltered)
  }

  
  return (
    <>
      <Header />
      <main>
        <FormSection addFinance={addFinance} />
        <FinanceSection listFinances={listFinances} removeFinance={removeFinance}/>
      </main>
    </>
  );
};