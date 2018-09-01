        function fillChart(svg) {
          //
          // *******************************************************************
          //
          // Set the number of decimals behing the point, either 0 or 1:
          //   E.g. setting it to 1 will round to 12.3%
          //        setting it to 0 will round to 12%
          //
          var no_of_decimals = 0;
          //
          // Rearrange the parties according to size, and fill in the percentage:
          //
          fillParty(svg, no_of_decimals, "1", "CDU/CSU", 31.0);
          fillParty(svg, no_of_decimals, "2", "SPD", 17.0);
          fillParty(svg, no_of_decimals, "3", "AfD", 15.0);
          fillParty(svg, no_of_decimals, "4", "GRÜNE", 14.0);
          fillParty(svg, no_of_decimals, "5", "LINKE", 10.0);
          fillParty(svg, no_of_decimals, "6", "FDP", 8.0);
          fillParty(svg, no_of_decimals, "7", "CDU", 25.0);
          fillParty(svg, no_of_decimals, "8", "CSU", 6.0);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["AfD"] = "EFDD";
          ep_groups["CDU"] = "EPP";
          ep_groups["CDU/CSU"] = "EPP";
          ep_groups["CSU"] = "EPP";
          ep_groups["FDP"] = "ALDE";
          ep_groups["GRÜNE"] = "Greens/EFA";
          ep_groups["LINKE"] = "GUE/NGL";
          ep_groups["SPD"] = "S&D";
          var last_results = {};
          last_results["AfD"] = 12.6;
          last_results["CDU"] = 26.8;
          last_results["CDU/CSU"] = 33.0;
          last_results["CSU"] = 6.2;
          last_results["FDP"] = 10.7;
          last_results["GRÜNE"] = 8.9;
          last_results["LINKE"] = 9.2;
          last_results["SPD"] = 20.5;
          var colors = getEpGroupColors();
          svg.getElementById("party-name-" + index).firstChild.nodeValue = name;
          svg.getElementById("ep-group-name-" + index).firstChild.nodeValue = ep_groups[name];
          svg.getElementById("party-bar-" + index).setAttribute("height", result * 20);
          svg.getElementById("party-bar-" + index).setAttribute("y", 830 - result * 20);
          svg.getElementById("party-bar-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("party-bar-last-" + index).setAttribute("height", last_results[name] * 20);
          svg.getElementById("party-bar-last-" + index).setAttribute("y", 830 - last_results[name] * 20);
          svg.getElementById("party-bar-last-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("percentage-" + index).firstChild.nodeValue = result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-" + index).setAttribute("y", 815 - result * 20);
          svg.getElementById("percentage-last-" + index).firstChild.nodeValue = last_results[name].toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-last-" + index).setAttribute("y", 815 - last_results[name] * 20);
          if (last_results[name] < result) {
            var last_result_x = parseInt(svg.getElementById("percentage-last-" + index).getAttribute("x"));
            svg.getElementById("percentage-last-" + index).setAttribute("x", last_result_x + 20);
          }
        }
