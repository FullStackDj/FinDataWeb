import Table from "../../Components/Table/Table";
import {testIncomeStatementData} from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinData Design Page</h1>
      <h2>This is FinData's design page.</h2>
      <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  );
};

export default DesignPage;
