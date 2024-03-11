import React from "react";
import LendoLogo from "../assets/Logo";
import WalletIcon from "../assets/Wallet";
import ArrowRight from "../assets/ArrowRight";
import InfoIcon from "../assets/InfoIcon";
import UserIcon from "../assets/UserIcon";
import Button from "../components/Button";

const LogoArea = () => {
  return <LendoLogo />;
};

const AccountInfo = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <div>
          <WalletIcon />
        </div>
        <div className="d-flex flex-column w-100">
          <span className="fw-bold fs-4">62,540 SAR</span>
          <div className="d-flex justify-content-between">
            <span className="lh-1" style={{ fontSize: "14px" }}>
              Account Balance
            </span>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className="d-flex mt-3 align-items-center">
        <Button className="btn-primary" text="Deposit" />
        <Button className="btn-outline-dark" text="Withdraw" />
      </div>
      <div className="d-flex mt-3">
        <div style={{ marginRight: "12px" }}>
          <InfoIcon />
        </div>
        <p className="account-info">
          To withdraw more than <strong>10,000 SAR</strong> you need to verify
          your banking account.
        </p>
      </div>
    </div>
  );
};

const AdditionalInfo = () => {
  return (
    <div className="d-flex flex-column text-center">
      <div>
        <UserIcon />
      </div>
      <h6 className="fw-bold mt-3">Why Should You Trust It?</h6>
      <p className="fs-6 mt-3 text-center">
        Because of this and that. Anyway investing is very good
      </p>
    </div>
  );
};

const SideArea = () => {
  return (
    <>
      <div className="pb-4 border-bottom">
        <LogoArea />
      </div>
      <div className="justify-content-center px-2 py-6 border-bottom">
        <AccountInfo />
      </div>
      <div className="justify-content-center px-2 py-6">
        <AdditionalInfo />
      </div>
    </>
  );
};

export default SideArea;
