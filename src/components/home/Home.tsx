import Grid from "@cloudscape-design/components/grid"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import AuctionListings from "./AuctionListings"
import { Button } from "@cloudscape-design/components"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <div>
        <Grid
          gridDefinition={[
            { colspan: { s: 10, xxs: 12 } },
            { colspan: { s: 2, xxs: 12 } },
          ]}
        >
          <div style={{ margin: "0 5rem" }}>
            <AuctionListings />
          </div>
          <div>
            <Link to={"/create-listing"}>
              <Button variant="link">Create Listing</Button>
            </Link>
          </div>
        </Grid>
      </div>
    </>
  )
}

export default Home
