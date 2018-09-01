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
          fillParty(svg, no_of_decimals, "1", "R", 30.0);
          fillParty(svg, no_of_decimals, "2", "K", 30.0);
          fillParty(svg, no_of_decimals, "3", "EKRE", 21.0);
          fillParty(svg, no_of_decimals, "4", "SDE", 13.0);
          fillParty(svg, no_of_decimals, "5", "I", 5.0);
          fillParty(svg, no_of_decimals, "6", "EVA", 5.0);
          fillParty(svg, no_of_decimals, "7", "ER", 2.0);
          fillParty(svg, no_of_decimals, "8", "EIP", 1.0);
          fillParty(svg, no_of_decimals, "9", "PU", 0.0);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["EIP"] = "*";
          ep_groups["EKRE"] = "*";
          ep_groups["ER"] = "Greens/EFA";
          ep_groups["EVA"] = "*";
          ep_groups["I"] = "EPP";
          ep_groups["K"] = "ALDE";
          ep_groups["PU"] = "*";
          ep_groups["R"] = "ALDE";
          ep_groups["SDE"] = "S&D";
          var last_results = {};
          last_results["EIP"] = 0.2;
          last_results["EKRE"] = 8.1;
          last_results["ER"] = 0.9;
          last_results["EVA"] = 8.7;
          last_results["I"] = 13.7;
          last_results["K"] = 24.8;
          last_results["PU"] = 0.4;
          last_results["R"] = 27.7;
          last_results["SDE"] = 15.2;
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
