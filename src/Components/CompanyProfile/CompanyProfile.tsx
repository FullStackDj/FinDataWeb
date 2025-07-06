import {CompanyKeyMetrics} from "../../company";

type Props = {};

const tableConfig = [
  {
    label: "Market cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "Company’s total value",
  },
  {
    label: "Current ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
    subTitle: "Covers short-term debts",
  },
  {
    label: "Return on equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
    subTitle: "Profit from equity",
  },
  {
    label: "Return on assets",
    render: (company: CompanyKeyMetrics) => company.returnOnTangibleAssetsTTM,
    subTitle: "Profit from assets",
  },
  {
    label: "Free cashflow per share",
    render: (company: CompanyKeyMetrics) => company.freeCashFlowPerShareTTM,
    subTitle: "Free cash per share",
  },
  {
    label: "Book value per share TTM",
    render: (company: CompanyKeyMetrics) => company.bookValuePerShareTTM,
    subTitle: "Net worth per share",
  },
  {
    label: "Dividend yield TTM",
    render: (company: CompanyKeyMetrics) => company.dividendYieldTTM,
    subTitle: "Dividends vs. stock price",
  },
  {
    label: "Capex per share TTM",
    render: (company: CompanyKeyMetrics) => company.capexPerShareTTM,
    subTitle: "Spending per share",
  },
  {
    label: "Graham number",
    render: (company: CompanyKeyMetrics) => company.grahamNumberTTM,
    subTitle: "Max fair stock price",
  },
  {
    label: "PE ratio",
    render: (company: CompanyKeyMetrics) => company.peRatioTTM,
    subTitle: "Price vs. earnings",
  },
];

const CompanyProfile = (props: Props) => {
  return (
    <div>CompanyProfile</div>
  );
};

export default CompanyProfile;
