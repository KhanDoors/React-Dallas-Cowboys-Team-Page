import React from "react";
import { Tag } from "../../ui/misc";
import Blocks from "./Blocks";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="silver">
          Games
        </Tag>

        <Blocks />

        <Tag
          bck="blue"
          size="22px"
          color="silver"
          link={true}
          linkto="/the_team"
        >
          See more Games
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
