import {JSX} from "react";
import Card from "../Card/Card";

interface Props {
}

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="test1" ticker="test2" price={100}/>
      <Card companyName="test3" ticker="test4" price={101}/>
      <Card companyName="test5" ticker="test6" price={102}/>
    </div>
  );
};

export default CardList;
