import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

type Props = {};

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>
        Design Guide
      </h1>
      <RatioList/>
      <Table/>
      <h3>
        Table
      </h3>
    </>
  );
};

export default DesignGuide;
