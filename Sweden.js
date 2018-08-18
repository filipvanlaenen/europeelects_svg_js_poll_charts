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
          fillParty(svg, no_of_decimals, "1", "S", 23.6);
          fillParty(svg, no_of_decimals, "2", "M", 19.7);
          fillParty(svg, no_of_decimals, "3", "SD", 19.6);
          fillParty(svg, no_of_decimals, "4", "C", 11.1);
          fillParty(svg, no_of_decimals, "5", "V", 8.8);
          fillParty(svg, no_of_decimals, "6", "MP", 6.5);
          fillParty(svg, no_of_decimals, "7", "L", 4.8);
          fillParty(svg, no_of_decimals, "8", "KD", 3.6);
          fillParty(svg, no_of_decimals, "9", "Fi", 1.0);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["C"] = "ALDE";
          ep_groups["Fi"] = "S&D";
          ep_groups["L"] = "ALDE";
          ep_groups["KD"] = "EPP";
          ep_groups["M"] = "EPP";
          ep_groups["MP"] = "Greens/EFA";
          ep_groups["S"] = "S&D";
          ep_groups["SD"] = "ECR";
          ep_groups["V"] = "GUE/NGL";
          var colors = {};
          colors["ALDE"] = "#FFD700";
          colors["ECR"] = "#0000FF";
          colors["EPP"] = "#3399FF";
          colors["Greens/EFA"] = "#009900";
          colors["GUE/NGL"] = "#990000";
          colors["S&D"] = "#FF0000";
          var last_results = {};
          last_results["C"] = 6.1;
          last_results["Fi"] = 3.1;
          last_results["L"] = 5.4;
          last_results["KD"] = 4.6;
          last_results["M"] = 23.3;
          last_results["MP"] = 6.9;
          last_results["S"] = 31.0;
          last_results["SD"] = 12.9;
          last_results["V"] = 5.7;
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
