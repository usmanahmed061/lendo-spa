import React from "react";
import Button from "../components/Button";

const Statistics = () => {
  return (
    <div className="card rounded-4">
      <div className="card-body px-5 py-4">
        <div className="d-flex">
          <div
            style={{
              width: "182px",
              height: "168px",
              border: "1px solid #000",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="d-flex flex-column w-100 h-100 p-4"
              style={{
                background:
                  "radial-gradient(1191.32% 115.38% at 96.39% 8.75%, #2DA5FE 0%, #218AF5 100%)",
                borderRadius: "16px",
                color: "var(--White, #fff)",
              }}
            >
              <span className="fs-5">Conservative</span>
              <span className="fs-3 mt-2">10-14%</span>
              <span className="lh-1">Interest Rate</span>
            </div>
          </div>
          <div className="d-flex flex-column ms-6 w-100 bg-red">
            <div className="row py-3">
              <div className="col-3">
                <div className="d-flex flex-column">
                  <span
                    style={{ color: "var(--Green, #80CB17)" }}
                    className="fs-6 fw-bold"
                  >
                    Active
                  </span>
                  <span className="statistic-info">Status</span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <span className="fs-6 fw-bold">1500 SAR</span>
                  <span className="statistic-info">Max. Investement</span>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex flex-column">
                  <span className="fs-6 fw-bold">26</span>
                  <span className="statistic-info">Loans Funded</span>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <span className="statistic-info">
                  * Strategy started at 20th March 2021
                </span>
              </div>
              <div className="col-6">
                <Button className="btn-danger" text="Stop" />
                <Button className="btn-outline-dark" text="Change Settings" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Charts = () => {
  return (
    <div className="row">
      <div className="col-6">
        <div className="card">
          <div className="card-body">Chart 1</div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-body">Chart 2</div>
        </div>
      </div>
    </div>
  );
};

const FAQs = () => {
  return (
    <>
      <h4>You Might Want to Know</h4>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Why should I trust this tool?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What risks are related to investments?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is the Auto-Investment?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Content = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Auto Investment</h2>
        <div class="form-check form-switch">
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Active
          </label>
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked
          />
        </div>
      </div>
      <div className="row">
        <Statistics />
      </div>
      <div className="row mt-3">
        <Charts />
      </div>
      <div className="row mt-6">
        <FAQs />
      </div>
    </div>
  );
};

export default Content;
