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
          fillParty(svg, no_of_decimals, "1", "M5S", 30);
		      fillParty(svg, no_of_decimals, "2", "PD", 17);
          fillParty(svg, no_of_decimals, "3", "LEGA", 30);
          fillParty(svg, no_of_decimals, "4", "FI", 9);
          fillParty(svg, no_of_decimals, "5", "Fdl", 4);
          fillParty(svg, no_of_decimals, "6", "LeU", 2);
          fillParty(svg, no_of_decimals, "7", "+E", 2);
          fillParty(svg, no_of_decimals, "8", "PaP", 3);
          fillParty(svg, no_of_decimals, "9", "NcI", 1);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["+E"] = "ALDE";
          ep_groups["Fdl"] = "*";
          ep_groups["FI"] = "EPP";
          ep_groups["LEGA"] = "ENF";
          ep_groups["LeU"] = "S&D";
          ep_groups["M5S"] = "EFDD";
          ep_groups["NcI"] = "*";
          ep_groups["PaP"] = "GUE/NGL";
          ep_groups["PD"] = "S&D";
          var last_results = {};
          last_results["+E"] = 2.56;
          last_results["Fdl"] = 4.35;
          last_results["FI"] = 14.00;
          last_results["LEGA"] = 17.35;
          last_results["LeU"] = 3.38;
          last_results["M5S"] = 32.68;
          last_results["NcI"] = 1.30;
          last_results["PaP"] = 1.13;
          last_results["PD"] = 18.76;
          var colors = getEpGroupColors();
          var max_value = 32.0;
          svg.getElementById("party-name-" + index).firstChild.nodeValue = name;
          svg.getElementById("ep-group-name-" + index).firstChild.nodeValue = ep_groups[name];
          svg.getElementById("party-bar-" + index).setAttribute("height", barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("y", 830 - barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("party-bar-last-" + index).setAttribute("height", barHeight(last_results[name], max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("y", 830 - barHeight(last_results[name], max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("percentage-" + index).firstChild.nodeValue = result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-" + index).setAttribute("y", 815 - barHeight(result, max_value));
          svg.getElementById("percentage-last-" + index).firstChild.nodeValue = last_results[name].toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-last-" + index).setAttribute("y", 815 - barHeight(last_results[name], max_value));
          if (last_results[name] < result) {
            var last_result_x = parseInt(svg.getElementById("percentage-last-" + index).getAttribute("x"));
            svg.getElementById("percentage-last-" + index).setAttribute("x", last_result_x + 20);
          }
        }
