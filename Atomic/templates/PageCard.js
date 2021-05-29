import React from "react";
import MenuList from "../molecules/MenuList";
import AppBar from "../organisms/AppBar";
import CardVoucher from "../organisms/CardVoucher";
import NavBreadcrumbs from "../organisms/NavBreadcrumbs";
import Navigation from "../organisms/Navigation";

function PageCard(props) {
  return (
    <div>
      <div className="container">
        <div>
          <NavBreadcrumbs></NavBreadcrumbs>
        </div>
        <AppBar></AppBar>
        <div className="row mb-3 mt-4">
          <div className="col-md-4 col-lg-3">
            <MenuList></MenuList>
          </div>
          <div className="col-md-8 col-lg-9">
            <div className="bg-white rounded">
              <div className="mt-card-deal">
                <div className="d-flex flex-column align-items-center w-100 p-3">
                  <CardVoucher></CardVoucher>
                </div>
              </div>
              <Navigation></Navigation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageCard;
