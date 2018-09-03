import React, { Component } from "react";
import Stars from "../../../Resources/images/star.jpg";
import { Tag } from "../../ui/misc";

class MeetPlayers extends Component {
  state = {};

  render() {
    return (
      <div
        className="home_meetplayers"
        style={{ background: `#ffffff url(${Stars})` }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">card</div>
            <div className="home_text_wrapper">
              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="silver"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  Meet
                </Tag>
              </div>

              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="silver"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  The
                </Tag>
              </div>

              <div>
                <Tag
                  bck="#0e1731"
                  size="100px"
                  color="silver"
                  add={{
                    display: "inline-block",
                    marginBottom: "20px"
                  }}
                >
                  Players
                </Tag>
              </div>
              <div>
                <Tag
                  bck="blue"
                  size="27px"
                  color="silver"
                  link={true}
                  linkto="/the_team"
                  add={{
                    display: "inline-block",
                    marginBottom: "27px",
                    border: "1px solid #0e1731"
                  }}
                >
                  The Full Roster
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetPlayers;
