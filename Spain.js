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
          fillParty(svg, no_of_decimals, "1", "PP", 20);
          fillParty(svg, no_of_decimals, "2", "PSOE", 30);
          fillParty(svg, no_of_decimals, "3", "UP", 16);
          fillParty(svg, no_of_decimals, "4", "Cs", 20);
          fillParty(svg, no_of_decimals, "5", "ERC", 4);
          fillParty(svg, no_of_decimals, "6", "PDeCAT", 1);
          fillParty(svg, no_of_decimals, "7", "PNV", 1);
          fillParty(svg, no_of_decimals, "8", "EHBildu", 1);
          fillParty(svg, no_of_decimals, "9", "CC", 0);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};         
          ep_groups["PSOE"] = "S&D";
          ep_groups["PP"] = "EPP";
          ep_groups["Cs"] = "ALDE";
          ep_groups["UP"] = "GUE/NGL";
          ep_groups["ERC"] = "Greens/EFA";
          ep_groups["PDeCAT"] = "ALDE";
          ep_groups["PNV"] = "ALDE";
          ep_groups["EHBildu"] = "GUE/NGL";
          ep_groups["CC"] = "ALDE";          
          var last_results = {};
          last_results["PP"] = 33;
          last_results["PSOE"] = 22.6;
          last_results["UP"] = 21.2;
          last_results["Cs"] = 13.1;
          last_results["ERC"] = 2.66;
          last_results["EHBildu"] = 0.77;
          last_results["PDeCAT"] = 2.01;
          last_results["PNV"] = 1.19;
          last_results["CC"] = 0.33;
          var colors = getEpGroupColors();
          var max_value = 33.0;
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
