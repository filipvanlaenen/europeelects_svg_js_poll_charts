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
          fillParty(svg, no_of_decimals, "1", "ÖVP", 33);
          fillParty(svg, no_of_decimals, "2", "SPÖ", 26);
          fillParty(svg, no_of_decimals, "3", "FPÖ", 23);
          fillParty(svg, no_of_decimals, "4", "NEOS", 8);
          fillParty(svg, no_of_decimals, "5", "PILZ", 3);
          fillParty(svg, no_of_decimals, "6", "GRÜNE", 3);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["FPÖ"] = "ENF";
          ep_groups["GRÜNE"] = "Greens/EFA";
          ep_groups["NEOS"] = "ALDE";
          ep_groups["ÖVP"] = "EPP";
          ep_groups["PILZ"] = "*";
          ep_groups["SPÖ"] = "S&D";
          var last_results = {};
          last_results["FPÖ"] = 26.0;
          last_results["GRÜNE"] = 3.8;
          last_results["NEOS"] = 5.3;
          last_results["ÖVP"] = 31.4;
          last_results["PILZ"] = 4.4;
          last_results["SPÖ"] = 26.9;
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
