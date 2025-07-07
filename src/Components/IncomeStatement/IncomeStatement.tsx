import {CompanyIncomeStatement} from "../../company";

type Props = {};

const configs = [
  {
    label: "Date",
    render: (company: CompanyIncomeStatement) => company.date,
  },
  {
    label: "Revenue",
    render: (company: CompanyIncomeStatement) => company.revenue,
  },
  {
    label: "Cost of revenue",
    render: (company: CompanyIncomeStatement) => company.costOfRevenue,
  },
  {
    label: "Depreciation",
    render: (company: CompanyIncomeStatement) =>
      company.depreciationAndAmortization,
  },
  {
    label: "Operating income",
    render: (company: CompanyIncomeStatement) => company.operatingIncome,
  },
  {
    label: "Income before taxes",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
  },
  {
    label: "Net income",
    render: (company: CompanyIncomeStatement) => company.netIncome,
  },
  {
    label: "Net income ratio",
    render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
  },
  {
    label: "Earnings per share",
    render: (company: CompanyIncomeStatement) => company.eps,
  },
  {
    label: "Earnings per diluted",
    render: (company: CompanyIncomeStatement) => company.epsdiluted,
  },
  {
    label: "Gross profit ratio",
    render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
  },
  {
    label: "Operating income ratio",
    render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
  },
  {
    label: "Income before taxes ratio",
    render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
  },
];

const IncomeStatement = (props: Props) => {
  return (
    <div>IncomeStatement</div>
  );
};

export default IncomeStatement;
