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
          fillParty(svg, no_of_decimals, "1", "Kesk", 15.5);
		      fillParty(svg, no_of_decimals, "2", "Kok", 20.2);
          fillParty(svg, no_of_decimals, "3", "PS", 7.9);
          fillParty(svg, no_of_decimals, "4", "SDP", 21.7);
          fillParty(svg, no_of_decimals, "5", "Vihr", 13.7);
          fillParty(svg, no_of_decimals, "6", "Vas", 9.6)
          fillParty(svg, no_of_decimals, "7", "RKP", 4.3);
          fillParty(svg, no_of_decimals, "8", "KD", 4.1);
          fillParty(svg, no_of_decimals, "9", "Sin", 1.2);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["KD"] = "EPP";
          ep_groups["Kesk"] = "ALDE";
          ep_groups["Kok"] = "EPP";
          ep_groups["PS"] = "ECR";
          ep_groups["RKP"] = "ALDE";
          ep_groups["SDP"] = "S&D";
          ep_groups["Sin"] = "ECR";
          ep_groups["Vas"] = "GUE/NGL";
          ep_groups["Vihr"] = "Greens/EFA";
          var colors = {};
          colors["*"] = "#999999";
          colors["ALDE"] = "#FFD700";
          colors["ECR"] = "#0000FF";
          colors["EFDD"] = "#24B9B9";
          colors["ENF"] = "#2B3856";
          colors["EPP"] = "#3399FF";
          colors["Greens/EFA"] = "#009900";
          colors["GUE/NGL"] = "#990000";
          colors["S&D"] = "#FF0000";
          var last_results = {};
          last_results["KD"] = 3.5;
          last_results["Kesk"] = 21.1;
          last_results["Kok"] = 18.2;
          last_results["PS"] = 17.7;
          last_results["RKP"] = 4.9;
          last_results["SDP"] = 16.5;
          last_results["Sin"] = 0;
          last_results["Vas"] = 7.1;
          last_results["Vihr"] = 8.5;
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
