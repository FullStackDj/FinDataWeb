import {useParams} from "react-router-dom";

interface Props {
}

const CompanyPage = (props: Props) => {
  const {ticker} = useParams();

  return (
    <div>Company Page for: {ticker}</div>
  );
};

export default CompanyPage;
