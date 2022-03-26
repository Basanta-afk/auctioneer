import React, { useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { AddAuction } from "./AddAuction";
import { AuctionCard } from "./AuctionCard";
import { ProgressBar } from "./ProgressBar";

export const AuctionBody = () => {
  const [auction, setAuction] = useState(null);
  const { currentUser, globalMsg } = useContext(AuthContext);
  const { docs } = useFirestore("auctions");

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <h1
        class="display-5 fw-bold pt-4 text-center"
        style={{ color: "#212529" }}
      >
        Ongoing Bids
      </h1>
      <div className="py-5">
        <div className="container">
          {auction && <ProgressBar auction={auction} setAuction={setAuction} />}

          {globalMsg && <Alert variant="info">{globalMsg}</Alert>}

          {currentUser && <AddAuction setAuction={setAuction} />}

          {docs && (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              {docs.map((doc) => {
                return <AuctionCard item={doc} key={doc.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
