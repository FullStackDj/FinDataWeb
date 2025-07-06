import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import {testIncomeStatementData} from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
]

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design Guide
      </h1>
      <RatioList data={testIncomeStatementData} config={tableConfig}/>
      <Table/>
      <h3>
        Table
      </h3>
    </>
  );
};

export default DesignGuide;
