import { useState } from "react";
import { Header } from "../../component/Header";
import { FinanceSection } from "../../component/Sections/FinanceSection";
import { FormSection } from "../../component/Sections/FormSection";
import { TotalValueSection } from "../../component/Sections/TotalValueSection";

export const HomePage = () => {

  const [listFinances, setListFinances]= useState([])

  const addFinance = ({description, price}) => {
    const id= crypto.randomUUID()
    const newFinance = {description, price, id}

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
        <TotalValueSection listFinance={listFinances} />
        <FinanceSection listFinances={listFinances} removeFinance={removeFinance}/>
      </main>
    </>
  );
};