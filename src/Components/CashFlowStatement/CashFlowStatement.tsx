import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {getCashFlowStatement} from "../../api";
import {CompanyCashFlow} from "../../company";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";
import {formatLargeMonetaryNumber} from "../../Helpers/NumberFormating";

type Props = {};

const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.operatingCashFlow),
  },
  {
    label: "Investing cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
  },
  {
    label: "Financing cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(
        company.netCashUsedProvidedByFinancingActivities
      ),
  },
  {
    label: "Cash at end of period",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
  },
  {
    label: "Capital Expenditure",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.capitalExpenditure),
  },
  {
    label: "Issuance of stock",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.commonStockIssued),
  },
  {
    label: "Free cashflow",
    render: (company: CompanyCashFlow) =>
      formatLargeMonetaryNumber(company.freeCashFlow),
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
