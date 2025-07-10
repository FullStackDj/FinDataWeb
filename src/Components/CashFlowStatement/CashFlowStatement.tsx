import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {getCashFlowStatement} from "../../api";
import {CompanyCashFlow} from "../../company";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash at ed of period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "Capital expenditure",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance of stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free cash flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];

const CashFlowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashflowData, setCashflow] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashFlowStatement(ticker!);
      setCashflow(result!.data);
    };
    fetchCashflow();
  }, []);
  return <>
    {cashflowData ? (
      <Table config={config} data={cashflowData}/>
    ) : (
      <Spinner/>
    )}
  </>;
};

export default CashFlowStatement;
