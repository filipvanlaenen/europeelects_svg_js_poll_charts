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
          fillParty(svg, no_of_decimals, "1", "A", 26);
          fillParty(svg, no_of_decimals, "2", "O", 20);
          fillParty(svg, no_of_decimals, "3", "V", 18);
          fillParty(svg, no_of_decimals, "4", "Ø", 9);
          fillParty(svg, no_of_decimals, "5", "I", 5);
          fillParty(svg, no_of_decimals, "6", "Å", 5);
          fillParty(svg, no_of_decimals, "7", "B", 6);
          fillParty(svg, no_of_decimals, "8", "F", 5);
          fillParty(svg, no_of_decimals, "9", "C", 4);
		      fillParty(svg, no_of_decimals, "10", "D", 3);
		      fillParty(svg, no_of_decimals, "11", "K", 1);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["A"] = "S&D";
          ep_groups["Å"] = "Greens/EFA";
          ep_groups["B"] = "ALDE";
          ep_groups["C"] = "EPP";
          ep_groups["D"] = "*";
          ep_groups["F"] = "Greens/EFA";
          ep_groups["I"] = "*";
		      ep_groups["K"] = "EPP";
          ep_groups["O"] = "ECR";
          ep_groups["Ø"] = "GUE/NGL";
          ep_groups["V"] = "ALDE";
          var last_results = {};
          last_results["A"] = 26.28;
          last_results["Å"] = 4.8;
          last_results["B"] = 4.58;
          last_results["C"] = 3.35;
		      last_results["D"] = 0.0;
          last_results["F"] = 4.19;
          last_results["I"] = 7.53;
		      last_results["K"] = 0.83;
          last_results["O"] = 21.08;
          last_results["Ø"] = 7.8;
          last_results["V"] = 19.47;
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
