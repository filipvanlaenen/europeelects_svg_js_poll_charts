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
          fillParty(svg, no_of_decimals, "1", "PiS", 38.3);
          fillParty(svg, no_of_decimals, "2", "PO", 24.8);
          fillParty(svg, no_of_decimals, "3", "SLD", 8.5);
          fillParty(svg, no_of_decimals, "4", "K’15", 6.4);
          fillParty(svg, no_of_decimals, "5", "PSL", 5.4);
          fillParty(svg, no_of_decimals, "6", ".N", 4.1);
          fillParty(svg, no_of_decimals, "7", "RAZ", 1.7);
          fillParty(svg, no_of_decimals, "8", "WOL", 1.4);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["K’15"] = "*";
          ep_groups[".N"] = "ALDE";
          ep_groups["PiS"] = "ECR";
          ep_groups["PO"] = "EPP";
          ep_groups["PSL"] = "EPP";
          ep_groups["RAZ"] = "GUE/NGL";
          ep_groups["SLD"] = "S&D";
          ep_groups["WOL"] = "EFDD";
          var last_results = {};
          last_results["K’15"] = 8.8;
          last_results[".N"] = 7.6;
          last_results["PiS"] = 37.6;
          last_results["PO"] = 24.1;
          last_results["PSL"] = 5.1;
          last_results["RAZ"] = 3.6;
          last_results["SLD"] = 7.6;
          last_results["WOL"] = 4.8;
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
