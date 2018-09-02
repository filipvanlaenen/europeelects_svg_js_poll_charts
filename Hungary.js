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
          fillParty(svg, no_of_decimals, "1", "Fidesz-KDNP", 52);
          fillParty(svg, no_of_decimals, "2", "Jobbik", 16);
          fillParty(svg, no_of_decimals, "3", "MSZP-P", 15.0);
		      fillParty(svg, no_of_decimals, "4", "LMP", 4);
          fillParty(svg, no_of_decimals, "5", "DK", 4);
		      fillParty(svg, no_of_decimals, "6", "Momentum", 2);
          fillParty(svg, no_of_decimals, "7", "MKKP", 3);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["DK"] = "S&D";
          ep_groups["Fidesz-KDNP"] = "EPP";
          ep_groups["Jobbik"] = "NI";
          ep_groups["LMP"] = "Greens/EFA";
          ep_groups["MKKP"] = "*";
          ep_groups["Momentum"] = "ALDE";
          ep_groups["MSZP-P"] = "S&D";
          var last_results = {};
          last_results["DK"] = 5.38;
          last_results["Fidesz-KDNP"] = 49.27;
          last_results["Jobbik"] = 19.06;
          last_results["LMP"] = 7.06;
          last_results["MKKP"] = 1.73;
          last_results["Momentum"] = 3.06;
          last_results["MSZP-P"] = 11.91;
          var colors = getEpGroupColors();
          var max_value = 50.0;
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
