import {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {getKeyMetrics} from "../../api";
import {CompanyKeyMetrics} from "../../company";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";
import {formatLargeNonMonetaryNumber, formatRatio} from "../../Helpers/NumberFormating";

type Props = {};

const tableConfig = [
  {
    label: "Market cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCapTTM),
    subTitle: "Company’s total share value",
  },
  {
    label: "Current ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle: "Covers short-term debt",
  },
  {
    label: "Return on equity",
    render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
    subTitle: "Profit from equity",
  },
  {
    label: "Return on assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle: "Profit from assets",
  },
  {
    label: "Free cashflow per share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowPerShareTTM),
    subTitle: "Cash left per share",
  },
  {
    label: "Book value per share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.bookValuePerShareTTM),
    subTitle: "Net worth per share",
  },
  {
    label: "Dividend yield",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.dividendYieldTTM),
    subTitle: "Payout vs stock price",
  },
  {
    label: "Capex per share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexPerShareTTM),
    subTitle: "Spending on assets",
  },
  {
    label: "Graham number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle: "Fair price estimate",
  },
  {
    label: "PE ratio",
    render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
    subTitle: "Price vs earnings",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyMetrics();
  }, []);
  return <>
    {companyData ? (
      <>
        <RatioList data={companyData} config={tableConfig}/>
      </>
    ) : (
      <Spinner/>
    )}
  </>
    ;
};

export default CompanyProfile;